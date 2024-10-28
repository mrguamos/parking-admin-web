<script setup lang="ts">
import { ref } from 'vue';

interface IReservation {
  licensePlate: string;
  title: string;
  duration: string;
  date: string;
  total: number;
}

const statistics = ref({
  openSpots: 123,
  bookedSpots: '$123.00',
  todaysReservations: 123,
  todaysRevenue: '$321.00'
});

const activeReservations = ref<IReservation[]>([
  {
    licensePlate: 'JKK12523423',
    title: 'Cbwork Walnut',
    duration: '2 Hours',
    date: '5/14/2024 10:10 AM',
    total: 20
  },
  {
    licensePlate: 'JKK12523423',
    title: 'Cbwork Walnut',
    duration: '2 Hours',
    date: '5/14/2024 10:10 AM',
    total: 20
  }
]);
</script>

<template>
  <div class="p-4">
    <!-- Statistics Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <el-card class="h-full">
        <div class="flex flex-col">
          <div class="text-sm  mb-2">Open Spots</div>
          <div class="text-2xl font-semibold">{{ statistics.openSpots }}</div>
        </div>
      </el-card>

      <el-card class="h-full">
        <div class="flex flex-col">
          <div class="text-sm  mb-2">Booked Spots</div>
          <div class="text-2xl font-semibold">{{ statistics.bookedSpots }}</div>
        </div>
      </el-card>

      <el-card class="h-full">
        <div class="flex flex-col">
          <div class="text-sm  mb-2">Today's Reservations</div>
          <div class="text-2xl font-semibold">{{ statistics.todaysReservations }}</div>
        </div>
      </el-card>

      <el-card class="h-full">
        <div class="flex flex-col">
          <div class="text-sm  mb-2">Today's Revenue</div>
          <div class="text-2xl font-semibold">{{ statistics.todaysRevenue }}</div>
        </div>
      </el-card>
    </div>

    <!-- Active Reservations -->
    <el-card>
      <template #header>
        <div class="flex items-center">
          <span class="material-icons-outlined mr-2">calendar_today</span>
          <span class="text-lg font-medium">Active Reservations</span>
        </div>
      </template>

      <el-table :data="activeReservations" style="width: 100%">
        <el-table-column prop="licensePlate" label="License Plate" />
        <el-table-column prop="title" label="Title" />
        <el-table-column prop="duration" label="Duration" />
        <el-table-column prop="date" label="Date" />
        <el-table-column prop="total" label="Total">
          <template #default="{ row }">
            ${{ row.total }}
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
