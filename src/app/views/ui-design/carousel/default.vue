<template>
	<el-carousel :interval="5000" arrow="always" height="450px" indicator-position="outside">
		<el-carousel-item
			v-for="item in itemList"
			:key="item"
			:title="item.name"
			:style="{ 'background-image': 'url(' + item.url + ')' }"
			class="bg-no-repeat bg-center bg-cover"
		/>
	</el-carousel>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const itemList = ref([
	{
		name: 'Image title 1',
		url: 'https://assets-global.website-files.com/64b83df5325c7e3eef948c48/65fc98a7f0cb054cced2f6ca_unis-hero-9mb-scale-poster-00001.jpg',
	},
	{
		name: 'Image title 2',
		url: 'https://assets-global.website-files.com/64b83df5325c7e3eef948c48/65456f207885f53c0181b6a8_Frame%2010.jpg',
	},
	{
		name: 'Image title 3',
		url: 'https://assets-global.website-files.com/64b83df5325c7e3eef948c48/653af0cbf5cdcc0137f9a7ed_unis-truck.jpg',
	},
]);
</script>
