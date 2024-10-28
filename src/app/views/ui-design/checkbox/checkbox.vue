<template>
	<h1 class="text-title-page">Checkbox</h1>

	<article>
		<p class="text-body mt-4">
			A checkbox allows users to select or toggle between two mutually exclusive states, typically
			representing a binary choice or option. It provides users with a visual indication of the
			selected or unselected state and is commonly used for multi-choice selection or toggling
			settings.
		</p>
		<p class="text-body mt-4">
			Checkboxes are commonly used in forms, preference settings, and other user interfaces where
			users need to make multiple selections or enable/disable specific options.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col :md="12">
				<el-checkbox v-model="checked5" label="Option 1" />
				<el-checkbox v-model="checked6" label="Option 2" />
			</el-col>
			<el-col :md="12">
				<el-checkbox v-model="checked5" label="Option 1" disabled />
				<el-checkbox v-model="checked6" label="Option 2" disabled />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Group and Indeterminate</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-checkbox
			v-model="checkAll"
			:indeterminate="isIndeterminate"
			@change="handleCheckAllChange"
		>
			Check all
		</el-checkbox>
		<el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
			<el-checkbox v-for="city in cities" :key="city" :label="city">
				{{ city }}
			</el-checkbox>
		</el-checkbox-group>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const checked5 = ref(true);
const checked6 = ref(false);

const checkAll = ref(false);
const isIndeterminate = ref(true);
const checkedCities = ref(['Shanghai', 'Beijing']);
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen'];

const handleCheckAllChange = (val: boolean) => {
	checkedCities.value = val ? cities : [];
	isIndeterminate.value = false;
};
const handleCheckedCitiesChange = (value: string[]) => {
	const checkedCount = value.length;
	checkAll.value = checkedCount === cities.length;
	isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length;
};
</script>
