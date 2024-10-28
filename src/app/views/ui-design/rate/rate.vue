<template>
	<h1 class="text-title-page">Rate</h1>

	<article>
		<p class="text-body mt-4">
			A rating component in UI/UX design is used to collect and display user feedback or opinions on
			a particular item, product, service, or content.
		</p>
		<p class="text-body mt-4">
			It allows users to provide a quantitative or qualitative assessment, typically represented by
			a numerical value or a set of visual symbols, to express their level of satisfaction or
			evaluation.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Stars only</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<rate-stars-only />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Stars + Rating</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<rate-stars-rating />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Stars + Reviews</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<rate-stars-reviews />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import RateStarsOnly from './stars-only.vue';
import RateStarsRating from './stars-rating.vue';
import RateStarsReviews from './stars-reviews.vue';
</script>
