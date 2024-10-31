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
</script>

<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Reservations</h2>
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
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__header) {
  margin-bottom: 24px;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 24px;
}
</style>
