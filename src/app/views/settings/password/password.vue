<script setup lang="ts">
import { ref } from 'vue';
import { IPasswordForm } from '@/models/settings/account.interface';

const passwordForm = ref<IPasswordForm>({
  currentPassword: '',
  newPassword: '',
  confirmPassword: ''
});

function handleChangePassword() {
  // Change password logic here
}
</script>

<template>
  <div class="p-6 h-full flex flex-col items-center">
    <div class="w-full max-w-md">
      <div class="flex items-center mb-6">
        <span class="material-icons-outlined mr-2">lock</span>
        <h1 class="text-xl font-semibold">Change Password</h1>
      </div>

      <el-form 
        :model="passwordForm"
        label-position="top"
      >
        <el-form-item label="Current Password">
          <el-input 
            v-model="passwordForm.currentPassword" 
            type="password" 
            show-password
          />
        </el-form-item>
        
        <el-form-item label="New Password">
          <el-input 
            v-model="passwordForm.newPassword" 
            type="password" 
            show-password
          />
        </el-form-item>
        
        <el-form-item label="Confirm New Password">
          <el-input 
            v-model="passwordForm.confirmPassword" 
            type="password" 
            show-password
          />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleChangePassword">
            <span class="material-icons-outlined mr-2">key</span>
            Update Password
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
