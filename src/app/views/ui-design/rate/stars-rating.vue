<template>
	<el-rate v-model="value" void-icon="StarFilled" :texts="rateTexts" show-text />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4);
const rateTexts = [
	'1.00 out of 5',
	'2.00 out of 5',
	'3.00 out of 5',
	'4.00 out of 5',
	'5.00 out of 5',
];
</script>
