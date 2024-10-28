<script setup lang="ts">
import { ref } from 'vue';

interface IParkingLot {
  id: number;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  spots: number;
  rates: {
    hourly: boolean;
    daily: boolean;
    weekly: boolean;
    monthly: boolean;
  };
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
const dialogVisible = ref(false);

const handleAdd = () => {
  dialogVisible.value = true;
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

    <el-dialog
      v-model="dialogVisible"
      title="Create Parking Lot"
      width="500px"
    >
      <div class="p-6">
        <el-form label-position="top">
          <div class="mb-6">
            <h3 class="text-xs font-medium uppercase text-gray-500 mb-4">LOCATION</h3>
            <el-form-item>
              <el-input placeholder="Name" />
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Address" />
            </el-form-item>
            <el-form-item>
              <el-input placeholder="City" />
            </el-form-item>
            <el-form-item>
              <el-input placeholder="Zip Code" />
            </el-form-item>
            <el-form-item>
              <el-select class="w-full" placeholder="State">
                <el-option label="California" value="CA" />
                <el-option label="New York" value="NY" />
                <!-- Add more states as needed -->
              </el-select>
            </el-form-item>
          </div>

          <div>
            <h3 class="text-xs font-medium uppercase text-gray-500 mb-4">PREFERENCES</h3>
            <el-form-item>
              <el-input placeholder="Number of Spots" />
            </el-form-item>
            <div class="space-y-2">
              <el-checkbox label="Hourly Rate" />
              <el-checkbox label="Daily Rate" />
              <el-checkbox label="Weekly Rate" />
              <el-checkbox label="Monthly Rate" />
            </div>
          </div>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary">Create</el-button>
      </template>
    </el-dialog>
  </div>
</template>
