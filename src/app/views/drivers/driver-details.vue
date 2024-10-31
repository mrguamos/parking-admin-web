<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useDriverStore } from '@/stores/driver';

const router = useRouter();
const driverStore = useDriverStore();
const searchText = ref('');

const tabs = [
  { name: 'Reservations', key: 'reservations' },
  { name: 'LPs', key: 'lps' },
  { name: 'RFIDs', key: 'rfids' }
];

const activeTab = ref('reservations');

function handleBack() {
  router.push('/drivers');
}
</script>

<template>
  <div class="p-6">
    <!-- Header -->
    <div class="mb-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-semibold">{{ driverStore.selectedDriver?.name }}</h2>
        <el-button @click="handleBack">
          <span class="material-icons-outlined">arrow_back</span>
        </el-button>
      </div>

      <!-- Stats Cards -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <el-card>
          <div class="space-y-2">
            <div>Total Paid</div>
            <div class="text-2xl">${{ driverStore.selectedDriver?.totalPaid.toFixed(2) }}</div>
          </div>
        </el-card>
        <el-card>
          <div class="space-y-2">
            <div>Number of reservations</div>
            <div class="text-2xl">{{ driverStore.selectedDriver?.numberOfReservations }}</div>
          </div>
        </el-card>
        <el-card>
          <div class="space-y-2">
            <div>Amount Overdue</div>
            <div class="text-2xl text-red-500">${{ driverStore.selectedDriver?.amountOverdue.toFixed(2) }}</div>
          </div>
        </el-card>
        <el-card>
          <div class="space-y-2">
            <div>Number of Trucks</div>
            <div class="text-2xl">{{ driverStore.selectedDriver?.numberOfTrucks }}</div>
          </div>
        </el-card>
      </div>

      <!-- Tabs -->
      <div class="flex gap-4 mb-6">
        <el-button 
          v-for="tab in tabs" 
          :key="tab.key"
          :type="activeTab === tab.key ? 'primary' : 'default'"
          @click="activeTab = tab.key"
        >
          {{ tab.name }}
        </el-button>
      </div>

      <!-- Search -->
      <el-input
        v-if="activeTab === 'reservations'"
        v-model="searchText"
        placeholder="Search reservations..."
        class="w-full"
        clearable
      >
        <template #prefix>
          <span class="material-icons-outlined">search</span>
        </template>
      </el-input>
    </div>

    <!-- Reservations List -->
    <el-card v-if="activeTab === 'reservations'">
      <div v-for="(reservation, index) in driverStore.selectedDriver?.reservations" 
           :key="index"
           class="py-4 border-b last:border-b-0"
      >
        <div class="flex justify-between items-start">
          <div>
            <div class="flex items-center gap-4">
              <div>License Plate: {{ reservation.licensePlate }}</div>
              <div>Title: {{ reservation.title }}</div>
            </div>
            <div class="flex items-center gap-4 mt-2">
              <div>Duration: {{ reservation.duration }}</div>
              <div>Date: {{ reservation.date }}</div>
            </div>
          </div>
          <div class="text-right">
            <div>${{ reservation.total.toFixed(2) }}</div>
            <div v-if="reservation.overdueFine" class="text-red-500">
              Overdue Fine: ${{ reservation.overdueFine.toFixed(2) }}
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template> 