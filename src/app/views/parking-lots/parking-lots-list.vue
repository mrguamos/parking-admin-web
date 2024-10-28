<script setup lang="ts">
import { ref } from 'vue';

interface IParkingLot {
  id: number;
  name: string;
  address: string;
  capacity: number;
  available: number;
  status: string;
}

const tableData = ref<IParkingLot[]>([
  {
    id: 1,
    name: 'Buena Park Back Side',
    address: '6800 Valley View Street, Buena Park, CA 90000',
    capacity: 100,
    available: 21,
    status: 'Active'
  },
  {
    id: 2,
    name: 'Buena Park Back Side',
    address: '6800 Valley View Street, Buena Park, CA 90000',
    capacity: 100,
    available: 21,
    status: 'Active'
  }
]);

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
  <div class="p-4">
    <el-card class="w-full">
      <template #header>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-2">local_parking</span>
            <span class="text-lg font-medium">Parking Lots</span>
          </div>
          <el-button type="primary" @click="handleAdd">
            <template #icon>
              <span class="material-icons-outlined">add</span>
            </template>
            Add Parking Lot
          </el-button>
        </div>
      </template>

      <div class="grid grid-cols-1 gap-4">
        <el-card 
          v-for="lot in tableData" 
          :key="lot.id"
          class="bg-primary"
        >
          <div class="flex flex-col gap-4">
            <div class="flex gap-4">
              <div class="w-96 h-48 rounded-lg overflow-hidden">
                <img 
                  src="@assets/img/parking-lot.jpg" 
                  alt="Parking Lot" 
                  class="w-full h-full object-cover"
                />
              </div>
              <div class="flex flex-col justify-between flex-grow">
                <div>
                  <h3 class="text-xl font-medium mb-2">{{ lot.name }}</h3>
                  <p class="text-sm ">{{ lot.address }}</p>
                </div>
                <div class="flex items-center">
                  <el-tag type="success" class="text-xs">
                    {{ lot.available }}/{{ lot.capacity }} Available
                  </el-tag>
                </div>
              </div>
              <div class="flex gap-2">
                <el-button type="primary" @click="handleEdit(lot)">
                  <template #icon>
                    <span class="material-icons-outlined">edit</span>
                  </template>
                </el-button>
                <el-button type="danger" @click="handleDelete(lot)">
                  <template #icon>
                    <span class="material-icons-outlined">delete</span>
                  </template>
                </el-button>
              </div>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>
