<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useOrderStore } from '@/stores/order';
import { IMockOrder } from '@/models/order/order.interface';
import { ElMessageBox } from 'element-plus';

const orderStore = useOrderStore();
const orders = ref<IMockOrder[]>([]);
const loading = ref(false);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');

async function fetchOrders() {
  loading.value = true;
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Use mock data - filter for active orders
    orders.value = orderStore.mockOrders.filter(order => order.status === 1);
    total.value = orders.value.length;
  } finally {
    loading.value = false;
  }
}

async function handleCancel(order: IMockOrder) {
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
  <div class="flex flex-col gap-4">
    <el-input
      v-model="searchText"
      placeholder="Search"
      class="w-full"
      @clear="fetchOrders"
      @keyup.enter="fetchOrders"
      clearable
    >
      <template #prefix>
        <span class="material-icons-outlined">search</span>
      </template>
    </el-input>

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
      <el-table-column label="Actions">
        <template #default="{ row }">
          <el-button 
            type="danger" 
            text
            @click="handleCancel(row)"
          >
            Cancel
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="flex justify-end">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="total"
        @current-change="fetchOrders"
      />
    </div>
  </div>
</template> 