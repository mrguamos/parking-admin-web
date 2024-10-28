<script setup lang="ts">
import { ref } from 'vue';

const title = ref('Welcome to UNIS');
</script>

<template>
  <div class="home-container">
    <el-card class="w-full">
      <template #header>
        <div class="flex items-center">
          <span class="material-icons-outlined mr-2">home</span>
          <span>{{ title }}</span>
        </div>
      </template>
      
      <div class="card-content">
        <!-- Content will be added based on requirements -->
      </div>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.home-container {
  @apply p-4;

  .card-content {
    @apply min-h-[200px];
  }
}
</style>
