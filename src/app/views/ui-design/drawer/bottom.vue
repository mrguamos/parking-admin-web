<template>
    <el-button type="primary" @click="drawer = true">
        Open Drawer
    </el-button>

    <el-drawer v-model="drawer" :direction="'btt'" :before-close="handleClose">
        <template #header>
            <h4>Drawer title</h4>
        </template>
        <template #default>
            Drawer content
        </template>
        <template #footer>
            <div class="flex gap-2 flex-auto w-full justify-end">
                <el-button @click="cancelClick">Cancel</el-button>
                <el-button type="primary" @click="confirmClick">Confirm</el-button>
            </div>
        </template>
    </el-drawer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const handleClose = (done: () => void) => {
    // Add your close logic here
    done()
}

function cancelClick() {
    drawer.value = false
}
function confirmClick() {
    drawer.value = false
}
</script>