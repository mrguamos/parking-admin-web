<template>
	<h1 class="text-title-page">Segmented Control</h1>

	<article>
		<p class="text-body mt-4">
			A segmented control is used to present a set of mutually exclusive options or categories in a
			visually distinct and interactive manner. It allows users to toggle between different
			segments, selecting one option at a time while highlighting the currently active segment.
		</p>
		<p class="text-body mt-4">
			Segmented controls provide a clear and intuitive way for users to select from a set of
			mutually exclusive options or categories. They are commonly used in scenarios where users need
			to switch between different views, filter content, or choose among different modes of
			operation. The visual and interactive nature of segmented controls improves the usability and
			enhances the user experience of an interface by facilitating quick and accurate option
			selection.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic Usage</h2>
	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<el-segmented v-model="value" :options="options" />
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Block</h2>
	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<el-segmented v-model="value" :options="options" block />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('A')

const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
</script>
