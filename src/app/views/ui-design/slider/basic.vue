<template>
	<el-slider v-model="value" tooltip-class="slider-tip" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const value = ref(40);
</script>
