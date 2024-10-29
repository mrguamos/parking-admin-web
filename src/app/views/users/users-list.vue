<script setup lang="ts">
import { ref } from 'vue';
import { IUser } from '@/models/users/user.interface';
import { ElMessageBox } from 'element-plus';

const users = ref<IUser[]>([
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2024-03-20 09:30'
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '2024-03-19 14:15'
  }
]);

const dialogVisible = ref(false);
const editingUser = ref<IUser | null>(null);
const formData = ref({
  name: '',
  email: '',
  role: ''
});

function showAddDialog() {
  editingUser.value = null;
  formData.value = {
    name: '',
    email: '',
    role: ''
  };
  dialogVisible.value = true;
}

function showEditDialog(user: IUser) {
  editingUser.value = user;
  formData.value = {
    name: user.name,
    email: user.email,
    role: user.role
  };
  dialogVisible.value = true;
}

function handleSubmit() {
  if (editingUser.value) {
    // Update existing user
    const index = users.value.findIndex(u => u.id === editingUser.value?.id);
    if (index !== -1) {
      users.value[index] = {
        ...users.value[index],
        ...formData.value
      };
    }
  } else {
    // Add new user
    users.value.push({
      id: String(users.value.length + 1),
      ...formData.value,
      status: 'active',
      lastLogin: new Date().toISOString()
    } as IUser);
  }
  dialogVisible.value = false;
}

async function handleDelete(user: IUser) {
  try {
    await ElMessageBox.confirm(
      'Are you sure you want to delete this user?',
      'Warning',
      {
        type: 'warning'
      }
    );
    users.value = users.value.filter(u => u.id !== user.id);
  } catch {
    // User cancelled deletion
  }
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <div class="flex items-center">
        <span class="material-icons-outlined mr-2">group</span>
        <h1 class="text-xl font-semibold">Users</h1>
      </div>
      <el-button type="primary" @click="showAddDialog">
        <span class="material-icons-outlined mr-2">person_add</span>
        Add User
      </el-button>
    </div>

    <el-table :data="users" class="w-full">
      <el-table-column prop="name" label="Name">
        <template #default="{ row }">
          <div class="flex items-center">
            <span class="material-icons-outlined mr-2">person</span>
            {{ row.name }}
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="email" label="Email" />
      <el-table-column prop="role" label="Role" width="120" />
      <el-table-column prop="status" label="Status" width="120">
        <template #default="{ row }">
          <el-tag :type="row.status === 'active' ? 'success' : 'danger'">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="lastLogin" label="Last Login" width="180" />
      <el-table-column width="100">
        <template #default="{ row }">
          <el-dropdown trigger="click">
            <span class="material-icons-outlined cursor-pointer">more_vert</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="showEditDialog(row)">
                  <span class="material-icons-outlined mr-2">edit</span>
                  Edit
                </el-dropdown-item>
                <el-dropdown-item>
                  <span class="material-icons-outlined mr-2">block</span>
                  Deactivate
                </el-dropdown-item>
                <el-dropdown-item divided type="danger" @click="handleDelete(row)">
                  <span class="material-icons-outlined mr-2">delete</span>
                  Delete
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      v-model="dialogVisible"
      :title="editingUser ? 'Edit User' : 'Add New User'"
      width="500px"
    >
      <div class="p-6">
        <el-form label-position="top">
          <el-form-item label="Name">
            <el-input v-model="formData.name" placeholder="Enter user's name" />
          </el-form-item>
          <el-form-item label="Email">
            <el-input v-model="formData.email" placeholder="Enter user's email" />
          </el-form-item>
          <el-form-item label="Role">
            <el-select v-model="formData.role" class="w-full" placeholder="Select role">
              <el-option label="Admin" value="Admin" />
              <el-option label="User" value="User" />
              <el-option label="Operator" value="Operator" />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ editingUser ? 'Update' : 'Add' }} User
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>
