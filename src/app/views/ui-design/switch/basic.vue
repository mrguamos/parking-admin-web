<template>
	<el-switch v-model="value" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(true);
</script>
