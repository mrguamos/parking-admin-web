<template>
	<h1 class="text-title-page">Carousel</h1>

	<article>
		<p class="text-body mt-4">Loop a series of images or texts in a limited space.</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<carousel-default />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Card mode</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<carousel-card />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import CarouselDefault from './default.vue';
import CarouselCard from './card-mode.vue';
</script>
