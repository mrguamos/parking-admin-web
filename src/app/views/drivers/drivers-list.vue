<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDriverStore } from '@/stores/driver';

interface IDriver {
  name: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  accountOverdue: number;
  lastActivity: string;
}

const mockDrivers: IDriver[] = Array(20).fill(null).map((_, index) => ({
  name: index % 2 === 0 
    ? `John Doe ${index + 1}` 
    : `Jane Smith ${index + 1}`,
  email: index % 2 === 0 
    ? `john${index + 1}@gmail.com` 
    : `jane${index + 1}@gmail.com`,
  phone: `714-366-${String(5585 + index).padStart(4, '0')}`,
  status: index % 5 === 0 ? 'Inactive' : 'Active',
  accountOverdue: index % 3 === 0 ? (index + 1) * 15.50 : 0,
  lastActivity: new Date(2024, 0, 15 - index)
    .toISOString()
    .split('T')[0]
}));

const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');

const filteredDrivers = computed(() => {
  let filtered = mockDrivers;
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    filtered = mockDrivers.filter(driver => 
      driver.name.toLowerCase().includes(search) ||
      driver.email.toLowerCase().includes(search) ||
      driver.phone.toLowerCase().includes(search)
    );
  }
  return filtered;
});

const paginatedDrivers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredDrivers.value.slice(start, end);
});

function handlePageChange(page: number) {
  currentPage.value = page;
}

const router = useRouter();
const driverStore = useDriverStore();

function handleRowClick(row: any) {
  // Create detailed driver object
  const driverDetail = {
    id: row.id,
    name: row.name,
    totalPaid: 1500.66,
    numberOfReservations: 12,
    amountOverdue: 198.00,
    numberOfTrucks: 12,
    reservations: [
      {
        licensePlate: 'JKK12523423',
        title: 'Cbwork Walnut',
        duration: '2 Hours',
        date: '5/14/2024 10:10 AM',
        total: 20,
        overdueFine: 55.56
      }
    ],
    licensePlates: [
      {
        id: 1,
        number: 'JKK12523423',
        state: 'California',
        stateCode: 'CA'
      },
      {
        id: 2,
        number: 'ABC12345',
        state: 'New York',
        stateCode: 'NY'
      },
      {
        id: 3,
        number: 'XYZ98765',
        state: 'Texas',
        stateCode: 'TX'
      },
      {
        id: 4,
        number: 'DEF45678',
        state: 'Florida',
        stateCode: 'FL'
      },
      {
        id: 5,
        number: 'GHI78901',
        state: 'Washington',
        stateCode: 'WA'
      }
    ]
  };
  
  driverStore.setSelectedDriver(driverDetail);
  router.push(`/drivers/${row.id}`);
}
</script>

<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">Driver Profiles</h2>
      <el-input
        v-model="searchText"
        placeholder="Search drivers..."
        class="w-full"
        clearable
      >
        <template #prefix>
          <span class="material-icons-outlined">search</span>
        </template>
      </el-input>
    </div>

    <el-card v-loading="loading">
      <el-table 
        :data="paginatedDrivers"
        @row-click="handleRowClick"
        class="cursor-pointer"
      >
        <el-table-column prop="name" label="Name" />
        <el-table-column prop="email" label="Email" />
        <el-table-column prop="phone" label="Phone" />
        <el-table-column prop="status" label="Status">
          <template #default="{ row }">
            <el-tag type="success" v-if="row.status === 'Active'">
              {{ row.status }}
            </el-tag>
            <el-tag type="danger" v-else>
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="Account Overdue">
          <template #default="{ row }">
            <span :class="row.accountOverdue > 0 ? 'text-red-500' : ''">
              ${{ row.accountOverdue.toFixed(2) }}
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="lastActivity" label="Last Activity" />
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="filteredDrivers.length"
          @current-change="handlePageChange"
        />
      </div>
    </el-card>
  </div>
</template> 