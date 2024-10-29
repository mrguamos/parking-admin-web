import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IUpdateDriverDto } from '@/models/driver/driver.interface'

export const useDriverStore = defineStore('driver', () => {
  const mockDrivers = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phoneNumber: "+1234567890",
      licensePlates: ["ABC123", "DEF456"]
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phoneNumber: "+1234567891",
      licensePlates: ["XYZ789"]
    },
    {
      id: 3,
      firstName: "Robert",
      lastName: "Johnson",
      email: "robert.j@example.com",
      phoneNumber: "+1234567892",
      licensePlates: ["GHI789"]
    },
    {
      id: 4,
      firstName: "Sarah",
      lastName: "Williams",
      email: "sarah.w@example.com",
      phoneNumber: "+1234567893",
      licensePlates: ["JKL012"]
    },
    {
      id: 5,
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.b@example.com",
      phoneNumber: "+1234567894",
      licensePlates: ["MNO345"]
    }
    // Add more mock drivers...
  ];

  const currentDriver = ref<IUpdateDriverDto | null>(null);
  const isLoading = ref(false);

  function setCurrentDriver(driver: IUpdateDriverDto | null) {
    currentDriver.value = driver;
  }

  function updateDriver(driver: IUpdateDriverDto) {
    const index = mockDrivers.findIndex(d => d.id === driver.id);
    if (index !== -1) {
      mockDrivers[index] = { ...mockDrivers[index], ...driver };
    }
  }

  return {
    mockDrivers,
    currentDriver,
    isLoading,
    setCurrentDriver,
    updateDriver
  }
}) 