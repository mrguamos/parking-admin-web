<template>
  <div class="parking-lots-form p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">{{ isEdit ? 'Edit' : 'Create' }} Parking Lot</h2>
      <el-button @click="router.back()">
        <span class="material-icons-outlined">arrow_back</span>
        Back
      </el-button>
    </div>

    <el-form
      ref="formRef"
      :model="formData"
      :rules="rules"
      label-position="top"
      @submit.prevent="handleSubmit"
    >
      <el-form-item label="Name" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>

      <el-form-item label="Address" prop="address">
        <el-input v-model="formData.address" type="textarea" />
      </el-form-item>

      <el-form-item label="City" prop="city">
        <el-input v-model="formData.city" />
      </el-form-item>

      <el-form-item label="State" prop="state">
        <el-input v-model="formData.state" />
      </el-form-item>

      <el-form-item label="Zip Code" prop="zipCode">
        <el-input v-model="formData.zipCode" />
      </el-form-item>

      <el-form-item label="Total Spots" prop="spots">
        <el-input-number v-model="formData.spots" :min="1" />
      </el-form-item>

      <el-form-item label="Available Rates">
        <el-checkbox-group v-model="selectedRates">
          <el-checkbox value="hourly">Hourly</el-checkbox>
          <el-checkbox value="daily">Daily</el-checkbox>
          <el-checkbox value="weekly">Weekly</el-checkbox>
          <el-checkbox value="monthly">Monthly</el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="isSubmitting">
          {{ isEdit ? 'Update' : 'Create' }} Parking Lot
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance } from 'element-plus'
import { useParkingLotStore } from '@stores/parking-lot'

interface IParkingLotForm {
  name: string
  address: string
  city: string
  zipCode: string
  state: string
  spots: number
  rates: {
    hourly: boolean
    daily: boolean
    weekly: boolean
    monthly: boolean
  }
}

const router = useRouter()
const route = useRoute()
const formRef = ref<FormInstance>()
const isSubmitting = ref(false)
const selectedRates = ref<string[]>([])

const isEdit = computed(() => !!route.params.id)

const formData = ref<IParkingLotForm>({
  name: '',
  address: '',
  city: '',
  zipCode: '',
  state: '',
  spots: 1,
  rates: {
    hourly: false,
    daily: false,
    weekly: false,
    monthly: false
  }
})

const rules = {
  name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
  address: [{ required: true, message: 'Address is required', trigger: 'blur' }],
  city: [{ required: true, message: 'City is required', trigger: 'blur' }],
  state: [{ required: true, message: 'State is required', trigger: 'blur' }],
  zipCode: [{ required: true, message: 'Zip code is required', trigger: 'blur' }],
  spots: [{ required: true, message: 'Number of spots is required', trigger: 'blur' }]
}

const parkingLotStore = useParkingLotStore()

onMounted(async () => {
  if (isEdit.value) {
    const id = route.params.id as string
    const parkingLot = await parkingLotStore.getParkingLot(id)
    if (parkingLot) {
      formData.value = {
        name: parkingLot.name,
        address: parkingLot.address,
        city: parkingLot.city,
        state: parkingLot.state,
        zipCode: parkingLot.zipCode,
        spots: parkingLot.spots,
        rates: parkingLot.rates
      }
      selectedRates.value = Object.entries(parkingLot.rates)
        .filter(([_, value]) => value)
        .map(([key]) => key)
    }
  }
})

async function handleSubmit() {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      isSubmitting.value = true
      try {
        formData.value.rates = {
          hourly: selectedRates.value.includes('hourly'),
          daily: selectedRates.value.includes('daily'),
          weekly: selectedRates.value.includes('weekly'),
          monthly: selectedRates.value.includes('monthly')
        }

        let success: boolean
        if (isEdit.value) {
          const id = route.params.id as string
          success = await parkingLotStore.updateParkingLot(id, formData.value)
        } else {
          success = await parkingLotStore.createParkingLot(formData.value)
        }

        if (success) {
          router.push({ name: 'ParkingLots' })
        }
      } finally {
        isSubmitting.value = false
      }
    }
  })
}
</script> 