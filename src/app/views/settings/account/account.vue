<script setup lang="ts">
import { ref } from 'vue';
import { IUserProfile } from '@/models/settings/account.interface';

const userProfile = ref<IUserProfile>({
  name: 'John Doe',
  email: 'john.doe@example.com',
  phone: '+1 234 567 8900',
  company: 'Example Corp'
});

function handleUpdateProfile() {
  // Update profile logic here
}
</script>

<template>
  <div class="p-6 h-full flex flex-col items-center">
    <div class="w-full max-w-2xl">
      <div class="flex items-center mb-6">
        <span class="material-icons-outlined mr-2">person</span>
        <h1 class="text-xl font-semibold">Account Information</h1>
      </div>

      <el-form 
        :model="userProfile"
        label-position="top"
      >
        <el-form-item label="Name">
          <el-input v-model="userProfile.name" />
        </el-form-item>
        
        <el-form-item label="Email">
          <el-input v-model="userProfile.email" type="email" />
        </el-form-item>
        
        <el-form-item label="Phone">
          <el-input v-model="userProfile.phone" />
        </el-form-item>
        
        <el-form-item label="Company">
          <el-input v-model="userProfile.company" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleUpdateProfile">
            <span class="material-icons-outlined mr-2">save</span>
            Save Changes
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
