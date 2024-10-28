<template>
	<h1 class="text-title-page">Transfer</h1>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<transfer-basic />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import TransferBasic from './basic.vue';
</script>
