<template>
	<h1 class="text-title-page">Cascader</h1>

	<article>
		<p class="text-body mt-4">
			If the options have a clear hierarchical structure, Cascader can be used to view and select
			them.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<cascader-basic />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Display only the last level</h3>
	<article>
		<p class="text-body mt-4">The input can display only the last level instead of all levels.</p>
	</article>
	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<cascader-last />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Multiple Selection</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<cascader-multiple />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Select any level of options</h3>
	<article>
		<p class="text-body mt-4">
			In single selection, only the leaf nodes can be checked, and in multiple selection, check
			parent nodes will lead to leaf nodes be checked eventually. When enable this feature, it can
			make parent and child nodes unlinked and you can select any level of options.
		</p>
	</article>
	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<cascader-any />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Filterable</h3>
	<article>
		<p class="text-body mt-4">Search and select options with a keyword.</p>
	</article>
	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<cascader-filterable />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import CascaderBasic from './basic.vue';
import CascaderLast from './last-level.vue';
import CascaderMultiple from './multiple.vue';
import CascaderAny from './any.vue';
import CascaderFilterable from './filterable.vue';
</script>
