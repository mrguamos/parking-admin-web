<script setup lang="ts">
import { ref } from 'vue';

const form = ref({
  siteName: '',
  adminEmail: '',
  maxReservationDays: 7,
  allowMultipleReservations: false,
  notificationEnabled: true
});

const handleSubmit = () => {
  // Save settings logic
};
</script>

<template>
  <div class="settings-container">
    <el-card class="w-full">
      <template #header>
        <div class="flex items-center">
          <span class="material-icons-outlined mr-2">settings</span>
          <span>System Settings</span>
        </div>
      </template>

      <el-form
        :model="form"
        label-position="top"
        class="max-w-2xl"
      >
        <el-form-item label="Site Name">
          <el-input v-model="form.siteName" />
        </el-form-item>

        <el-form-item label="Admin Email">
          <el-input v-model="form.adminEmail" type="email" />
        </el-form-item>

        <el-form-item label="Maximum Reservation Days">
          <el-input-number 
            v-model="form.maxReservationDays"
            :min="1"
            :max="30"
          />
        </el-form-item>

        <el-form-item>
          <el-switch
            v-model="form.allowMultipleReservations"
            active-text="Allow Multiple Reservations"
          />
        </el-form-item>

        <el-form-item>
          <el-switch
            v-model="form.notificationEnabled"
            active-text="Enable Email Notifications"
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit">
            <span class="material-icons-outlined mr-1">save</span>
            Save Settings
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.settings-container {
  @apply p-4;
}
</style>
