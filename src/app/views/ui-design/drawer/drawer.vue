<template>
	<h1 class="text-title-page">Drawer</h1>

	<article>
		<p class="text-body mt-4">
			Sometimes, Dialog does not always satisfy our requirements, let's say you have a massive form, or you need space to display something.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Right to left</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<drawerright />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Left to right</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<drawerleft />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Bottom to top</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<drawerbottom />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import drawerright from './right.vue';
import drawerleft from './left.vue';
import drawerbottom from './bottom.vue';
</script>
