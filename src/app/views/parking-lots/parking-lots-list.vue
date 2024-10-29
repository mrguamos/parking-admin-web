<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useParkingLotStore } from '@stores/parking-lot'
import { ElMessageBox } from 'element-plus'
import parkingLotImage from '@assets/img/parking-lot.jpg'

const router = useRouter()
const parkingLotStore = useParkingLotStore()

const parkingLotImageUrl = parkingLotImage

onMounted(async () => {
  await parkingLotStore.fetchParkingLots()
})

const handleEdit = (row: { id: number }) => {
  router.push({ name: 'ParkingLotsForm', params: { id: row.id }})
}

const handleDelete = async (row: { id: number }) => {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this parking lot?',
      'Warning',
      {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
      }
    )
    await parkingLotStore.deleteParkingLot(row.id)
  } catch {
    // User cancelled the deletion
  }
}
</script>

<template>
  <div class="parking-lots-list p-6">
    <div class="mb-6 flex items-center justify-between">
      <h2 class="text-xl font-semibold">Parking Lots</h2>
      <el-button type="primary" @click="router.push({ name: 'ParkingLotsForm' })">
        <span class="material-icons-outlined">add</span>
        Add Parking Lot
      </el-button>
    </div>

    <div class="grid grid-cols-1 gap-4">
      <el-card 
        v-for="lot in parkingLotStore.parkingLots" 
        :key="lot.id"
        class="bg-primary"
      >
        <div class="flex flex-col gap-4">
          <div class="flex gap-4">
            <div class="w-96 h-48 rounded-lg overflow-hidden">
              <img 
                :src="parkingLotImageUrl" 
                alt="Parking Lot" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="flex flex-col justify-between flex-grow">
              <div>
                <h3 class="text-xl font-medium mb-2">{{ lot.name }}</h3>
                <p class="text-sm">{{ lot.address }}</p>
                <p class="text-sm">{{ lot.city }}, {{ lot.state }} {{ lot.zipCode }}</p>
              </div>
              <div class="flex items-center gap-2">
                <el-tag type="success" class="text-xs">
                  {{ lot.available }}/{{ lot.spots }} Available
                </el-tag>
                <el-tag 
                  v-for="(enabled, rate) in lot.rates" 
                  :key="rate"
                  :type="enabled ? undefined : 'info'"
                  class="capitalize"
                >
                  {{ rate }}
                </el-tag>
              </div>
            </div>
            <div class="flex gap-2">
              <el-button type="primary" @click="handleEdit(lot)">
                <template #icon>
                  <span class="material-icons-outlined">edit</span>
                </template>
              </el-button>
              <el-button type="danger" @click="handleDelete(lot)">
                <template #icon>
                  <span class="material-icons-outlined">delete</span>
                </template>
              </el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>
