<script setup lang="ts">
import { ref } from 'vue';

interface IReservation {
  id: number;
  parkingLot: string;
  startTime: string;
  endTime: string;
  status: string;
  user: string;
}

const tableData = ref<IReservation[]>([]);
const loading = ref(false);

const handleAdd = () => {
  // Add reservation logic
};

const handleEdit = (row: IReservation) => {
  // Edit reservation logic
};

const handleCancel = (row: IReservation) => {
  // Cancel reservation logic
};
</script>

<template>
  <div class="reservations-container">
    <el-card class="w-full">
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-2">calendar_month</span>
            <span>Reservations</span>
          </div>
          <el-button type="primary" @click="handleAdd">
            <span class="material-icons-outlined mr-1">add</span>
            New Reservation
          </el-button>
        </div>
      </template>

      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="parkingLot" label="Parking Lot" />
        <el-table-column prop="startTime" label="Start Time" width="180" />
        <el-table-column prop="endTime" label="End Time" width="180" />
        <el-table-column prop="user" label="User" />
        <el-table-column prop="status" label="Status" width="120">
          <template #default="{ row }">
            <el-tag :type="row.status === 'Active' ? 'success' : 'info'">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Actions" width="150" fixed="right">
          <template #default="{ row }">
            <el-button-group>
              <el-button type="primary" @click="handleEdit(row)">
                <span class="material-icons-outlined">edit</span>
              </el-button>
              <el-button type="danger" @click="handleCancel(row)">
                <span class="material-icons-outlined">cancel</span>
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.reservations-container {
  @apply p-4;
}
</style>
