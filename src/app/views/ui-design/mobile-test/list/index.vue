<script setup lang="ts">
import { ref } from 'vue'
import { ElButton } from 'element-plus'

interface VisitEntry {
  id: string
  facility: string
  checkInTime: string
  checkOutTime?: string
  appointmentTime?: string
}

const currentVisit = ref<VisitEntry>({
  id: 'ET-19635',
  facility: 'UNIS Valley View, CA',
  checkInTime: '10:43 AM 09/10/2024'
})

const upcomingVisits = ref<VisitEntry[]>([
  {
    id: 'PE-19161',
    facility: 'UNIS Valley View, CA',
    appointmentTime: '11:00 AM 09/15/2024'
  }
])

const historyVisits = ref<VisitEntry[]>([
  {
    id: 'ET-19144',
    facility: 'UNIS Valley View, CA',
    checkInTime: '11:43 AM 09/08/2024',
    checkOutTime: '2:58 PM 09/08/2024'
  },
  {
    id: 'ET-1222',
    facility: 'UNIS Fontana, CA',
    checkInTime: '10:00 AM 09/01/2024',
    checkOutTime: '4:53 PM 09/01/2024'
  }
])

function handleProfileSetting() {
  console.log('Navigate to profile settings')
}

function handleViewDetails(id: string) {
  console.log('View details for:', id)
}
</script>

<template>
  <div class="w-[360px] h-[800px] bg-secondary flex flex-col">
    <header class="p-4 flex justify-between items-center">
      <h1 class="text-title-page text-primary-foreground">ITEM</h1>
      <ElButton 
        type="text" 
        class="text-brand"
        @click="handleProfileSetting"
      >
        Profile Setting
      </ElButton>
    </header>

    <main class="flex-1 p-4 overflow-y-auto">
      <h2 class="text-subtitle text-primary-foreground mb-2">Visit History</h2>

      <section class="mb-4">
        <h3 class="text-heading text-primary-foreground border-b border-primary pb-1 mb-2">Current</h3>
        <div class="bg-tertiary p-2 rounded">
          <div class="flex justify-between items-center">
            <span class="text-body-strong">{{ currentVisit.id }}</span>
            <ElButton type="text" class="text-brand">Loading ></ElButton>
          </div>
          <p class="text-small text-secondary-foreground">Facility: {{ currentVisit.facility }}</p>
          <p class="text-small text-secondary-foreground">Check In Time: {{ currentVisit.checkInTime }}</p>
        </div>
      </section>

      <section class="mb-4">
        <h3 class="text-heading text-primary-foreground border-b border-primary pb-1 mb-2">Upcoming</h3>
        <div v-for="visit in upcomingVisits" :key="visit.id" class="bg-tertiary p-2 rounded mb-2">
          <div class="flex justify-between items-center">
            <span class="text-body-strong">{{ visit.id }}</span>
            <ElButton type="text" class="text-brand" @click="handleViewDetails(visit.id)">View ></ElButton>
          </div>
          <p class="text-small text-secondary-foreground">Facility: {{ visit.facility }}</p>
          <p class="text-small text-secondary-foreground">Appointment Time: {{ visit.appointmentTime }}</p>
        </div>
      </section>

      <section>
        <h3 class="text-heading text-primary-foreground border-b border-primary pb-1 mb-2">History</h3>
        <div v-for="visit in historyVisits" :key="visit.id" class="bg-tertiary p-2 rounded mb-2">
          <div class="flex justify-between items-center">
            <span class="text-body-strong">{{ visit.id }}</span>
            <ElButton type="text" class="text-brand" @click="handleViewDetails(visit.id)">View ></ElButton>
          </div>
          <p class="text-small text-secondary-foreground">Facility: {{ visit.facility }}</p>
          <p class="text-small text-secondary-foreground">Check In Time: {{ visit.checkInTime }}</p>
          <p class="text-small text-secondary-foreground">Check Out Time: {{ visit.checkOutTime }}</p>
        </div>
      </section>
    </main>
  </div>
</template>
