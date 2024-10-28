<template>
	<h1 class="text-title-page">Radio</h1>

	<article>
		<p class="text-body mt-4">
			Radio buttons are a type of user interface (UI) component used to present a set of mutually
			exclusive options or choices to users. They allow users to select a single option from a
			predefined set. Radio buttons are often used in forms, settings, and configuration screens
			where users need to make a single selection from a list of options.
		</p>
		<p class="text-body mt-4">
			They simplify the selection process by allowing users to choose a single option from a set of
			choices. By providing clear labels and visual feedback, radio buttons facilitate a smooth and
			understandable user experience.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col :md="12">
				<el-radio-group v-model="radio3">
					<el-radio label="1">Option 1</el-radio>
					<el-radio label="2">Option 2</el-radio>
				</el-radio-group>
			</el-col>
			<el-col :md="12">
				<el-radio-group v-model="radio3" disabled>
					<el-radio label="1">Option 1</el-radio>
					<el-radio label="2">Option 2</el-radio>
				</el-radio-group>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Button style</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col :md="24">
				<el-radio-group v-model="radio2">
					<el-radio-button label="New York" value="New York" />
					<el-radio-button label="Washington" value="Washington" />
					<el-radio-button label="Los Angeles" value="Los Angeles" />
					<el-radio-button label="Chicago" value="Chicago" />
				</el-radio-group>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">With borders</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col :md="24">
				<el-radio-group v-model="radio1">
					<el-radio value="1" border>Option A</el-radio>
					<el-radio value="2" border>Option B</el-radio>
				</el-radio-group>
			</el-col>
		</el-row>
	</div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';

const radio2 = ref('New York');
const radio1 = ref('1')
const radio3 = ref('1');
</script>
