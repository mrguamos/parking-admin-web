<template>
  <div class="p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">
        {{ route.params.id ? 'Edit' : 'Add' }} Parking Lot
      </h2>
      <el-button @click="router.push('/parking-lots')">
        <span class="material-icons-outlined mr-2">arrow_back</span>
        Back
      </el-button>
    </div>

    <el-card v-loading="loading">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-position="top"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Name" prop="parkName">
              <el-input v-model="formData.parkName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Number" prop="parkNumber">
              <el-input v-model="formData.parkNumber" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item label="Address" prop="address">
          <el-input v-model="formData.address" type="textarea" />
        </el-form-item>

        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="Country" prop="country">
              <el-input v-model="formData.country" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="State" prop="state">
              <el-input v-model="formData.state" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="City" prop="city">
              <el-input v-model="formData.city" />
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="Zip Code" prop="zipCode">
              <el-input v-model="formData.zipCode" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="Total Spaces" prop="totalSpaces">
              <el-input-number v-model="formData.totalSpaces" :min="0" class="w-full" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Service Fee" prop="serviceFee">
              <el-input-number v-model="formData.serviceFee" :min="0" :precision="2" class="w-full" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Tax" prop="tax">
              <el-input-number v-model="formData.tax" :min="0" :precision="2" class="w-full" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-divider>Pricing</el-divider>

        <div v-for="(price, index) in formData.priceList" :key="index" class="mb-4">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item :label="`Price Type ${index + 1}`" :prop="`priceList.${index}.priceType`">
                <el-select v-model="price.priceType" class="w-full">
                  <el-option 
                    v-for="type in priceTypes" 
                    :key="type.value" 
                    :label="type.label" 
                    :value="type.value" 
                  />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item :label="`Price ${index + 1}`" :prop="`priceList.${index}.price`">
                <el-input-number v-model="price.price" :min="0" :precision="2" class="w-full" />
              </el-form-item>
            </el-col>
          </el-row>
        </div>

        <el-button 
          type="primary" 
          text 
          @click="formData.priceList.push({ priceType: 0, price: 0 })"
        >
          <span class="material-icons-outlined mr-1">add</span>
          Add Price
        </el-button>

        <el-divider>Business Hours</el-divider>

        <div v-for="(hours, index) in formData.businessHoursList" :key="index" class="mb-4">
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item :label="`Day ${index + 1}`">
                <el-switch v-model="hours.open" />
              </el-form-item>
            </el-col>
            <template v-if="hours.open">
              <el-col :span="9">
                <el-form-item label="Open Time">
                  <el-time-select
                    v-model="hours.times[0].beginTime"
                    start="00:00"
                    step="00:30"
                    end="23:30"
                    placeholder="Select time"
                  />
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item label="Close Time">
                  <el-time-select
                    v-model="hours.times[0].endTime"
                    start="00:00"
                    step="00:30"
                    end="23:30"
                    placeholder="Select time"
                  />
                </el-form-item>
              </el-col>
            </template>
          </el-row>
        </div>

        <el-divider>Additional Settings</el-divider>

        <el-row :gutter="20">
          <el-col :span="8">
            <el-form-item label="Status">
              <el-switch
                v-model="formData.status"
                :active-value="1"
                :inactive-value="0"
              />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Allow Refunds">
              <el-switch v-model="formData.refundAllow" />
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="Price Per Fine">
              <el-switch v-model="formData.pricePerFine" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit" :loading="loading">
            {{ route.params.id ? 'Update' : 'Create' }} Parking Lot
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { parkingBasicInfoApi } from '@/apis/parkingBasicInfoApi';
import { IParkingBasicInformation } from '@/models/parking/parking-basic-info.interface';
import type { FormInstance } from 'element-plus';
import { useParkingLotStore } from '@/stores/parking-lot';

const route = useRoute();
const router = useRouter();
const formRef = ref<FormInstance>();
const loading = ref(false);
const parkingLotStore = useParkingLotStore();

const formData = ref<IParkingBasicInformation>({
  parkName: '',
  parkNumber: '',
  address: '',
  totalSpaces: 0,
  status: 1,
  priceList: [{
    priceType: 0,
    price: 0
  }],
  businessHoursList: Array(7).fill([]).map((_, i) => ({
    open: true,
    weekType: i,
    times: [{
      beginTime: '09:00',
      endTime: '18:00'
    }]
  })),
  clientId: 0,
  merchantId: 0,
  pricePerFine: false,
  serviceFee: 0,
  tax: 0,
  country: '',
  state: '',
  city: '',
  zipCode: '',
  distance: 0,
  refundAllow: false,
  cancelFee: 0
});

const rules = {
  parkName: [{ required: true, message: 'Name is required', trigger: 'blur' }],
  parkNumber: [{ required: true, message: 'Number is required', trigger: 'blur' }],
  address: [{ required: true, message: 'Address is required', trigger: 'blur' }],
  totalSpaces: [{ required: true, message: 'Total spaces is required', trigger: 'blur' }],
  country: [{ required: true, message: 'Country is required', trigger: 'blur' }],
  state: [{ required: true, message: 'State is required', trigger: 'blur' }],
  city: [{ required: true, message: 'City is required', trigger: 'blur' }],
  zipCode: [{ required: true, message: 'Zip code is required', trigger: 'blur' }],
  'priceList.0.price': [{ required: true, message: 'Price is required', trigger: 'blur' }]
};

const priceTypes = [
  { label: 'Hourly', value: 0 },
  { label: 'Daily', value: 1 },
  { label: 'Weekly', value: 2 },
  { label: 'Monthly', value: 3 },
  { label: 'Yearly', value: 4 }
];

async function loadParkingLot(id: number) {
  loading.value = true;
  try {
    const storedLot = parkingLotStore.currentParkingLot;
    if (storedLot && storedLot.parkId === id) {
      formData.value = storedLot;
    } else {
      const response = await parkingBasicInfoApi.getDetailParkingInfo(id);
      formData.value = response.data;
    }
  } finally {
    loading.value = false;
  }
}

async function handleSubmit() {
  if (!formRef.value) return;

  await formRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        const parkId = route.params.id;
        if (parkId) {
          await parkingBasicInfoApi.update(formData.value);
        } else {
          await parkingBasicInfoApi.add(formData.value);
        }
        router.push('/parking-lots');
      } finally {
        loading.value = false;
      }
    }
  });
}

onMounted(() => {
  const parkId = route.params.id;
  if (parkId) {
    loadParkingLot(Number(parkId));
  }
});
</script> 