<template>
	<h1 class="text-title-page">Breadcrumb</h1>

	<article>
		<p class="text-body mt-4">
			Displays the location of the current page, making it easier to browser back.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<basic-breadcrumb />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Icon separator</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<icon-breadcrumb />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import BasicBreadcrumb from './basic.vue';
import IconBreadcrumb from './icon.vue';
</script>
