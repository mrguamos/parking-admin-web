<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { driverApi } from '@/apis/driverApi';
import { IUpdateDriverDto } from '@/models/driver/driver.interface';
import type { FormInstance } from 'element-plus';
import { ElMessage } from 'element-plus';

const formRef = ref<FormInstance>();
const loading = ref(false);

const formData = ref<IUpdateDriverDto>({
  email: '',
  phoneNumber: '',
  firstName: '',
  lastName: ''
});

const rules = {
  email: [
    { required: true, message: 'Email is required', trigger: 'blur' },
    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }
  ],
  phoneNumber: [
    { required: true, message: 'Phone number is required', trigger: 'blur' },
    { pattern: /^\d{10}$/, message: 'Please enter a valid 10-digit phone number', trigger: 'blur' }
  ],
  firstName: [
    { required: true, message: 'First name is required', trigger: 'blur' }
  ],
  lastName: [
    { required: true, message: 'Last name is required', trigger: 'blur' }
  ]
};

async function loadProfile() {
  loading.value = true;
  try {
    const response = await driverApi.getCurrentDriver();
    if (response.data) {
      formData.value = response.data;
    }
  } finally {
    loading.value = false;
  }
}

async function handleSubmit() {
  if (!formRef.value) return;

  await formRef.value.validate(async (valid) => {
    if (valid) {
      loading.value = true;
      try {
        await driverApi.updateDriver(formData.value);
        ElMessage.success('Profile updated successfully');
      } catch (error) {
        console.error('Error updating profile:', error);
      } finally {
        loading.value = false;
      }
    }
  });
}

onMounted(() => {
  loadProfile();
});
</script>

<template>
  <div class="p-6">
    <div class="mb-6 flex items-center">
      <span class="material-icons-outlined mr-2">account_circle</span>
      <h2 class="text-xl font-semibold">Driver Profile</h2>
    </div>

    <el-card v-loading="loading">
      <el-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-position="top"
      >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="First Name" prop="firstName">
              <el-input v-model="formData.firstName" />
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Last Name" prop="lastName">
              <el-input v-model="formData.lastName" />
            </el-form-item>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="Email" prop="email">
              <el-input v-model="formData.email" type="email">
                <template #prefix>
                  <span class="material-icons-outlined">email</span>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Phone Number" prop="phoneNumber">
              <el-input v-model="formData.phoneNumber">
                <template #prefix>
                  <span class="material-icons-outlined">phone</span>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-form-item>
          <el-button type="primary" @click="handleSubmit" :loading="loading">
            <span class="material-icons-outlined mr-2">save</span>
            Save Changes
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template> 