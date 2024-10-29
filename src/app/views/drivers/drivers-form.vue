<script setup lang="ts">

import { ref, onMounted } from 'vue';

import { useRoute, useRouter } from 'vue-router';

import { driverApi } from '@/apis/driverApi';

import { useDriverStore } from '@/stores/driver';

import { IUpdateDriverDto } from '@/models/driver/driver.interface';

import type { FormInstance, FormRules } from 'element-plus';

import { ElMessage } from 'element-plus';



const route = useRoute();

const router = useRouter();

const driverStore = useDriverStore();

const formRef = ref<FormInstance>();

const loading = ref(false);



const formData = ref<IUpdateDriverDto>({

  email: '',

  phoneNumber: '',

  firstName: '',

  lastName: ''

});



const rules: FormRules = {

  email: [

    { required: true, message: 'Email is required', trigger: 'blur' },

    { type: 'email', message: 'Please enter a valid email address', trigger: 'blur' }

  ],

  phoneNumber: [

    { required: true, message: 'Phone number is required', trigger: 'blur' },

    { pattern: /^\+?\d{10,}$/, message: 'Please enter a valid phone number', trigger: 'blur' }

  ],

  firstName: [

    { required: true, message: 'First name is required', trigger: 'blur' }

  ],

  lastName: [

    { required: true, message: 'Last name is required', trigger: 'blur' }

  ]

};



async function loadDriver(id: number) {

  loading.value = true;

  try {

    // Use store data if available

    const storedDriver = driverStore.mockDrivers.find(d => d.id === id);

    if (storedDriver) {

      formData.value = { ...storedDriver };

    } else {

      // Fallback to API call

      const response = await driverApi.getCurrentDriver();

      if (response.data) {

        // Cast the response data to IUpdateDriverDto

        formData.value = {

          id: response.data.id,

          email: response.data.email,

          phoneNumber: response.data.phoneNumber,

          firstName: response.data.firstName,

          lastName: response.data.lastName,

          licensePlates: response.data.licensePlates

        };

      }

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

        const driverId = route.params.id;

        if (driverId) {

          // Update in store

          driverStore.updateDriver(formData.value);

          ElMessage.success('Driver updated successfully');

        } else {

          // Add to store

          driverStore.mockDrivers.push({

            ...formData.value,

            id: driverStore.mockDrivers.length + 1,

            licensePlates: []

          });

          ElMessage.success('Driver created successfully');

        }

        router.push('/drivers');

      } finally {

        loading.value = false;

      }

    }

  });

}



onMounted(() => {

  const driverId = route.params.id;

  if (driverId) {

    loadDriver(Number(driverId));

  }

});

</script>



<template>

  <div class="p-6">

    <div class="mb-6 flex items-center justify-between">

      <h2 class="text-xl font-semibold">

        {{ route.params.id ? 'Edit' : 'Add' }} Driver

      </h2>

      <el-button @click="router.push('/drivers')">

        <span class="material-icons-outlined mr-2">arrow_back</span>

        Back

      </el-button>

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

            {{ route.params.id ? 'Update' : 'Create' }} Driver

          </el-button>

        </el-form-item>

      </el-form>

    </el-card>

  </div>

</template> 
