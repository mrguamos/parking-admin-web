<template>
	<h1 class="text-title-page">Dialog</h1>

	<article>
		<p class="text-body mt-4">
			Dialog UI components are essential elements used to engage users in focused interactions or
			alerts within an interface. These components typically appear as popup windows or overlays,
			often with a dimmed background to draw the user's attention. Dialogs are versatile and serve
			various purposes, such as gathering user input, displaying critical information, or confirming
			actions. They play a crucial role in improving user experience by providing clear and
			context-specific interactions. Designers can tailor the appearance and behavior of dialog
			components to match the interface's overall style and functionality, ensuring a seamless and
			user-friendly way to handle specific tasks or convey important messages.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<dialog-default />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Centered content</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<dialog-center />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Draggable Dialog</h3>
	<p class="text-body mt-1">Try to drag the "header" part.</p>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<dialog-draggable />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import DialogDefault from './default.vue';
import DialogCenter from './center.vue';
import DialogDraggable from './draggable.vue';
</script>
