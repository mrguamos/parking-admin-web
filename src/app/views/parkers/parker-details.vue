<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useDriverStore } from '@/stores/driver';
import { ElMessageBox } from 'element-plus';

const router = useRouter();
const driverStore = useDriverStore();
const searchText = ref('');
const activeTab = ref('Reservations');
const currentPage = ref(1);
const pageSize = ref(10);

// Filter reservations based on search
const filteredReservations = computed(() => {
  let filtered = driverStore.selectedDriver?.reservations || [];
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    filtered = filtered.filter(reservation => 
      reservation.licensePlate.toLowerCase().includes(search) ||
      reservation.title.toLowerCase().includes(search)
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

function handleBack() {
  router.push('/parkers');
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleString();
}

const filterDialogVisible = ref(false);
const filterForm = ref({
  startDate: '',
  endDate: '',
  licensePlate: '',
  parkingLot: '',
  minPrice: '',
  maxPrice: ''
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

const licensePlateDialogVisible = ref(false);
const editingLicensePlate = ref<any>(null);

const licensePlateForm = ref({
  number: '',
  state: '',
  stateCode: ''
});

function showAddLicensePlate() {
  editingLicensePlate.value = null;
  licensePlateForm.value = {
    number: '',
    state: '',
    stateCode: ''
  };
  licensePlateDialogVisible.value = true;
}

function showEditLicensePlate(plate: any) {
  editingLicensePlate.value = plate;
  licensePlateForm.value = { ...plate };
  licensePlateDialogVisible.value = true;
}

async function handleLicensePlateSubmit() {
  if (!driverStore.selectedDriver) return;

  if (editingLicensePlate.value) {
    // Update logic
    const index = driverStore.selectedDriver.licensePlates.findIndex(
      p => p.id === editingLicensePlate.value.id
    );
    if (index !== -1) {
      const updatedPlates = [...driverStore.selectedDriver.licensePlates];
      updatedPlates[index] = {
        ...editingLicensePlate.value,
        ...licensePlateForm.value
      };
      driverStore.selectedDriver.licensePlates = updatedPlates;
    }
  } else {
    // Create logic
    const newPlate = {
      id: Date.now(),
      ...licensePlateForm.value
    };
    // Create a new array to trigger reactivity
    driverStore.selectedDriver.licensePlates = [
      ...driverStore.selectedDriver.licensePlates,
      newPlate
    ];
  }
  
  licensePlateDialogVisible.value = false;
  // Reset form
  licensePlateForm.value = {
    number: '',
    state: '',
    stateCode: ''
  };
}

async function handleDeleteLicensePlate(plate: any) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this license plate?',
      'Warning',
      {
        type: 'warning',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }
    );
    if (driverStore.selectedDriver) {
      driverStore.selectedDriver.licensePlates = driverStore.selectedDriver.licensePlates.filter(
        p => p.id !== plate.id
      );
    }
  } catch {
    // User cancelled deletion
  }
}

const rfidDialogVisible = ref(false);
const editingRfid = ref<any>(null);

const rfidForm = ref({
  number: ''
});

function showAddRfid() {
  editingRfid.value = null;
  rfidForm.value = {
    number: ''
  };
  rfidDialogVisible.value = true;
}

function showEditRfid(rfid: any) {
  editingRfid.value = rfid;
  rfidForm.value = { ...rfid };
  rfidDialogVisible.value = true;
}

async function handleRfidSubmit() {
  if (!driverStore.selectedDriver) return;

  if (editingRfid.value) {
    // Update logic
    const index = driverStore.selectedDriver.rfids.findIndex(
      r => r.id === editingRfid.value.id
    );
    if (index !== -1) {
      const updatedRfids = [...driverStore.selectedDriver.rfids];
      updatedRfids[index] = {
        ...editingRfid.value,
        ...rfidForm.value
      };
      driverStore.selectedDriver.rfids = updatedRfids;
    }
  } else {
    // Create logic
    const newRfid = {
      id: Date.now(),
      ...rfidForm.value
    };
    driverStore.selectedDriver.rfids = [
      ...driverStore.selectedDriver.rfids,
      newRfid
    ];
  }
  
  rfidDialogVisible.value = false;
  // Reset form
  rfidForm.value = {
    number: ''
  };
}

async function handleDeleteRfid(rfid: any) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this RFID?',
      'Warning',
      {
        type: 'warning',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel'
      }
    );
    if (driverStore.selectedDriver) {
      driverStore.selectedDriver.rfids = driverStore.selectedDriver.rfids.filter(
        r => r.id !== rfid.id
      );
    }
  } catch {
    // User cancelled deletion
  }
}
</script>

<template>
  <div class="p-6">
    <!-- Header with name and back button -->
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-xl font-semibold">{{ driverStore.selectedDriver?.name }}</h2>
      <el-button @click="handleBack">
        <span class="material-icons-outlined">arrow_back</span>
      </el-button>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <el-card>
        <div>
          <div class="mb-2">Total Paid</div>
          <div class="text-2xl">${{ driverStore.selectedDriver?.totalPaid.toFixed(2) }}</div>
        </div>
      </el-card>
      <el-card>
        <div>
          <div class="mb-2">Number of reservations</div>
          <div class="text-2xl">{{ driverStore.selectedDriver?.numberOfReservations }}</div>
        </div>
      </el-card>
      <el-card>
        <div>
          <div class="mb-2">Amount Overdue</div>
          <div class="text-2xl text-red-500">${{ driverStore.selectedDriver?.amountOverdue.toFixed(2) }}</div>
        </div>
      </el-card>
      <el-card>
        <div>
          <div class="mb-2">Number of Trucks</div>
          <div class="text-2xl">{{ driverStore.selectedDriver?.numberOfTrucks }}</div>
        </div>
      </el-card>
    </div>

    <!-- Tabs -->
    <div class="mb-6">
      <el-tabs v-model="activeTab">
        <el-tab-pane label="Reservations" name="Reservations">
          <div class="mb-4 flex gap-4">
            <el-input
              v-model="searchText"
              placeholder="Search reservations"
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

          <!-- Reservations List -->
          <el-card>
            <el-table :data="paginatedReservations">
              <el-table-column prop="licensePlate" label="License Plate" />
              <el-table-column prop="title" label="Parking Lot" />
              <el-table-column label="Start Time">
                <template #default="{ row }">
                  {{ formatDate(row.date) }}
                </template>
              </el-table-column>
              <el-table-column prop="duration" label="Duration" />
              <el-table-column label="Total">
                <template #default="{ row }">
                  ${{ row.total.toFixed(2) }}
                </template>
              </el-table-column>
              <el-table-column label="Status">
                <template #default="{ row }">
                  <el-tag 
                    :type="row.overdueFine ? 'danger' : 'success'"
                  >
                    {{ row.overdueFine ? 'Overdue' : 'Completed' }}
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
        </el-tab-pane>
        <el-tab-pane label="License Plates" name="LicensePlates">
          <div class="mb-4 flex justify-end">
            <el-button type="primary" @click="showAddLicensePlate">
              <span class="material-icons-outlined mr-2">add</span>
              Add License Plate
            </el-button>
          </div>

          <el-card>
            <el-table :data="driverStore.selectedDriver?.licensePlates">
              <el-table-column prop="number" label="License Plate" />
              <el-table-column prop="state" label="State" />
              <el-table-column prop="stateCode" label="State Code" />
              <el-table-column label="">
                <template #default="{ row }">
                  <div class="flex items-center justify-end gap-1">
                    <el-button 
                      type="primary" 
                      text
                      @click="showEditLicensePlate(row)"
                    >
                      <span class="material-icons-outlined">edit</span>
                    </el-button>
                    <el-button 
                      type="danger" 
                      text
                      @click="handleDeleteLicensePlate(row)"
                    >
                      <span class="material-icons-outlined">delete_outline</span>
                    </el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="RFIDs" name="RFIDs">
          <div class="mb-4 flex justify-end">
            <el-button type="primary" @click="showAddRfid">
              <span class="material-icons-outlined mr-2">add</span>
              Add RFID
            </el-button>
          </div>

          <el-card>
            <el-table :data="driverStore.selectedDriver?.rfids">
              <el-table-column prop="number" label="RFID" />
              <el-table-column label="">
                <template #default="{ row }">
                  <div class="flex items-center justify-end gap-1">
                    <el-button 
                      type="primary" 
                      text
                      @click="showEditRfid(row)"
                    >
                      <span class="material-icons-outlined">edit</span>
                    </el-button>
                    <el-button 
                      type="danger" 
                      text
                      @click="handleDeleteRfid(row)"
                    >
                      <span class="material-icons-outlined">delete_outline</span>
                    </el-button>
                  </div>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
      </el-tabs>
    </div>

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
              v-for="reservation in driverStore.selectedDriver?.reservations"
              :key="reservation.title"
              :label="reservation.title"
              :value="reservation.title"
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

    <!-- License Plate Dialog -->
    <el-dialog
      v-model="licensePlateDialogVisible"
      :title="editingLicensePlate ? 'Edit License Plate' : 'Add License Plate'"
      width="500px"
    >
      <div class="p-6">
        <el-form :model="licensePlateForm" label-position="top">
          <el-form-item label="License Plate Number" required>
            <el-input v-model="licensePlateForm.number" />
          </el-form-item>
          <el-form-item label="State" required>
            <el-input v-model="licensePlateForm.state" />
          </el-form-item>
          <el-form-item label="State Code" required>
            <el-input v-model="licensePlateForm.stateCode" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="licensePlateDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleLicensePlateSubmit">
          {{ editingLicensePlate ? 'Update' : 'Create' }}
        </el-button>
      </template>
    </el-dialog>

    <!-- RFID Dialog -->
    <el-dialog
      v-model="rfidDialogVisible"
      :title="editingRfid ? 'Edit RFID' : 'Add RFID'"
      width="500px"
    >
      <div class="p-6">
        <el-form :model="rfidForm" label-position="top">
          <el-form-item label="RFID" required>
            <el-input v-model="rfidForm.number" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="rfidDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleRfidSubmit">
          {{ editingRfid ? 'Update' : 'Create' }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
:deep(.el-tabs__nav-wrap::after) {
  display: none;
}
</style> 