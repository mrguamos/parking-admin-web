import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IParkingLot {
  id: number
  name: string
  address: string
  city: string
  zipCode: string
  state: string
  spots: number
  available: number
  status: string
  rates: {
    hourly: boolean
    daily: boolean
    weekly: boolean
    monthly: boolean
  }
}

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

export const useParkingLotStore = defineStore('parkingLot', () => {
  const parkingLots = ref<IParkingLot[]>([])
  const isLoading = ref(false)

  async function fetchParkingLots() {
    isLoading.value = true
    try {
      // TODO: Replace with actual API call
      parkingLots.value = [
        {
          id: 1,
          name: 'Buena Park Back Side',
          address: '6800 Valley View Street',
          city: 'Buena Park',
          state: 'CA',
          zipCode: '90000',
          spots: 100,
          available: 21,
          status: 'Active',
          rates: {
            hourly: true,
            daily: true,
            weekly: false,
            monthly: true
          }
        }
      ]
    } finally {
      isLoading.value = false
    }
  }

  async function getParkingLot(id: string | number): Promise<IParkingLot | null> {
    try {
      // TODO: Replace with actual API call
      return parkingLots.value.find(lot => lot.id === Number(id)) || null
    } catch (error) {
      console.error('Error fetching parking lot:', error)
      return null
    }
  }

  async function createParkingLot(parkingLot: IParkingLotForm): Promise<boolean> {
    try {
      // TODO: Replace with actual API call
      const newParkingLot: IParkingLot = {
        id: parkingLots.value.length + 1,
        ...parkingLot,
        available: parkingLot.spots,
        status: 'Active'
      }
      parkingLots.value.push(newParkingLot)
      return true
    } catch (error) {
      console.error('Error creating parking lot:', error)
      return false
    }
  }

  async function updateParkingLot(id: string | number, parkingLot: IParkingLotForm): Promise<boolean> {
    try {
      // TODO: Replace with actual API call
      const index = parkingLots.value.findIndex(lot => lot.id === Number(id))
      if (index !== -1) {
        parkingLots.value[index] = {
          ...parkingLots.value[index],
          ...parkingLot
        }
        return true
      }
      return false
    } catch (error) {
      console.error('Error updating parking lot:', error)
      return false
    }
  }

  async function deleteParkingLot(id: string | number): Promise<boolean> {
    try {
      // TODO: Replace with actual API call
      const index = parkingLots.value.findIndex(lot => lot.id === Number(id))
      if (index !== -1) {
        parkingLots.value.splice(index, 1)
        return true
      }
      return false
    } catch (error) {
      console.error('Error deleting parking lot:', error)
      return false
    }
  }

  return {
    parkingLots,
    isLoading,
    fetchParkingLots,
    getParkingLot,
    createParkingLot,
    updateParkingLot,
    deleteParkingLot
  }
}) 