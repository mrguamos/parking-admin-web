<template>
	<el-date-picker
		v-model="value1"
		type="datetime"
		placeholder="Select date and time"
		:prefix-icon="IconTime"
		format="MM/DD/YYYY hh:mm:ss A"
		date-format="MM/DD/YYYY"
		time-format="hh:mm:ss A"
	/>
</template>

<script lang="ts" setup>
import { h, ref, shallowRef } from 'vue';

const value1 = ref('');
const IconTime = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined text-[16px]', innerHTML: 'schedule' });
	},
});
</script>
