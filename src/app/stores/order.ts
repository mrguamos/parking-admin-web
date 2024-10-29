import { defineStore } from 'pinia'
import { ref } from 'vue'
import { IMockOrder } from '@/models/order/order.interface'

export const useOrderStore = defineStore('order', () => {
  const mockOrders: IMockOrder[] = [
    {
      orderId: 1,
      orderNo: "ORD-001",
      parkId: 1,
      parkName: "Downtown Central Parking",
      plateNumbers: "ABC123",
      startTime: "2024-03-15T09:00:00",
      endTime: "2024-03-15T17:00:00",
      total: 40,
      status: 1,
      phoneNumber: "+1234567890"
    },
    {
      orderId: 2,
      orderNo: "ORD-002",
      parkId: 2,
      parkName: "Airport Terminal Parking",
      plateNumbers: "XYZ789",
      startTime: "2024-03-16T08:00:00",
      endTime: "2024-03-18T08:00:00",
      total: 120,
      status: 1,
      phoneNumber: "+1234567891"
    },
    // Add more mock orders...
  ];

  return {
    mockOrders
  }
}) 