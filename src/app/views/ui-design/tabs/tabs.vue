<template>
	<h1 class="text-title-page">Tabs</h1>

	<article>
		<p class="text-body mt-4">
			A tablist is a UI component that organizes related content into separate tabs, allowing users
			to switch between them to access different sections or views within an interface. It provides
			a convenient and structured way to present multiple sets of content while conserving space and
			improving navigation.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Tab position</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tab-position />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">No divider</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tab-no-divider />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Tab card</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tab-card />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Folder style</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tab-folder />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import TabPosition from './position.vue';
import TabNoDivider from './no-divider.vue';
import TabCard from './card-style.vue';
import TabFolder from './folder-style.vue';
</script>
