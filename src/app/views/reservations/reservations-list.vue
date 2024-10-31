<script setup lang="ts">
import { ref, computed } from 'vue';

interface IReservation {
  id: number;
  orderNo: string;
  parkingLot: string;
  licensePlate: string;
  startTime: string;
  endTime: string;
  status: string;
  total: number;
}

const loading = ref(false);
const searchText = ref('');
const currentPage = ref(1);
const pageSize = ref(10);

const filterDialogVisible = ref(false);
const filterForm = ref({
  startDate: '',
  endDate: '',
  licensePlate: '',
  parkingLot: '',
  minPrice: '',
  maxPrice: ''
});

// Mock data
const mockReservations: IReservation[] = Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  orderNo: `ORD-${String(index + 1).padStart(4, '0')}`,
  parkingLot: `Parking Lot ${(index % 5) + 1}`,
  licensePlate: `ABC${String(index + 123)}`,
  startTime: new Date(Date.now() - (index * 24 * 60 * 60 * 1000)).toISOString(),
  endTime: new Date(Date.now() + ((index + 1) * 24 * 60 * 60 * 1000)).toISOString(),
  status: index % 3 === 0 ? 'Completed' : index % 3 === 1 ? 'Active' : 'Cancelled',
  total: 50 + (index * 10)
}));

// Filter reservations based on search
const filteredReservations = computed(() => {
  let filtered = mockReservations;
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    filtered = mockReservations.filter(reservation => 
      reservation.orderNo.toLowerCase().includes(search) ||
      reservation.parkingLot.toLowerCase().includes(search) ||
      reservation.licensePlate.toLowerCase().includes(search)
    );
  }
  return filtered;
});

// Paginate the filtered results
const paginatedReservations = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredReservations.value.slice(start, end);
});

function handlePageChange(page: number) {
  currentPage.value = page;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString();
}

// Add parking lot options for filter
const parkingLotOptions = computed(() => {
  const uniqueLots = new Set(mockReservations.map(r => r.parkingLot));
  return Array.from(uniqueLots).map(lot => ({
    label: lot,
    value: lot
  }));
});

function handleFilter() {
  filterDialogVisible.value = false;
  // Implement filter logic here
}

function resetFilter() {
  filterForm.value = {
    startDate: '',
    endDate: '',
    licensePlate: '',
    parkingLot: '',
    minPrice: '',
    maxPrice: ''
  };
}
</script>

<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Reservations</h2>
      <div class="flex gap-4">
        <el-input
          v-model="searchText"
          placeholder="Search reservations..."
          class="w-full"
          clearable
        >
          <template #prefix>
            <span class="material-icons-outlined">search</span>
          </template>
        </el-input>
        <el-button @click="filterDialogVisible = true">
          <span class="material-icons-outlined">filter_list</span>
          Filter
        </el-button>
      </div>
    </div>

    <el-card v-loading="loading">
      <el-table :data="paginatedReservations">
        <el-table-column prop="orderNo" label="Order No." />
        <el-table-column prop="parkingLot" label="Parking Lot" />
        <el-table-column prop="licensePlate" label="License Plate" />
        <el-table-column label="Start Time">
          <template #default="{ row }">
            {{ formatDate(row.startTime) }}
          </template>
        </el-table-column>
        <el-table-column label="End Time">
          <template #default="{ row }">
            {{ formatDate(row.endTime) }}
          </template>
        </el-table-column>
        <el-table-column prop="total" label="Total">
          <template #default="{ row }">
            ${{ row.total }}
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status" align="center">
          <template #default="{ row }">
            <el-tag 
              :type="row.status === 'Active' ? 'success' : 
                     row.status === 'Completed' ? 'info' : 'danger'"
            >
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="filteredReservations.length"
          @current-change="handlePageChange"
        />
      </div>
    </el-card>

    <!-- Filter Dialog -->
    <el-dialog
      v-model="filterDialogVisible"
      title="Filter Reservations"
      width="500px"
    >
      <div class="p-6 space-y-6">
        <div class="grid grid-cols-2 gap-6">
          <div>
            <div class="mb-2">Start Date</div>
            <el-date-picker
              v-model="filterForm.startDate"
              type="date"
              placeholder="mm/dd/yyyy"
              class="w-full"
            />
          </div>
          <div>
            <div class="mb-2">End Date</div>
            <el-date-picker
              v-model="filterForm.endDate"
              type="date"
              placeholder="mm/dd/yyyy"
              class="w-full"
            />
          </div>
        </div>

        <div>
          <div class="mb-2">License Plate</div>
          <el-input 
            v-model="filterForm.licensePlate" 
            placeholder="Enter license plate"
          />
        </div>

        <div>
          <div class="mb-2">Parking Lot</div>
          <el-select 
            v-model="filterForm.parkingLot" 
            class="w-full" 
            placeholder="Select parking lot"
          >
            <el-option
              v-for="option in parkingLotOptions"
              :key="option.value"
              :label="option.label"
              :value="option.value"
            />
          </el-select>
        </div>

        <div class="grid grid-cols-2 gap-6">
          <div>
            <div class="mb-2">Min Price</div>
            <el-input 
              v-model="filterForm.minPrice" 
              type="number" 
              placeholder="Enter min price"
            />
          </div>
          <div>
            <div class="mb-2">Max Price</div>
            <el-input 
              v-model="filterForm.maxPrice" 
              type="number" 
              placeholder="Enter max price"
            />
          </div>
        </div>

        <div class="flex gap-4 pt-4">
          <el-button class="flex-1" @click="resetFilter">Reset</el-button>
          <el-button type="primary" class="flex-1" @click="handleFilter">Apply Filters</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
