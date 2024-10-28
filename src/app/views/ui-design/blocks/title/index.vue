<template>
    <h1 class="text-title-page">Page Title and Section Title</h1>

    <h2 class="text-subtitle mt-8">Title of page</h2>

    <div class="mt-4 mb-2">
        <code>type="page"</code>
    </div>
    <div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
        <el-row :gutter="40" class="mb-4">
            <el-col>
                <UTitle title="Page Title" type="page" />
            </el-col>
        </el-row>
    </div>

    <h3 class="text-subtitle mt-8">Title of section</h3>

    <div class="mt-4 mb-2">
        <code>type="section"</code>
    </div>
    <div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
        <el-row :gutter="40" class="mb-4">
            <el-col>
                <UTitle title="Section Title" type="section" />
            </el-col>
        </el-row>
    </div>

    <h3 class="text-subtitle mt-8">Customiz buttons</h3>

    <div class="mt-4 mb-2">
        <code>#actions</code>
    </div>
    <div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
        <el-row :gutter="40" class="mb-4">
            <el-col>
                <UTitle title="Order List" type="page">
                    <template #actions>
                        <div class="flex flex-wrap gap-2">
                            <el-button type="primary" text>
                                <el-icon>
                                    <span class="material-icons-outlined">upload</span>
                                </el-icon>
                                Import
                            </el-button>
                            <el-button type="primary">
                                <el-icon>
                                    <span class="material-icons-outlined">add</span>
                                </el-icon>
                                Add New
                            </el-button>
                        </div>
                    </template>
                </UTitle>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts" setup>
import UTitle from '@/components/global/u-title/index.vue';
</script>
