<script setup lang="ts">
interface ISettingItem {
  icon: string;
  label: string;
  path: string;
}

const settingItems: ISettingItem[] = [
  {
    icon: 'person',
    label: 'Account Info',
    path: '/settings/account'
  },
  {
    icon: 'lock',
    label: 'Change Password',
    path: '/settings/password'
  },
  {
    icon: 'account_balance',
    label: 'Payouts',
    path: '/settings/payouts'
  },
  {
    icon: 'payments',
    label: 'Payments',
    path: '/settings/payments'
  },
  {
    icon: 'group_add',
    label: 'Add Users',
    path: '/settings/users'
  }
];

const handleLogout = () => {
  // Logout logic here
};
</script>

<template>
  <div class="p-4 h-full flex flex-col items-center">
    <div class="w-full max-w-md">
      <div class="flex items-center mb-6">
        <span class="material-icons-outlined mr-2">settings</span>
        <span>Settings</span>
      </div>

      <div class="flex flex-col gap-2">
        <div 
          v-for="item in settingItems" 
          :key="item.path"
          class="p-4 rounded-lg bg-primary cursor-pointer flex items-center justify-between"
          @click="$router.push(item.path)"
        >
          <div class="flex items-center">
            <span class="material-icons-outlined mr-3">{{ item.icon }}</span>
            <span>{{ item.label }}</span>
          </div>
          <span class="material-icons-outlined">chevron_right</span>
        </div>

        <el-button 
          type="danger" 
          class="mt-4"
          @click="handleLogout"
        >
          Logout
        </el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.settings-container {
  @apply p-4;
}
</style>
