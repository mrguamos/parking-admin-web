<template>
	<h1 class="text-title-page">Information box</h1>

	<article>
		<p class="text-body mt-4">
			An information box is a component used to display important or supplementary information to
			users.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<alert-default />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Show icon</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<alert-icon />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Show title and icon</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<alert-icon-title />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import AlertDefault from './default.vue';
import AlertIcon from './with-icon.vue';
import AlertIconTitle from './with-icon-title.vue';
</script>
