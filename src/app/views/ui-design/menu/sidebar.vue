<template>
	<el-radio-group v-model="isCollapse" class="segmented-control" style="margin-bottom: 20px">
		<el-radio-button :value="false" :label="false">expand</el-radio-button>
		<el-radio-button :value="true" :label="true">collapse</el-radio-button>
	</el-radio-group>
	<el-menu
		default-active="2"
		class="[&:not(.el-menu--collapse)]:w-64"
		unique-opened="true"
		:collapse="isCollapse"
		@open="handleOpen"
		@close="handleClose"
	>
		<el-sub-menu index="1">
			<template #title>
				<el-icon><location /></el-icon>
				<span>Navigator Level 1</span>
			</template>
			<el-menu-item index="1-1">item one</el-menu-item>
			<el-menu-item index="1-2">item two</el-menu-item>
			<el-menu-item index="1-3">item three</el-menu-item>
			<el-sub-menu index="1-4">
				<template #title>
					<span>Navigator Level 2</span>
				</template>
				<el-menu-item index="1-4-1">item one</el-menu-item>
				<el-menu-item index="1-4-2">item two</el-menu-item>
				<el-menu-item index="1-4-3">item three</el-menu-item>
			</el-sub-menu>
		</el-sub-menu>
		<el-sub-menu index="2">
			<template #title>
				<el-icon><icon-menu /></el-icon>
				<span>Navigator Two</span>
			</template>
			<el-menu-item index="2-1">item one</el-menu-item>
			<el-menu-item index="2-2">item two</el-menu-item>
			<el-menu-item index="2-3">item three</el-menu-item>
			<el-menu-item index="2-4">item four</el-menu-item>
		</el-sub-menu>
		<el-menu-item index="3" disabled>
			<el-icon><document /></el-icon>
			<template #title>Navigator Three</template>
		</el-menu-item>
		<el-menu-item index="4">
			<el-icon><setting /></el-icon>
			<template #title>Navigator Four</template>
		</el-menu-item>
	</el-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
	console.log(key, keyPath);
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
	/* width: 200px; */
}
</style>
