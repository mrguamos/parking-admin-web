<script setup lang="ts">
import { ref, computed } from 'vue';

interface IRFIDTag {
  id: number;
  tagNumber: string;
  isActive: boolean;
  assignedToName?: string;
}

// Mock data
const mockTags: IRFIDTag[] = Array(20).fill(null).map((_, index) => ({
  id: index + 1,
  tagNumber: `RFID${String(index + 1).padStart(3, '0')}`,
  isActive: index % 5 !== 0,
  assignedToName: index % 2 === 0 ? `John Doe ${index + 1}` : undefined
}));

const loading = ref(false);
const currentPage = ref(1);
const pageSize = ref(10);
const searchText = ref('');
const dialogVisible = ref(false);
const isEdit = ref(false);
const editingTag = ref<IRFIDTag>({
  id: 0,
  tagNumber: '',
  isActive: true
});

const filteredTags = computed(() => {
  let filtered = mockTags;
  if (searchText.value) {
    const search = searchText.value.toLowerCase();
    filtered = mockTags.filter(tag => 
      tag.tagNumber.toLowerCase().includes(search) ||
      (tag.assignedToName && tag.assignedToName.toLowerCase().includes(search))
    );
  }
  return filtered;
});

const paginatedTags = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredTags.value.slice(start, end);
});

function handlePageChange(page: number) {
  currentPage.value = page;
}

function handleAdd() {
  isEdit.value = false;
  editingTag.value = {
    id: Date.now(),
    tagNumber: '',
    isActive: true
  };
  dialogVisible.value = true;
}

function handleEdit(tag: IRFIDTag) {
  isEdit.value = true;
  editingTag.value = { ...tag };
  dialogVisible.value = true;
}

function handleSubmit() {
  if (isEdit.value) {
    const index = mockTags.findIndex(t => t.id === editingTag.value.id);
    if (index !== -1) {
      mockTags[index] = { ...editingTag.value };
    }
  } else {
    mockTags.push({ ...editingTag.value });
  }
  dialogVisible.value = false;
}
</script>

<template>
  <div class="p-6">
    <div class="mb-6">
      <h2 class="text-xl font-semibold mb-4">RFID Tags</h2>
      <el-input
        v-model="searchText"
        placeholder="Search tags..."
        class="w-full"
        clearable
      >
        <template #prefix>
          <span class="material-icons-outlined">search</span>
        </template>
      </el-input>
    </div>

    <el-card v-loading="loading">
      <div class="mb-4 flex justify-end">
        <el-button type="primary" @click="handleAdd">
          <span class="material-icons-outlined mr-2">add</span>
          Add RFID Tag
        </el-button>
      </div>

      <el-table :data="paginatedTags">
        <el-table-column prop="tagNumber" label="Tag Number" />
        <el-table-column prop="assignedToName" label="Assigned To" />
        <el-table-column prop="isActive" label="Status">
          <template #default="{ row }">
            <el-tag :type="row.isActive ? 'success' : 'danger'">
              {{ row.isActive ? 'Active' : 'Inactive' }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column label="">
          <template #default="{ row }">
            <div class="flex items-center justify-end gap-1">
            <el-button 
              type="primary" 
              text
              @click="handleEdit(row)"
            >
              <span class="material-icons-outlined">edit</span>
              </el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>

      <div class="flex justify-end mt-4">
        <el-pagination
          v-model:current-page="currentPage"
          v-model:page-size="pageSize"
          :total="filteredTags.length"
          @current-change="handlePageChange"
        />
      </div>
    </el-card>

    <!-- RFID Tag Dialog -->
    <el-dialog
      v-model="dialogVisible"
      :title="isEdit ? 'Edit RFID Tag' : 'Add RFID Tag'"
      width="500px"
    >
      <div class="p-6">
        <el-form :model="editingTag" label-position="top">
          <el-form-item label="Tag Number" required>
            <el-input v-model="editingTag.tagNumber" />
          </el-form-item>
          <el-form-item label="Status">
            <el-switch
              v-model="editingTag.isActive"
              :active-text="editingTag.isActive ? 'Active' : 'Inactive'"
            />
          </el-form-item>
        </el-form>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="handleSubmit">
          {{ isEdit ? 'Update' : 'Create' }}
        </el-button>
      </template>
    </el-dialog>
  </div>
</template>