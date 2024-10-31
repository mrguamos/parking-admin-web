<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useParkingLotStore } from '@stores/parking-lot';
import { ElMessageBox } from 'element-plus';
import parkingLotImage from '@assets/img/parking-lot.jpg';

const router = useRouter();
const parkingLotStore = useParkingLotStore();
const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');

// Mock data
const mockParkingLots = [
  {
    parkId: 1,
    parkNumber: "PL-001",
    parkName: "Downtown Central Parking",
    usableSpace: 85,
    totalSpaces: 100,
    address: "123 Main Street",
    status: 1,
    priceList: [
      { priceType: 0, price: 5, priceTypeName: "Hourly" },
      { priceType: 1, price: 25, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 2,
    tax: 1.5,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90012",
    distance: 0,
    refundAllow: true,
    cancelFee: 5
  },
  {
    parkId: 2,
    parkNumber: "PL-002",
    parkName: "Westfield Mall Parking",
    usableSpace: 120,
    totalSpaces: 150,
    address: "456 Shopping Ave",
    status: 1,
    priceList: [
      { priceType: 0, price: 4, priceTypeName: "Hourly" },
      { priceType: 1, price: 20, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 1.5,
    tax: 1,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90014",
    distance: 0,
    refundAllow: true,
    cancelFee: 3
  },
  {
    parkId: 3,
    parkNumber: "PL-003",
    parkName: "Beach Front Parking",
    usableSpace: 45,
    totalSpaces: 50,
    address: "789 Ocean Drive",
    status: 0,
    priceList: [
      { priceType: 0, price: 6, priceTypeName: "Hourly" },
      { priceType: 1, price: 30, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 2.5,
    tax: 2,
    country: "USA",
    state: "CA",
    city: "Santa Monica",
    zipCode: "90401",
    distance: 0,
    refundAllow: true,
    cancelFee: 5
  },
  {
    parkId: 4,
    parkNumber: "PL-004",
    parkName: "Airport Terminal Parking",
    usableSpace: 230,
    totalSpaces: 300,
    address: "1000 Airport Way",
    status: 1,
    priceList: [
      { priceType: 0, price: 8, priceTypeName: "Hourly" },
      { priceType: 1, price: 35, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 3,
    tax: 2.5,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90045",
    distance: 0,
    refundAllow: true,
    cancelFee: 10
  },
  {
    parkId: 5,
    parkNumber: "PL-005",
    parkName: "Convention Center Parking",
    usableSpace: 180,
    totalSpaces: 200,
    address: "456 Convention Blvd",
    status: 1,
    priceList: [
      { priceType: 0, price: 7, priceTypeName: "Hourly" },
      { priceType: 1, price: 28, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 2,
    tax: 1.8,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90015",
    distance: 0,
    refundAllow: true,
    cancelFee: 7
  },
  {
    parkId: 6,
    parkNumber: "PL-006",
    parkName: "Stadium VIP Parking",
    usableSpace: 90,
    totalSpaces: 100,
    address: "789 Sports Ave",
    status: 1,
    priceList: [
      { priceType: 0, price: 10, priceTypeName: "Hourly" },
      { priceType: 1, price: 40, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 4,
    tax: 3,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90015",
    distance: 0,
    refundAllow: true,
    cancelFee: 15
  },
  {
    parkId: 7,
    parkNumber: "PL-007",
    parkName: "Medical Center Parking",
    usableSpace: 140,
    totalSpaces: 150,
    address: "321 Hospital Drive",
    status: 1,
    priceList: [
      { priceType: 0, price: 5, priceTypeName: "Hourly" },
      { priceType: 1, price: 20, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 1.5,
    tax: 1.2,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90033",
    distance: 0,
    refundAllow: true,
    cancelFee: 5
  },
  {
    parkId: 8,
    parkNumber: "PL-008",
    parkName: "University Campus Parking",
    usableSpace: 280,
    totalSpaces: 300,
    address: "555 University Way",
    status: 0,
    priceList: [
      { priceType: 0, price: 4, priceTypeName: "Hourly" },
      { priceType: 1, price: 18, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 1,
    tax: 0.8,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90089",
    distance: 0,
    refundAllow: true,
    cancelFee: 3
  },
  {
    parkId: 9,
    parkNumber: "PL-009",
    parkName: "Metro Station Parking",
    usableSpace: 175,
    totalSpaces: 200,
    address: "123 Transit Street",
    status: 1,
    priceList: [
      { priceType: 0, price: 3, priceTypeName: "Hourly" },
      { priceType: 1, price: 15, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 1,
    tax: 0.5,
    country: "USA",
    state: "CA",
    city: "Los Angeles",
    zipCode: "90012",
    distance: 0,
    refundAllow: true,
    cancelFee: 2
  },
  {
    parkId: 10,
    parkNumber: "PL-010",
    parkName: "Tech Hub Parking",
    usableSpace: 85,
    totalSpaces: 100,
    address: "888 Innovation Blvd",
    status: 1,
    priceList: [
      { priceType: 0, price: 6, priceTypeName: "Hourly" },
      { priceType: 1, price: 25, priceTypeName: "Daily" }
    ],
    businessHoursList: [],
    clientId: 1,
    merchantId: 1,
    pricePerFine: true,
    serviceFee: 2,
    tax: 1.5,
    country: "USA",
    state: "CA",
    city: "Santa Monica",
    zipCode: "90401",
    distance: 0,
    refundAllow: true,
    cancelFee: 5
  }
];

// Add search functionality
const filteredParkingLots = computed(() => {
  if (!searchText.value) return mockParkingLots;
  
  const search = searchText.value.toLowerCase();
  return mockParkingLots.filter(lot => 
    lot.parkName.toLowerCase().includes(search) ||
    lot.parkNumber.toLowerCase().includes(search) ||
    lot.address.toLowerCase().includes(search) ||
    lot.city.toLowerCase().includes(search)
  );
});

async function fetchParkingLots() {
  loading.value = true;
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Store the mock data in the store
    parkingLotStore.parkingLots = mockParkingLots.map(lot => ({
      id: lot.parkId,
      name: lot.parkName,
      address: lot.address,
      city: lot.city,
      state: lot.state,
      zipCode: lot.zipCode,
      spots: lot.totalSpaces,
      available: lot.usableSpace,
      status: lot.status === 1 ? 'Active' : 'Inactive',
      rates: {
        hourly: lot.priceList.some(p => p.priceType === 0),
        daily: lot.priceList.some(p => p.priceType === 1),
        weekly: lot.priceList.some(p => p.priceType === 2),
        monthly: lot.priceList.some(p => p.priceType === 3)
      }
    }));
  } finally {
    loading.value = false;
  }
}

async function handleDelete(parkingLot: { parkId: number }) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this parking lot?',
      'Warning',
      {
        type: 'warning'
      }
    );
    // Use store for delete operation
    await parkingLotStore.deleteParkingLot(parkingLot.parkId);
    await fetchParkingLots();
  } catch {
    // User cancelled deletion
  }
}

function handleEdit(parkingLot: { parkId: number }) {
  // Store the full parking lot data in the store before navigating
  const fullLot = mockParkingLots.find(lot => lot.parkId === parkingLot.parkId);
  if (fullLot) {
    // Store the original data for the form
    parkingLotStore.currentParkingLot = fullLot;
  }
  router.push(`/parking-lots/${parkingLot.parkId}/form`);
}

onMounted(() => {
  fetchParkingLots();
});
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

    <!-- Updated search bar to use full width -->
    <div class="mb-6">
      <el-input
        v-model="searchText"
        placeholder="Search parking lots..."
        class="w-full"
        clearable
      >
        <template #prefix>
          <span class="material-icons-outlined text-gray-400">search</span>
        </template>
      </el-input>
    </div>

    <div v-loading="loading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <el-card 
        v-for="lot in filteredParkingLots" 
        :key="lot.parkId" 
        class="overflow-hidden"
      >
        <div class="flex flex-col gap-4">
          <div class="h-48 -mx-5 -mt-5 mb-2">
            <img 
              :src="parkingLotImage" 
              :alt="lot.parkName"
              class="w-full h-full object-cover"
            />
          </div>

          <div class="flex flex-col gap-2">
            <div class="flex justify-between items-start">
              <div>
                <h3 class="text-lg font-medium">{{ lot.parkName }}</h3>
                <p class="text-sm text-gray-500">{{ lot.address }}</p>
              </div>
              <el-tag :type="lot.status === 1 ? 'success' : 'info'">
                {{ lot.status === 1 ? 'Active' : 'Inactive' }}
              </el-tag>
            </div>

            <div class="flex items-center gap-2">
              <el-tag type="info">
                {{ lot.usableSpace }}/{{ lot.totalSpaces }} Spaces
              </el-tag>
              <el-tag 
                v-if="lot.priceList?.[0]"
                type="warning"
              >
                ${{ lot.priceList[0].price }}/hr
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
        :total="mockParkingLots.length"
        @current-change="fetchParkingLots"
      />
    </div>
  </div>
</template>
