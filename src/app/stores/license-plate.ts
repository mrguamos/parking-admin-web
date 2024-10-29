import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ILicensePlateDto } from '@/models/driver/driver.interface'

export const useLicensePlateStore = defineStore('licensePlate', () => {
  const mockLicensePlates = [
    {
      licensePlateId: 1,
      number: "ABC123",
      state: "California",
      stateCode: "CA",
      createBy: 1
    },
    {
      licensePlateId: 2,
      number: "XYZ789",
      state: "New York",
      stateCode: "NY",
      createBy: 1
    },
    {
      licensePlateId: 3,
      number: "DEF456",
      state: "Texas",
      stateCode: "TX",
      createBy: 1
    },
    {
      licensePlateId: 4,
      number: "GHI789",
      state: "Florida",
      stateCode: "FL",
      createBy: 2
    },
    {
      licensePlateId: 5,
      number: "JKL012",
      state: "Washington",
      stateCode: "WA",
      createBy: 2
    },
    {
      licensePlateId: 6,
      number: "MNO345",
      state: "Oregon",
      stateCode: "OR",
      createBy: 3
    },
    {
      licensePlateId: 7,
      number: "PQR678",
      state: "Nevada",
      stateCode: "NV",
      createBy: 3
    },
    {
      licensePlateId: 8,
      number: "STU901",
      state: "Arizona",
      stateCode: "AZ",
      createBy: 4
    },
    {
      licensePlateId: 9,
      number: "VWX234",
      state: "Colorado",
      stateCode: "CO",
      createBy: 4
    },
    {
      licensePlateId: 10,
      number: "YZA567",
      state: "Utah",
      stateCode: "UT",
      createBy: 5
    }
  ];

  const currentLicensePlate = ref<ILicensePlateDto | null>(null);
  const isLoading = ref(false);

  function setCurrentLicensePlate(plate: ILicensePlateDto | null) {
    currentLicensePlate.value = plate;
  }

  function updateLicensePlate(plate: ILicensePlateDto) {
    const index = mockLicensePlates.findIndex(p => p.licensePlateId === plate.licensePlateId);
    if (index !== -1) {
      mockLicensePlates[index] = { ...mockLicensePlates[index], ...plate };
    }
  }

  function addLicensePlate(plate: ILicensePlateDto) {
    mockLicensePlates.push({
      ...plate,
      licensePlateId: mockLicensePlates.length + 1
    });
  }

  function deleteLicensePlate(id: number) {
    const index = mockLicensePlates.findIndex(p => p.licensePlateId === id);
    if (index !== -1) {
      mockLicensePlates.splice(index, 1);
    }
  }

  return {
    mockLicensePlates,
    currentLicensePlate,
    isLoading,
    setCurrentLicensePlate,
    updateLicensePlate,
    addLicensePlate,
    deleteLicensePlate
  }
}) 