<script setup lang="ts">
import { ref } from 'vue';
import { IPaymentMethod } from '@/models/settings/payment.interface';

const paymentMethods = ref<IPaymentMethod[]>([
  {
    id: '1',
    type: 'Visa',
    lastFour: '4242',
    expiryDate: '12/24',
    isDefault: true
  },
  {
    id: '2',
    type: 'Mastercard',
    lastFour: '8888',
    expiryDate: '09/25',
    isDefault: false
  }
]);

const dialogVisible = ref(false);

function showAddCardDialog() {
  dialogVisible.value = true;
}

function handleAddCard() {
  dialogVisible.value = false;
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center">
        <span class="material-icons-outlined mr-2">payments</span>
        <h1 class="text-xl font-semibold">Payment Methods</h1>
      </div>
      <el-button type="primary" @click="showAddCardDialog">
        <span class="material-icons-outlined mr-2">add_card</span>
        Add Payment Method
      </el-button>
    </div>

    <div class="grid gap-4">
      <el-card v-for="method in paymentMethods" :key="method.id">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-3">credit_card</span>
            <div>
              <div class="font-medium">{{ method.type }} **** {{ method.lastFour }}</div>
              <div class="text-gray-500">Expires {{ method.expiryDate }}</div>
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
      title="Add Payment Method"
      width="500px"
    >
      <div class="p-6">
        <el-form label-position="top">
          <el-form-item label="Card Number">
            <el-input placeholder="**** **** **** ****" />
          </el-form-item>
          <div class="grid grid-cols-2 gap-4">
            <el-form-item label="Expiry Date">
              <el-input placeholder="MM/YY" />
            </el-form-item>
            <el-form-item label="CVV">
              <el-input placeholder="***" />
            </el-form-item>
          </div>
          <el-form-item label="Name on Card">
            <el-input />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleAddCard">Add Card</el-button>
      </template>
    </el-dialog>
  </div>
</template>
