<template>
	<h1 class="text-title-page">Time Picker</h1>

	<article>
		<p class="text-body mt-4">Use Time Picker for time input.</p>
	</article>

	<h2 class="text-subtitle mt-8">Arbitrary time picker</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<time-arbitrary />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Limit the time range</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<time-arbitrary-range />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Arbitrary time range</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<time-range />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Time Formats</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<time-select />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Fixed time range</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<time-select-range />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import TimeArbitrary from './arbitrary.vue';
import TimeArbitraryRange from './arbitrary-range.vue';
import TimeRange from './limit-range.vue';
import TimeSelect from './time-select.vue';
import TimeSelectRange from './time-select-range.vue';
</script>
