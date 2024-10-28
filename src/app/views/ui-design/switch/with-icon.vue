<template>
	<el-switch v-model="value" :active-action-icon="IconCheck" :inactive-action-icon="IconClose" />
</template>

<script lang="ts" setup>
import IconCheck from '@assets/svg/global/Check.svg';
import IconClose from '@assets/svg/global/Close.svg';
import { ref } from 'vue';
const value = ref(true);
</script>
