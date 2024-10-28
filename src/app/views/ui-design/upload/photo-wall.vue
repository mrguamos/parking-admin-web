<template>
	<el-upload
		v-model:file-list="fileList"
		action="#"
		multiple
		list-type="picture-card"
		:auto-upload="false"
		:on-preview="handlePictureCardPreview"
	>
		<el-icon><span class="material-icons">add</span></el-icon>
	</el-upload>
	<el-dialog v-model="dialogVisible">
		<img w-full :src="dialogImageUrl" alt="Preview Image" />
	</el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import type { UploadProps, UploadUserFile } from 'element-plus';

const fileList = ref<UploadUserFile[]>([]);
const dialogImageUrl = ref('');
const dialogVisible = ref(false);
const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
	dialogImageUrl.value = uploadFile.url!;
	dialogVisible.value = true;
};
</script>
