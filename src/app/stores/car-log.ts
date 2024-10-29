import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ICarLog } from '@/models/car-log/car-log.interface'

export const useCarLogStore = defineStore('carLog', () => {
  const mockCarLogs = [
    {
      carLogId: 1,
      plateNumber: "ABC123",
      inGate: "Gate A",
      inType: 1,
      inTime: "2024-03-15T09:00:00",
      outGate: "Gate B",
      outType: 1,
      outTime: "2024-03-15T17:00:00",
      inPlateImage: "url/to/image1.jpg",
      outPlateImage: "url/to/image2.jpg",
      parkId: 1,
      parkName: "Downtown Central Parking"
    },
    // Add more mock car logs...
  ];

  return {
    mockCarLogs
  }
}) 