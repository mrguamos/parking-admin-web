import { defineStore } from 'pinia'
import { ref } from 'vue'

interface IDriverDetail {
  id: number;
  name: string;
  totalPaid: number;
  numberOfReservations: number;
  amountOverdue: number;
  numberOfTrucks: number;
  reservations: {
    licensePlate: string;
    title: string;
    duration: string;
    date: string;
    total: number;
    overdueFine?: number;
  }[];
}

export const useDriverStore = defineStore('driver', () => {
  const selectedDriver = ref<IDriverDetail | null>(null);

  function setSelectedDriver(driver: IDriverDetail) {
    selectedDriver.value = driver;
  }

  return {
    selectedDriver,
    setSelectedDriver
  };
}) 