<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">
        {{ route.params.id ? 'Edit' : 'Create' }} Parking Lot
      </h2>
      <el-button @click="router.push('/parking-lots')">
        <span class="material-icons-outlined">arrow_back</span>
      </el-button>
    </div>

    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-position="top"
      class="space-y-6"
    >
      <!-- Location -->
      <div>
        <h3 class="text-lg font-medium mb-4">LOCATION</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <el-form-item label="Parking Type">
            <el-select v-model="formData.parkingType" class="w-full" />
          </el-form-item>

          <el-form-item label="Name">
            <el-input v-model="formData.name" />
          </el-form-item>

          <el-form-item label="Address" class="md:col-span-2">
            <el-input 
              v-model="formData.address" 
              type="textarea"
              :rows="3"
              placeholder="Enter full address"
            />
          </el-form-item>

          <el-form-item label="City">
            <el-input v-model="formData.city" />
          </el-form-item>

          <el-form-item label="ZIP Code">
            <el-input v-model="formData.zipCode" />
          </el-form-item>

          <el-form-item label="State">
            <el-select v-model="formData.state" class="w-full">
              <el-option label="California" value="CA" />
            </el-select>
          </el-form-item>

          <el-form-item label="Dock Start">
            <el-input v-model="formData.dockStart" />
          </el-form-item>

          <el-form-item label="Dock End">
            <el-input v-model="formData.dockEnd" />
          </el-form-item>

          <el-form-item label="Operating Rate ($)">
            <el-input v-model="formData.operatingRate" />
          </el-form-item>

          <el-form-item label="Grace Period">
            <el-input v-model="formData.gracePeriod" />
          </el-form-item>

          <el-form-item label="Unit">
            <el-select v-model="formData.gracePeriodUnit" class="w-full">
              <el-option label="Minutes" value="Minutes" />
            </el-select>
          </el-form-item>
        </div>
      </div>

      <!-- Reserved Docks -->
      <div>
        <div class="flex justify-between items-center mb-4">
          <h3 class="text-lg font-medium">RESERVED DOCKS</h3>
          <el-button type="primary" @click="addDock">Add Docks</el-button>
        </div>
        <div class="space-y-4">
          <div v-for="(dock, index) in formData.reservedDocks" :key="index" 
               class="flex items-center gap-4">
            <el-form-item label="Dock Number" class="w-40">
              <el-input v-model="formData.reservedDocks[index]" placeholder="Enter dock number" />
            </el-form-item>
            <div class="flex items-center gap-2">
              <el-button type="primary" text>
                <span class="material-icons-outlined">edit</span>
              </el-button>
              <el-button type="danger" text @click="removeDock(index)">
                <span class="material-icons-outlined">delete</span>
              </el-button>
            </div>
          </div>
        </div>
      </div>

      <!-- Preferences -->
      <div>
        <h3 class="text-lg font-medium mb-4">PREFERENCES</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="flex items-center gap-4">
            <el-checkbox v-model="formData.rates.hourly">Hourly Rate</el-checkbox>
            <el-input 
              v-if="formData.rates.hourly" 
              v-model="formData.rates.hourlyRate" 
              placeholder="Enter rate"
              class="w-40"
            />
          </div>
          <div class="flex items-center gap-4">
            <el-checkbox v-model="formData.rates.daily">Daily Rate</el-checkbox>
            <el-input 
              v-if="formData.rates.daily" 
              v-model="formData.rates.dailyRate" 
              placeholder="Enter rate"
              class="w-40"
            />
          </div>
          <div class="flex items-center gap-4">
            <el-checkbox v-model="formData.rates.weekly">Weekly Rate</el-checkbox>
            <el-input 
              v-if="formData.rates.weekly" 
              v-model="formData.rates.weeklyRate" 
              placeholder="Enter rate"
              class="w-40"
            />
          </div>
          <div class="flex items-center gap-4">
            <el-checkbox v-model="formData.rates.monthly">Monthly Rate</el-checkbox>
            <el-input 
              v-if="formData.rates.monthly" 
              v-model="formData.rates.monthlyRate" 
              placeholder="Enter rate"
              class="w-40"
            />
          </div>
        </div>
      </div>

      <!-- Information -->
      <div>
        <h3 class="text-lg font-medium mb-4">INFORMATION</h3>
        <div class="w-full border border-dashed border-gray-300 rounded-lg p-6">
          <el-upload
            action="#"
            list-type="picture-card"
            :auto-upload="false"
            :limit="10"
            :on-change="handleUploadChange"
            :on-remove="handleRemove"
            :file-list="formData.images"
            :preview-src-list="[]"
            :show-file-list="true"
            class="w-full flex justify-center upload-component"
          >
            <template #default>
              <div class="text-center">
                <span class="material-icons-outlined text-2xl">add_photo_alternate</span>
                <div class="mt-2">Tap to add images ({{ uploadCount }}/10)</div>
                <div class="text-sm text-gray-400">Tap to browse and add files</div>
              </div>
            </template>
          </el-upload>
        </div>
      </div>

      <!-- Description Fields -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="md:col-span-2">
          <h3 class="text-lg font-medium mb-4">PROPERTY OVERVIEW</h3>
          <el-input
            v-model="formData.propertyOverview"
            type="textarea"
            :rows="4"
            placeholder="Enter property overview..."
          />
        </div>

        <div class="md:col-span-2">
          <h3 class="text-lg font-medium mb-4">BUILDING HIGHLIGHTS</h3>
          <el-input
            v-model="formData.buildingHighlights"
            type="textarea"
            :rows="4"
            placeholder="Enter building highlights..."
          />
        </div>

        <div class="md:col-span-2">
          <h3 class="text-lg font-medium mb-4">AMENITIES</h3>
          <el-input
            v-model="formData.amenities"
            type="textarea"
            :rows="4"
            placeholder="Enter amenities..."
          />
        </div>

        <div class="md:col-span-2">
          <h3 class="text-lg font-medium mb-4">TERMS OF SERVICE</h3>
          <el-input
            v-model="formData.termsOfService"
            type="textarea"
            :rows="4"
            placeholder="Enter terms of service..."
          />
        </div>
      </div>

      <!-- Form Actions -->
      <div class="flex justify-end gap-4">
        <el-button type="primary" @click="handleSubmit" :loading="loading">
          {{ route.params.id ? 'Update' : 'Create' }} Parking Lot
        </el-button>
      </div>
    </el-form>
  </div>
</template>

<style lang="scss" scoped>
:deep(.upload-component) {
  .el-upload-list__item-actions {
    display: flex;
    align-items: center;
    justify-content: center;

    .el-upload-list__item-preview {
      display: none !important;
    }

    .el-upload-list__item-delete {
      position: static !important;
      margin: 0 !important;
      height: 100%;
      width: 100%;
      display: flex !important;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { FormInstance, FormRules, UploadFile, UploadFiles } from 'element-plus';

const route = useRoute();
const router = useRouter();
const formRef = ref<FormInstance>();
const loading = ref(false);

const formData = ref({
  // Location
  parkingType: '',
  name: '',
  address: '',
  city: '',
  zipCode: '',
  state: 'CA',
  dockStart: '',
  dockEnd: '',
  operatingRate: '',
  gracePeriod: '2',
  gracePeriodUnit: 'Minutes',

  // Reserved Docks
  reservedDocks: [''],

  // Preferences
  rates: {
    hourly: true,
    daily: false,
    weekly: false,
    monthly: false,
    hourlyRate: '',
    dailyRate: '',
    weeklyRate: '',
    monthlyRate: ''
  },

  // Information
  images: [] as UploadFile[],

  // Description
  propertyOverview: '',
  buildingHighlights: '',
  amenities: '',
  termsOfService: ''
});

const uploadCount = computed(() => formData.value.images.length);

function handleUploadChange(uploadFile: UploadFile, uploadFiles: UploadFiles) {
  formData.value.images = uploadFiles;
}

function handleRemove(uploadFile: UploadFile) {
  formData.value.images = formData.value.images.filter(file => file.uid !== uploadFile.uid);
}

const rules: FormRules = {
  name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
  address: [{ required: true, message: 'Address is required', trigger: 'blur' }],
  city: [{ required: true, message: 'City is required', trigger: 'blur' }],
  zipCode: [{ required: true, message: 'ZIP code is required', trigger: 'blur' }]
};

function addDock() {
  formData.value.reservedDocks.push('');
}

function removeDock(index: number) {
  formData.value.reservedDocks.splice(index, 1);
}

async function handleSubmit() {
  if (!formRef.value) return;
  await formRef.value.validate((valid) => {
    if (valid) {
      // Handle form submission
    }
  });
}
</script> 