<template>
	<el-rate v-model="value" void-icon="StarFilled" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(4);
</script>
