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
</script>
