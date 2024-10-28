<template>
	<a href="" class="inline-flex items-center cursor-pointer hover:underline">
		<el-rate v-model="value" class="[&>*>*]:cursor-pointer" void-icon="StarFilled" disabled />
		<span class="block ml-2 w-1 h-1 rounded-full bg-tertiary"></span>
		<span class="el-rate__text">1234 reviews</span>
	</a>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4);
</script>
