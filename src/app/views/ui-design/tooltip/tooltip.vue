<template>
	<h1 class="text-title-page">Tooltip</h1>

	<article>
		<p class="text-body mt-4">
			Tooltips are small, transient UI components that appear near specific webpage or application
			elements when users hover over or interact with them. They offer brief explanations, hints, or
			supplementary details, enhancing the user experience by providing context at the point of
			interaction. Large tooltips are extended versions offering more detailed information when
			triggered, useful for enhancing understanding or decision-making without cluttering the
			interface. They're versatile and can be used for product details, in-depth explanations, or
			supplementary information.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tooltip-basic />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">White background</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<tooltip-light />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import TooltipBasic from './basic.vue';
import TooltipLight from './light.vue';
</script>
