<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { orderApi } from '@/apis/orderApi';
import { IOrder } from '@/models/order/order.interface';
import { ElMessageBox } from 'element-plus';

const orders = ref<IOrder[]>([]);
const loading = ref(false);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');

async function fetchOrders() {
  loading.value = true;
  try {
    const response = await orderApi.getOrders({
      pageIndex: currentPage.value,
      pageSize: pageSize.value,
      searchText: searchText.value
    });
    orders.value = response.data.data;
    total.value = response.data.total;
  } finally {
    loading.value = false;
  }
}

async function handleCancel(order: IOrder) {
  try {
    await ElMessageBox.confirm('Are you sure you want to cancel this order?', 'Warning', {
      type: 'warning'
    });
    await orderApi.cancelOrder(order.orderId);
    await fetchOrders();
  } catch {
    // User cancelled the operation
  }
}

onMounted(() => {
  fetchOrders();
});
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Orders</h2>
      <el-input
        v-model="searchText"
        placeholder="Search orders..."
        class="w-64"
        clearable
        @clear="fetchOrders"
        @keyup.enter="fetchOrders"
      >
        <template #prefix>
          <span class="material-icons-outlined">search</span>
        </template>
      </el-input>
    </div>

    <el-card>
      <el-table 
        v-loading="loading"
        :data="orders"
      >
        <el-table-column prop="orderNo" label="Order Number" />
        <el-table-column prop="parkName" label="Parking Lot" />
        <el-table-column prop="plateNumbers" label="License Plates" />
        <el-table-column prop="startTime" label="Start Time" />
        <el-table-column prop="endTime" label="End Time" />
        <el-table-column prop="total" label="Total">
          <template #default="{ row }">
            ${{ row.total }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status">
          <template #default="{ row }">
            <el-tag :type="row.status === 1 ? 'success' : 'info'">
              {{ row.status === 1 ? 'Active' : 'Completed' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Actions">
          <template #default="{ row }">
            <el-button 
              v-if="row.status === 1"
              type="danger" 
              text
              @click="handleCancel(row)"
            >
              Cancel
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          @current-change="fetchOrders"
        />
      </div>
    </el-card>
  </div>
</template> 