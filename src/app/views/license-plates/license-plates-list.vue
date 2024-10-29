<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useLicensePlateStore } from '@/stores/license-plate';
import { ILicensePlateDto } from '@/models/driver/driver.interface';
import { ElMessageBox } from 'element-plus';

const licensePlateStore = useLicensePlateStore();
const loading = ref(false);
const dialogVisible = ref(false);
const editingPlate = ref<ILicensePlateDto | null>(null);
const licensePlates = ref<ILicensePlateDto[]>([]);

const formData = ref<ILicensePlateDto>({
  licensePlateId: 0,
  number: '',
  state: '',
  stateCode: '',
  createBy: 0
});

async function fetchLicensePlates() {
  loading.value = true;
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Use mock data
    licensePlates.value = licensePlateStore.mockLicensePlates;
  } finally {
    loading.value = false;
  }
}

function showAddDialog() {
  editingPlate.value = null;
  formData.value = {
    licensePlateId: 0,
    number: '',
    state: '',
    stateCode: '',
    createBy: 0
  };
  dialogVisible.value = true;
}

function showEditDialog(plate: ILicensePlateDto) {
  editingPlate.value = plate;
  formData.value = { ...plate };
  dialogVisible.value = true;
}

async function handleSubmit() {
  try {
    if (editingPlate.value) {
      licensePlateStore.updateLicensePlate(formData.value);
    } else {
      licensePlateStore.addLicensePlate(formData.value);
    }
    dialogVisible.value = false;
    await fetchLicensePlates();
  } catch (error) {
    console.error('Error saving license plate:', error);
  }
}

async function handleDelete(plate: ILicensePlateDto) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this license plate?',
      'Warning',
      {
        type: 'warning'
      }
    );
    licensePlateStore.deleteLicensePlate(plate.licensePlateId);
    await fetchLicensePlates();
  } catch {
    // User cancelled deletion
  }
}

onMounted(() => {
  fetchLicensePlates();
});
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">License Plates</h2>
      <el-button type="primary" @click="showAddDialog">
        <span class="material-icons-outlined mr-2">add</span>
        Add License Plate
      </el-button>
    </div>

    <el-card>
      <el-table 
        v-loading="loading"
        :data="licensePlates"
      >
        <el-table-column prop="number" label="License Plate" />
        <el-table-column prop="state" label="State" />
        <el-table-column prop="stateCode" label="State Code" />
        <el-table-column label="Actions" width="200">
          <template #default="{ row }">
            <el-button 
              type="primary" 
              text
              @click="showEditDialog(row)"
            >
              <span class="material-icons-outlined">edit</span>
            </el-button>
            <el-button 
              type="danger" 
              text
              @click="handleDelete(row)"
            >
              <span class="material-icons-outlined">delete</span>
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog
      v-model="dialogVisible"
      :title="editingPlate ? 'Edit License Plate' : 'Add License Plate'"
      width="500px"
    >
      <div class="p-6">
        <el-form :model="formData" label-position="top">
          <el-form-item label="License Plate Number" required>
            <el-input v-model="formData.number" />
          </el-form-item>
          <el-form-item label="State" required>
            <el-input v-model="formData.state" />
          </el-form-item>
          <el-form-item label="State Code" required>
            <el-input v-model="formData.stateCode" />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ editingPlate ? 'Update' : 'Create' }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template> 