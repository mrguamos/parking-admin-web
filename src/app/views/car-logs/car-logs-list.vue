<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useCarLogStore } from '@/stores/car-log';
import { ICarLog } from '@/models/car-log/car-log.interface';

const carLogStore = useCarLogStore();
const carLogs = ref<ICarLog[]>([]);
const loading = ref(false);
const total = ref(0);
const currentPage = ref(1);
const pageSize = ref(10);

async function fetchCarLogs() {
  loading.value = true;
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Use mock data
    carLogs.value = carLogStore.mockCarLogs;
    total.value = carLogStore.mockCarLogs.length;
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchCarLogs();
});
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Car Logs</h2>
    </div>

    <el-card>
      <el-table 
        v-loading="loading"
        :data="carLogs"
      >
        <el-table-column prop="plateNumber" label="License Plate" />
        <el-table-column prop="parkName" label="Parking Lot" />
        <el-table-column prop="inTime" label="Entry Time" />
        <el-table-column prop="outTime" label="Exit Time" />
        <el-table-column prop="inGate" label="Entry Gate" />
        <el-table-column prop="outGate" label="Exit Gate" />
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="total"
          @current-change="fetchCarLogs"
        />
      </div>
    </el-card>
  </div>
</template> 