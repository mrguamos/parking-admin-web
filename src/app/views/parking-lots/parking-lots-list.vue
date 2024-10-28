<script setup lang="ts">
import { ref } from 'vue';

interface IParkingLot {
  id: number;
  name: string;
  capacity: number;
  available: number;
  status: string;
}

const tableData = ref<IParkingLot[]>([]);
const loading = ref(false);

const handleAdd = () => {
  // Add parking lot logic
};

const handleEdit = (row: IParkingLot) => {
  // Edit parking lot logic
};

const handleDelete = (row: IParkingLot) => {
  // Delete parking lot logic
};
</script>

<template>
  <div class="parking-lots-container">
    <el-card class="w-full">
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-2">local_parking</span>
            <span>Parking Lots</span>
          </div>
          <el-button type="primary" @click="handleAdd">
            <span class="material-icons-outlined mr-1">add</span>
            Add Parking Lot
          </el-button>
        </div>
      </template>

      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="capacity" label="Capacity" width="120" />
        <el-table-column prop="available" label="Available" width="120" />
        <el-table-column prop="status" label="Status" width="120">
          <template #default="{ row }">
            <el-tag :type="row.status === 'Active' ? 'success' : 'danger'">
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
              <el-button type="danger" @click="handleDelete(row)">
                <span class="material-icons-outlined">delete</span>
              </el-button>
            </el-button-group>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.parking-lots-container {
  @apply p-4;
}
</style>
