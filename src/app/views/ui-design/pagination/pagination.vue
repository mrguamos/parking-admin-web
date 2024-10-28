<template>
	<h1 class="text-title-page">Pagination</h1>

	<article>
		<p class="text-body mt-4">
			If you have too much data to display in one page, use pagination.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Full elements</h2>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<u-pagination
			v-model:page="currentPage"
			v-model:limit="pageSize"
			v-model:slice-list="tableData"
			:all-list="allDatas"
			:total="totalCount"
			layout-name="full"
		/>
	</div>

	<h3 class="text-subtitle mt-8">Minimum elements</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<u-pagination
			v-model:page="currentPage"
			v-model:limit="pageSize"
			v-model:slice-list="tableData"
			:all-list="allDatas"
			:total="totalCount"
			layout-name="mini"
		/>
	</div>

	<h3 class="text-subtitle mt-8">Customize arrow</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<u-pagination
			v-model:page="currentPage"
			v-model:limit="pageSize"
			v-model:slice-list="tableData"
			:all-list="allDatas"
			:total="totalCount"
			layout-name="arrow"
		/>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import uPagination from '@components/global/u-pagination/index.vue';

let allDatas = ref([] as any);
let tableData = ref([] as any);
let totalCount = ref<any>(200);
let currentPage = ref<any>(1);
let pageSize = ref<number>(10);
</script>
