<template>
	<h1 class="text-title-page">Upload</h1>

	<article>
		<p class="text-body mt-4">
			An uploader UI component allows users to easily upload files or content to a website or
			application. It typically consists of a designated area or button that users can interact with
			to select and upload files from their devices. Uploaders simplify the process of adding
			content, enhancing user convenience. They are versatile and can be used in various scenarios,
			such as uploading images, documents, or media files.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<upload-text-list />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Photo wall</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<upload-photo-wall />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import UploadTextList from './text-list.vue';
import UploadPhotoWall from './photo-wall.vue';
</script>
