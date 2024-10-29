<script setup lang="ts">
import { ref } from 'vue';
import { IPayoutMethod } from '@/models/settings/payout.interface';

const payoutMethods = ref<IPayoutMethod[]>([
  {
    id: '1',
    type: 'Bank Account',
    details: '**** 1234',
    isDefault: true
  },
  {
    id: '2',
    type: 'PayPal',
    details: 'user@example.com',
    isDefault: false
  }
]);

const dialogVisible = ref(false);

function showAddMethodDialog() {
  dialogVisible.value = true;
}

function handleAddMethod() {
  dialogVisible.value = false;
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center">
        <span class="material-icons-outlined mr-2">account_balance</span>
        <h1 class="text-xl font-semibold">Payout Methods</h1>
      </div>
      <el-button type="primary" @click="showAddMethodDialog">
        <span class="material-icons-outlined mr-2">add</span>
        Add Payout Method
      </el-button>
    </div>

    <div class="grid gap-4">
      <el-card v-for="method in payoutMethods" :key="method.id">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-3">
              {{ method.type === 'Bank Account' ? 'account_balance' : 'payment' }}
            </span>
            <div>
              <div class="font-medium">{{ method.type }}</div>
              <div class="text-gray-500">{{ method.details }}</div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <el-tag v-if="method.isDefault" type="success">Default</el-tag>
            <el-dropdown trigger="click">
              <span class="material-icons-outlined cursor-pointer">more_vert</span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item v-if="!method.isDefault">
                    Set as Default
                  </el-dropdown-item>
                  <el-dropdown-item>Edit</el-dropdown-item>
                  <el-dropdown-item divided type="danger">Delete</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-card>
    </div>

    <el-dialog
      v-model="dialogVisible"
      title="Add Payout Method"
      width="500px"
    >
      <div class="p-6">
        <el-form label-position="top">
          <el-form-item label="Method Type">
            <el-select class="w-full">
              <el-option label="Bank Account" value="bank" />
              <el-option label="PayPal" value="paypal" />
            </el-select>
          </el-form-item>
          <el-form-item label="Account Details">
            <el-input />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAddMethod">Add Method</el-button>
      </template>
    </el-dialog>
  </div>
</template>
