<template>
	<el-date-picker
		v-model="value1"
		type="datetimerange"
		start-placeholder="Start time"
		end-placeholder="End time"
		range-separator="-"
		format="MM/DD/YYYY hh:mm:ss"
		date-format="MM/DD/YYYY"
		time-format="hh:mm:ss A"
		:prefix-icon="IconDate"
		:shortcuts="shortcuts"
	/>
</template>

<script lang="ts" setup>
import { h, ref, shallowRef } from 'vue';

const value1 = ref('');
const IconDate = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined text-[16px]', innerHTML: 'calendar_today' });
	},
});

const shortcuts = [
	{
		text: 'Last week',
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
			return [start, end];
		},
	},
	{
		text: 'Last month',
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
			return [start, end];
		},
	},
	{
		text: 'Last 3 months',
		value: () => {
			const end = new Date();
			const start = new Date();
			start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
			return [start, end];
		},
	},
];
</script>
