<script setup lang="ts">
import { ref } from 'vue';
import ActiveReservations from './active/active-list.vue';
import ReservationHistory from './history/history-list.vue';

const activeTab = ref('active');
</script>

<template>
  <div class="p-4">
    <el-tabs v-model="activeTab" class="w-full">
      <el-tab-pane label="Active" name="active">
        <ActiveReservations v-if="activeTab === 'active'" />
      </el-tab-pane>
      <el-tab-pane label="History" name="history">
        <ReservationHistory v-if="activeTab === 'history'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
:deep(.el-tabs__header) {
  margin-bottom: 24px;
}

:deep(.el-tabs__nav-wrap) {
  padding: 0 24px;
}
</style>
