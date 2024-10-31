<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useParkingLotStore } from '@/stores/parking-lot';
import type { IParkingLotForm } from '@/models/parking/parking-lot.interface';
import parkingLotImage from '@assets/img/parking-lot.jpg';

const router = useRouter();
const parkingLotStore = useParkingLotStore();
const loading = ref(false);
const searchText = ref('');
const currentPage = ref(1);
const pageSize = ref(10);

const mockParkingLots: IParkingLotForm[] = Array(20).fill(null).map((_, index) => ({
  parkId: index + 1,
  parkingType: 'Commercial',
  name: `Parking Lot ${index + 1}`,
  address: `${1000 + index} Main Street`,
  city: 'Buena Park',
  zipCode: '90062',
  state: 'CA',
  dockStart: `${10 + (index * 2)}`,
  dockEnd: `${11 + (index * 2)}`,
  operatingRate: '250',
  gracePeriod: '2',
  gracePeriodUnit: 'Minutes',
  reservedDocks: [`${24 + index}`],
  rates: {
    hourly: true,
    daily: index % 2 === 0,
    weekly: index % 3 === 0,
    monthly: index % 4 === 0,
    hourlyRate: `${10 + index}`,
    dailyRate: index % 2 === 0 ? `${50 + index}` : '',
    weeklyRate: index % 3 === 0 ? `${200 + index}` : '',
    monthlyRate: index % 4 === 0 ? `${800 + index}` : ''
  },
  images: [],
  propertyOverview: `Modern commercial parking facility ${index + 1}`,
  buildingHighlights: 'Well-lit, 24/7 security',
  amenities: 'Security cameras, EV charging',
  termsOfService: 'Standard parking terms apply',
  status: index % 3 === 0 ? 0 : 1,
  availableSpaces: index + 1
}));

// Function to calculate total spaces
function calculateTotalSpaces(lot: IParkingLotForm) {
  const start = parseInt(lot.dockStart) || 0;
  const end = parseInt(lot.dockEnd) || 0;
  return start && end ? end - start + 1 : 0;
}

// Function to ensure available spaces display is valid
function getAvailableSpaces(lot: IParkingLotForm) {
  const total = calculateTotalSpaces(lot);
  return Math.min(lot.availableSpaces, total);
}

// Filter and paginate parking lots
const filteredParkingLots = computed(() => {
  let filtered = mockParkingLots;
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    filtered = mockParkingLots.filter(lot => 
      lot.name.toLowerCase().includes(search) ||
      lot.address.toLowerCase().includes(search) ||
      lot.city.toLowerCase().includes(search)
    );
  }
  return filtered;
});

// Paginate the filtered results
const paginatedParkingLots = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredParkingLots.value.slice(start, end);
});

function handlePageChange(page: number) {
  currentPage.value = page;
}

function handleEdit(lot: IParkingLotForm) {
  parkingLotStore.currentParkingLot = { ...lot };
  router.push(`/parking-lots/${lot.parkId}/form`);
}

function handleDelete(lot: IParkingLotForm) {
  // Implement delete functionality
}
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Parking Lots</h2>
      <el-button type="primary" @click="router.push('/parking-lots/form')">
        <span class="material-icons-outlined mr-2">add</span>
        Add Parking Lot
      </el-button>
    </div>

    <div class="mb-6">
      <el-input
        v-model="searchText"
        placeholder="Search parking lots..."
        class="w-full"
        clearable
      >
        <template #prefix>
          <span class="material-icons-outlined">search</span>
        </template>
      </el-input>
    </div>

    <div v-loading="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <el-card 
        v-for="lot in paginatedParkingLots" 
        :key="lot.name" 
        class="overflow-hidden"
      >
        <div class="flex flex-col gap-4">
          <div class="h-48 -mx-5 -mt-5 mb-2">
            <img 
              :src="parkingLotImage" 
              :alt="lot.name"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">{{ lot.name }}</h3>
                <p class="text-sm text-gray-500">{{ lot.address }}</p>
              </div>
              <el-tag :type="lot.status === 1 ? 'success' : 'info'">
                {{ lot.status === 1 ? 'Active' : 'Inactive' }}
              </el-tag>
            </div>

            <div class="flex items-center gap-2">
              <el-tag type="info">
                {{ getAvailableSpaces(lot) }}/{{ calculateTotalSpaces(lot) }} Spaces
              </el-tag>
              <el-tag 
                v-if="lot.rates.hourly"
                type="warning"
              >
                ${{ lot.rates.hourlyRate }}/hr
              </el-tag>
            </div>

            <div class="flex justify-between items-center mt-2">
              <div class="text-sm text-gray-500">
                {{ lot.city }}, {{ lot.state }}
              </div>
              <div class="flex gap-2">
                <el-button 
                  type="primary" 
                  text
                  @click="handleEdit(lot)"
                >
                  <span class="material-icons-outlined">edit</span>
                </el-button>
                <el-button 
                  type="danger" 
                  text
                  @click="handleDelete(lot)"
                >
                  <span class="material-icons-outlined">delete</span>
                </el-button>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>

    <div class="flex justify-end mt-4">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :total="filteredParkingLots.length"
        @current-change="handlePageChange"
      />
    </div>
  </div>
</template>
