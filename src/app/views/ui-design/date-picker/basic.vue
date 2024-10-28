<template>
	<el-date-picker
		v-model="value1"
		type="date"
		placeholder="Pick a day"
		:prefix-icon="IconDate"
		format="MM/DD/YYYY"
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
