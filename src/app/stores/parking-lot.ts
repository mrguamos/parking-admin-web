import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { IParkingLotForm } from '@/models/parking/parking-lot.interface'

export const useParkingLotStore = defineStore('parkingLot', () => {
  const currentParkingLot = ref<IParkingLotForm | null>(null)
  const isLoading = ref(false)

  return {
    currentParkingLot,
    isLoading
  }
}) 