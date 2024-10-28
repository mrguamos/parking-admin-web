<template>
	<el-upload
		v-model:file-list="fileList"
		v-model:show-file-list="showFileList"
		action="#"
		drag
		multiple
		list-type="text"
		:auto-upload="false"
		:on-change="handleChange"
	>
		<el-icon class="el-icon--upload"><icon-upload /></el-icon>
		<div class="el-upload__text">
			Drop your files here or
			<em>browse</em>
		</div>
		<div class="el-upload__tip">Maximum size: 10MB</div>
		<template #file="{ file }">
			<div class="flex">
				<span
					class="flex w-9 h-9 items-center justify-center text-[20px] rounded-lg bg-primary"
				>
					<el-icon><span class="material-icons-outlined">description</span></el-icon>
				</span>
				<div class="pl-4 flex-auto">
					<div class="text-small text-primary-foreground" :title="file.name">
						{{ file.name }}
					</div>
					<div class="text-tiny text-tertiary-foreground" :title="file.size">
						{{ parseFloat(file.size / 1024).toFixed(2) }} KB
					</div>
				</div>
				<el-button
					type="info"
					text
					circle
					size="large"
					:icon="IconDelete"
					@click="handleRemove(file)"
				/>
			</div>
			<el-progress :show-text="false" :percentage="Number(file.percentage)" />
		</template>
	</el-upload>
</template>

<script lang="ts" setup>
import { h, ref, shallowRef } from 'vue';
import type { UploadFile, UploadProps, UploadUserFile } from 'element-plus';

const IconUpload = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined', innerHTML: 'upload_file' });
	},
});
const IconDelete = shallowRef({
	render() {
		return h('span', { class: 'material-icons', innerHTML: 'delete_outline' });
	},
});

// const disabled = ref(false)
const fileList = ref<UploadUserFile[]>([]);
let showFileList = ref(false);
const handleRemove = (file: UploadFile) => {
	fileList.value.splice(fileList.value.indexOf(file), 1);
	handleChange(file, fileList.value as any);
};
const handleChange: UploadProps['onChange'] = (file: UploadFile, fileList: UploadUserFile[]) => {
	if (fileList.length > 0) {
		showFileList.value = true;
	} else {
		showFileList.value = false;
	}
};
</script>
