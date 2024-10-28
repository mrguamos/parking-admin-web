<template>
	<h1 class="text-title-page">Divider</h1>

	<article>
		<p class="text-body mt-4">
			Dividers are UI components used to visually separate content or sections within a layout. They
			help improve the visual organization and readability of a user interface. Dividers are
			typically horizontal or vertical lines that create a clear visual distinction between
			different parts of a page or within a specific component.
		</p>
		<p class="text-body mt-4">
			Dividers play a vital role in creating visual structure and separation within a user
			interface.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<divider-horizontal />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Show icon</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<divider-vertical />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import DividerHorizontal from './horizontal.vue';
import DividerVertical from './vertical.vue';
</script>
