<script setup lang="ts">
import { ref } from 'vue';

interface IReservation {
  licensePlate: string;
  title: string;
  duration: string;
  date: string;
  total: number;
}

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
  },
  {
    licensePlate: 'JKK12523423',
    title: 'Cbwork Walnut',
    duration: '2 Hours',
    date: '5/14/2024 10:10 AM',
    total: 20
  }
]);

const loading = ref(false);
</script>

<template>
  <div class="p-4">
    <el-card class="w-full">
      <template #header>
        <div class="flex items-center">
          <el-tabs>
            <el-tab-pane label="Active" />
            <el-tab-pane label="History" />
          </el-tabs>
        </div>
      </template>

      <div class="flex flex-col gap-4">
        <el-input
          placeholder="Search"
          class="w-full"
        >
          <template #prefix>
            <span class="material-icons-outlined">search</span>
          </template>
        </el-input>

        <el-card 
          v-for="reservation in activeReservations" 
          :key="reservation.licensePlate"
          class="bg-primary"
        >
          <div class="grid grid-cols-2 gap-4">
            <div>
              <div class="mb-2">License Plate</div>
              <div>{{ reservation.licensePlate }}</div>
            </div>
            <div>
              <div class="mb-2">Title</div>
              <div>{{ reservation.title }}</div>
            </div>
            <div>
              <div class="mb-2">Duration</div>
              <div>{{ reservation.duration }}</div>
            </div>
            <div>
              <div class="mb-2">Date</div>
              <div>{{ reservation.date }}</div>
            </div>
            <div>
              <div class="mb-2">Total</div>
              <div>${{ reservation.total }}</div>
            </div>
          </div>
        </el-card>
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.reservations-container {
  @apply p-4;
}
</style>
