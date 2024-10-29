<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { driverApi } from '@/apis/driverApi';
import { useDriverStore } from '@/stores/driver';
import { IUpdateDriverDto } from '@/models/driver/driver.interface';
import { ElMessageBox } from 'element-plus';

const router = useRouter();
const driverStore = useDriverStore();
const drivers = ref<IUpdateDriverDto[]>([]);
const loading = ref(false);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');

async function fetchDrivers() {
  loading.value = true;
  try {
    // Simulate API call with mock data
    await new Promise(resolve => setTimeout(resolve, 1000));
    drivers.value = driverStore.mockDrivers;
    total.value = driverStore.mockDrivers.length;

    // Keep the API call structure for future use
    // const response = await driverApi.getAllDrivers({
    //   pageIndex: currentPage.value,
    //   pageSize: pageSize.value,
    //   searchText: searchText.value
    // });
    // drivers.value = response.data.data;
    // total.value = response.data.total;
  } finally {
    loading.value = false;
  }
}

async function handleDelete(driver: IUpdateDriverDto) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this driver?',
      'Warning',
      {
        type: 'warning'
      }
    );
    // Use store for delete operation
    driverStore.mockDrivers = driverStore.mockDrivers.filter(d => d.id !== driver.id);
    await fetchDrivers();
  } catch {
    // User cancelled deletion
  }
}

onMounted(() => {
  fetchDrivers();
});
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Driver Profiles</h2>
      <el-button type="primary" @click="router.push('/drivers/form')">
        <span class="material-icons-outlined mr-2">add</span>
        Add Driver
      </el-button>
    </div>

    <el-card>
      <div class="mb-4">
        <el-input
          v-model="searchText"
          placeholder="Search drivers..."
          class="w-64"
          clearable
          @clear="fetchDrivers"
          @keyup.enter="fetchDrivers"
        >
          <template #prefix>
            <span class="material-icons-outlined">search</span>
          </template>
        </el-input>
      </div>

      <el-table 
        v-loading="loading"
        :data="drivers"
      >
        <el-table-column prop="firstName" label="First Name" />
        <el-table-column prop="lastName" label="Last Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="phoneNumber" label="Phone Number" />
        <el-table-column label="Actions" width="200">
          <template #default="{ row }">
            <el-button 
              type="primary" 
              text
              @click="router.push(`/drivers/${row.id}/form`)"
            >
              <span class="material-icons-outlined">edit</span>
            </el-button>
            <el-button 
              type="danger" 
              text
              @click="handleDelete(row)"
            >
              <span class="material-icons-outlined">delete</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          @current-change="fetchDrivers"
        />
      </div>
    </el-card>
  </div>
</template> 