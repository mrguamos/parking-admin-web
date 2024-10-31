<template>
  <div class="entry-page">
    <h1>Entry</h1>
    <el-button type="primary" @click="createEntry">+ Create Entry</el-button>
    <el-dialog v-model="dialogVisible" title="Choose your entry tasks" width="80%" :before-close="handleClose">
      <choose-entry-tasks @close="dialogVisible = false" />
    </el-dialog>

    <el-form :model="form" label-width="120px">
      <el-row :gutter="20">
        <el-col :span="6">
          <el-form-item label="Entry ID">
            <el-input v-model="form.entryId"></el-input>
          </el-form-item>
          <el-form-item label="Current Status">
            <el-input v-model="form.currentStatus"></el-input>
          </el-form-item>
          <el-form-item label="Entry Types">
            <el-select v-model="form.entryType" filterable clearable>
              <el-option label="Dropoff Receiving Task" value="dropoff"></el-option>
              <!-- Add more options as needed -->
               
            </el-select>
          </el-form-item>
          <el-form-item label="Tag">
            <el-input v-model="form.tag"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Carrier">
            <el-select v-model="form.carrier">
              <el-option label="JB Hunt" value="jb_hunt"></el-option>
              <el-option label="Swift Transportation" value="swift"></el-option>
              <el-option label="Schneider National" value="schneider"></el-option>
              <el-option label="Werner Enterprises" value="werner"></el-option>
              <el-option label="C.R. England" value="cr_england"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="Driver">
            <el-input v-model="form.driver"></el-input>
          </el-form-item>
          <el-form-item label="Driver License">
            <el-input v-model="form.driverLicense"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Tractor">
            <el-input v-model="form.tractor"></el-input>
          </el-form-item>
          <el-form-item label="Trailer">
            <el-input v-model="form.trailer"></el-input>
          </el-form-item>
          <el-form-item label="Container">
            <el-input v-model="form.container"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="Load ID">
            <el-input v-model="form.loadId"></el-input>
          </el-form-item>
          <el-form-item label="Load #">
            <el-input v-model="form.loadNumber"></el-input>
          </el-form-item>
          <el-form-item label="Receipt ID">
            <el-input v-model="form.receiptId"></el-input>
          </el-form-item>
          <el-form-item label="Customer">
            <el-input v-model="form.customer"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button @click="resetForm">Reset</el-button>
        <el-button type="primary" @click="searchEntries">Search</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="entries" style="width: 100%">
      <el-table-column prop="et" label="ET #" ></el-table-column>
      <el-table-column prop="etType" label="ET Type" width="150"></el-table-column>
      <el-table-column prop="driverName" label="Driver Name" width="180"></el-table-column>
      <el-table-column prop="carrier" label="Carrier" ></el-table-column>
      <el-table-column prop="mcDot" label="MC / DOT" ></el-table-column>
      <el-table-column prop="currentStatus" label="Current Status" width="180"></el-table-column>
      <el-table-column label="Actions" width="200">
        <template #default="scope">
          <el-button size="small" @click="viewDetails(scope.row)">View Details</el-button>
          <el-button size="small" @click="openWindow(scope.row)">Window</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :current-page="currentPage"
      :page-size="pageSize"
      :total="totalEntries"
      layout="total, sizes, prev, pager, next, jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import ChooseEntryTasks from './ChooseEntryTasks.vue';

const dialogVisible = ref(false);

const form = reactive({
  entryId: '',
  currentStatus: '',
  entryType: '',
  tag: '',
  carrier: '',
  driver: '',
  driverLicense: '',
  tractor: '',
  trailer: '',
  container: '',
  loadId: '',
  loadNumber: '',
  receiptId: '',
  customer: ''
})

const entries = ref([
  {
    et: 'ET-301398',
    etType: 'Live Task',
    driverName: 'Skylar Mango',
    carrier: 'JB Hunt',
    mcDot: 'MC10020034',
    currentStatus: 'Need window check in'
  },
  // Add more mock data here
])

const currentPage = ref(1)
const pageSize = ref(10)
const totalEntries = ref(100)

const createEntry = () => {
  dialogVisible.value = true;
};

const handleClose = (done) => {
  // You can add confirmation logic here if needed
  done();
};

const resetForm = () => {
  Object.keys(form).forEach(key => form[key] = '')
}

const searchEntries = () => {
  ElMessage.success('Search clicked')
}

const viewDetails = (row) => {
  ElMessage.info(`View details for ${row.et}`)
}

const openWindow = (row) => {
  ElMessage.info(`Open window for ${row.et}`)
}

const handleSizeChange = (val) => {
  pageSize.value = val
  // Fetch entries with new page size
}

const handleCurrentChange = (val) => {
  currentPage.value = val
  // Fetch entries for new page
}
</script>

<style scoped>
.entry-page {
  padding: 20px;
}
</style>
<!-- Please use element plus component and base on the screenshot to create the empty category page first, and when I click the button of the Add New, popup a dialog to add a new category. Then click save button add my filled info into the table. Also when I click the edit icon, popup the edit dialog. -->