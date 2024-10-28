<template>
	<h1 class="text-title-page">Slider</h1>

	<article>
		<p class="text-body mt-4">
			A slider is a UI component that allows users to select a value within a specified range by
			dragging a handle along a track.
		</p>
		<p class="text-body mt-4">
			It provides a visual representation of a continuous range of values and allows users to
			interactively set a value within that range.
		</p>
		<p class="text-body mt-4">
			Sliders are commonly used in various applications and interfaces where users need to select
			values within a defined range. They are particularly useful for settings related to volume
			control, brightness adjustment, price range selection, or any scenario where continuous value
			selection is required. Sliders provide an intuitive and interactive way for users to specify
			their desired value, making it easier to control and fine-tune parameters or settings within
			an application.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<slider />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Disalbed</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<slider-disabled />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Range selection</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<slider-range />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import Slider from './basic.vue';
import SliderDisabled from './disabled.vue';
import SliderRange from './range.vue';
</script>
