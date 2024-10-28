<template>
	<h1 class="text-title-page">Select</h1>

	<article>
		<p class="text-body mt-4">
			A select, also known as a dropdown menu or a select menu, is a common user interface (UI)
			component that allows users to select a single option from a list of available choices. It
			typically consists of a button or input field and a hidden list of options that appears when
			the button is clicked or the field is focused. Dropdowns are commonly used in forms,
			navigation menus, and various other UI contexts.
		</p>
		<p class="text-body mt-4">
			Selects provide an efficient way for users to choose from a list of options without
			overwhelming the interface with all the choices at once. They conserve space by hiding the
			options until needed, making them a popular choice for presenting a large set of choices in a
			compact manner. Selects enhance user experience by offering a structured and interactive
			selection mechanism for various UI scenarios.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px">
			<el-row :gutter="20" class="mb-4">
				<el-form-item label="Label">
					<el-select v-model="value" placeholder="Select" style="width: 240px">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
							:disabled="item.disabled" />
					</el-select>
				</el-form-item>
			</el-row>
		</el-form>
	</div>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px">
			<el-row :gutter="20" class="mb-4">
				<el-col :sm="12">
					<el-form-item label="Disabled">
						<el-select v-model="value" placeholder="Select" disabled style="width: 240px">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
								:disabled="item.disabled" />
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :sm="12">
					<el-form-item label="Clearable">
						<el-select v-model="value" placeholder="Select" clearable :clear-icon="IconClose"
							style="width: 240px">
							<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"
								:disabled="item.disabled" />
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>

	<h3 class="text-subtitle mt-8">Multiple Select</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px">
			<el-row :gutter="20" class="mb-4">
				<el-col :sm="12">
					<el-form-item label="Default">
						<el-select v-model="value1" multiple filterable allow-create default-first-option
							placeholder="Select" tag-type="primary el-tag--plain" style="width: 240px">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value" />
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :sm="12">
					<el-form-item label="Use collapse-tags-tooltip">
						<el-select v-model="value1" multiple collapse-tags collapse-tags-tooltip placeholder="Select"
							tag-type="primary el-tag--plain" style="width: 240px">
							<el-option v-for="item in options" :key="item.value" :label="item.label"
								:value="item.value" />
						</el-select>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import IconClose from '@assets/svg/global/Close.svg';

import { ref } from 'vue';

const value = ref('');
const value1 = ref([]);
// const value2 = ref([]);
// const value3 = ref([]);
// const value4 = ref([]);

const options = [
	{
		value: 'Option1',
		label: 'Option1',
	},
	{
		value: 'Option2',
		label: 'Option2',
		disabled: true,
	},
	{
		value: 'Option3',
		label: 'Option3',
	},
	{
		value: 'Option4',
		label: 'Option4',
	},
	{
		value: 'Option5',
		label: 'Option5',
	},
];
</script>
