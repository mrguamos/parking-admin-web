<template>
  <div class="parking-lots-edit p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Edit Parking Lot</h2>
      <el-button @click="router.back()">
        <span class="material-icons-outlined">arrow_back</span>
        Back
      </el-button>
    </div>

    <el-form
      v-if="parkingLot"
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

      <el-form-item label="Capacity" prop="capacity">
        <el-input-number v-model="formData.capacity" :min="1" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit" :loading="isSubmitting">
          Update Parking Lot
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import type { FormInstance } from 'element-plus'
import { useParkingLotStore } from '@stores/parking-lot'

const router = useRouter()
const route = useRoute()
const parkingLotStore = useParkingLotStore()
const formRef = ref<FormInstance>()
const isSubmitting = ref(false)
const parkingLot = ref(null)

interface IParkingLotForm {
  name: string
  address: string
  capacity: number
}

const formData = ref<IParkingLotForm>({
  name: '',
  address: '',
  capacity: 1
})

const rules = {
  name: [{ required: true, message: 'Name is required', trigger: 'blur' }],
  address: [{ required: true, message: 'Address is required', trigger: 'blur' }],
  capacity: [{ required: true, message: 'Capacity is required', trigger: 'blur' }]
}

onMounted(async () => {
  const id = route.params.id as string
  parkingLot.value = await parkingLotStore.getParkingLot(id)
  if (parkingLot.value) {
    formData.value = { ...parkingLot.value }
  }
})

async function handleSubmit() {
  if (!formRef.value) return

  await formRef.value.validate(async (valid) => {
    if (valid) {
      isSubmitting.value = true
      try {
        const id = route.params.id as string
        await parkingLotStore.updateParkingLot(id, formData.value)
        router.push({ name: 'parking-lots-list' })
      } finally {
        isSubmitting.value = false
      }
    }
  })
}
</script> 