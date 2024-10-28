<template>
	<h1 class="text-title-page">Autocomplete</h1>

	<article>
		<p class="text-body mt-4">Get some recommended tips based on the current input.</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<autocomplete-basic />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import autocompleteBasic from './basic.vue';
</script>
