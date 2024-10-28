<template>
	<el-switch v-model="value" disabled />
	<el-switch v-model="value2" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
const value2 = ref(false);
</script>
