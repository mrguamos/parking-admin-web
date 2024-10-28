<template>
	<el-button type="primary" @click="dialog_visible = true">Open a default dialog</el-button>
	<el-dialog v-model="dialog_visible" :show-close="false" align-center width="500">
		<template #header="{ close, titleId, titleClass }">
			<div class="flex items-center gap-2 flex-auto">
				<h4 :id="titleId" :class="titleClass">This is a header!</h4>
			</div>
			<el-button type="info" :icon="IconClose" text circle @click="close" />
		</template>
		<div class="px-4">
			<span class="text-body">
				A dialog is a type of modal window that appears in front of app content to provide critical
				information, or prompt for a decision to be made.
			</span>
		</div>
		<template #footer>
			<div>
				<el-button @click="dialog_visible = false">Cancel</el-button>
				<el-button type="primary" @click="dialog_visible = false">Confirm</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import IconClose from '@assets/svg/global/Close.svg';

import { ref } from 'vue';
const dialog_visible = ref(false);
</script>
