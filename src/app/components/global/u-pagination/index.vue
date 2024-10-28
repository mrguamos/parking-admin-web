<!--
 * @Author: zhanghan
 * @Date: 2021-06-01 09:26:44
 * @LastEditors: RudderZhang ygwd000@gmail.com
 * @LastEditTime: 2024-03-15 11:44:00
 * @Descripttion: 分页组件
-->
<template>
	<el-pagination
		v-model:current-page="page"
		v-model:page-size="limit"
		:page-sizes="pageSizes"
		:pager-count="5"
		:total="total"
		:layout="getLayoutName(layoutName)"
		:class="`is-` + layoutName"
		@current-change="handleCurrentChange"
	>
		<div v-if="layoutName == 'mini'" class="flex w-full items-center">
			<span class="text-tiny flex flex-auto justify-center">
				Page {{ page }} of {{ total / limit }}
			</span>
		</div>
		<div v-else-if="layoutName == 'arrow'">
			<el-button
				v-model:disabled="prevDisabled"
				v-model:aria-disabled="prevDisabled"
				text
				class="btn-prev"
				:icon="IconArrowBack"
				aria-label="Previous"
				@click="prev()"
			>
				Previous
			</el-button>
			<el-button
				v-model:disabled="nextDisabled"
				v-model:aria-disabled="nextDisabled"
				text
				class="btn-next"
				aria-label="Next"
				@click="next()"
			>
				Next
				<el-icon class="el-icon--right"><icon-arrow-forward /></el-icon>
			</el-button>
		</div>
		<div v-else class="flex w-full items-center">
			<span class="el-pagination__total is-first">{{ total }} Results</span>
			<span class="el-pagination__sizes">
				<span class="el-pagination__label">Show:</span>
				<el-select v-model="limit" @change="handleSizeChange">
					<el-option v-for="(item, index) in pageSizes" :key="index" :label="item" :value="item" />
				</el-select>
			</span>
		</div>
	</el-pagination>
</template>

<script setup lang="ts">
import IconArrowBack from '@assets/svg/global/ArrowBack.svg';
import IconArrowForward from '@assets/svg/global/ArrowForward.svg';


import { computed, nextTick, watchEffect, toRefs } from 'vue';
import type { PaginationData } from './types.d.ts';
import { slice } from 'lodash-es';

const isAbsent = (v: unknown): v is undefined => typeof v !== 'number';

const props = defineProps({
	total: {
		required: true,
		type: Number,
		default: 0,
	},
	page: {
		type: Number,
		default: 1,
	},
	limit: {
		type: Number,
		default: 10,
	},
	pageSizes: {
		type: Array as () => number[],
		default() {
			return [10, 20, 50, 100, 300, 500, 1000];
		},
	},
	layoutName: {
		type: String,
		default: 'full',
	},
	background: {
		type: Boolean,
		default: true,
	},
	hidden: {
		type: Boolean,
		default: false,
	},
	// 分片列表
	sliceList: {
		type: Array,
		default: () => [],
	},
	// 所有列表数据
	allList: {
		type: Array,
		default: () => [],
	},
	// 是否初始化触发pagination事件
	initPagination: {
		type: Boolean,
		default: false,
	},
});

// layout types of pagination, includes: full(defautl), mini, arrow
function getLayoutName(ln: string) {
	switch (ln) {
		case 'mini':
			return 'prev, slot, next';
		case 'arrow':
			return 'slot, pager';
		default:
			return 'slot, prev, pager, next';
	}
}

const emit = defineEmits(['update:page', 'update:limit', 'update:sliceList', 'pagination']);

const page = computed({
	get() {
		return props.page;
	},
	set(val) {
		emit('update:page', val);
	},
});

const limit = computed({
	get() {
		return props.limit;
	},
	set(val) {
		emit('update:limit', val);
	},
});

const sliceList = computed({
	get() {
		return props.sliceList;
	},
	set(val) {
		emit('update:sliceList', val);
	},
});

// 初始化列表切片起始坐标
let start = computed(() => {
	return (page.value - 1) * limit.value;
});
let end = computed(() => {
	const val = (limit.value * page.value > props.total ? props.total : limit.value * page.value) - 1;
	return val || 0;
});

// 判断是否触发分页事件初始化
props.initPagination && handleCurrentChange(1);

// 监听列表数据的初始化传入及页码的变动，进行分片处理
const { allList } = toRefs(props);
watchEffect(() => {
	sliceList.value = slice(allList.value, start.value, Number(end.value) + 1) || [];
});

// 分页大小改变
function handleSizeChange(val: number) {
	// 更新分页大小
	limit.value = val;
	// 初始化分页数触发分页数点击
	page.value = 1;
	nextTick(() => {
		handleCurrentChange(page.value);
	});
}

// get page count
const pageCountBridge = computed<number>(() => {
	let pageCount = 0;
	if (!isAbsent(props.pageCount)) {
		pageCount = props.pageCount;
	} else if (!isAbsent(props.total)) {
		pageCount = Math.max(1, Math.ceil(props.total / limit.value));
	}
	return pageCount;
});

// disable prev/next button
const prevDisabled = computed<number>(() => {
	return page.value <= 1 ? true : false;
});
const nextDisabled = computed<number>(() => {
	return page.value >= pageCountBridge.value ? true : false;
});
function prev() {
	if (props.disabled) return;
	page.value -= 1;
	nextTick(() => {
		handleCurrentChange(page.value);
	});
}
function next() {
	if (props.disabled) return;
	page.value += 1;
	nextTick(() => {
		handleCurrentChange(page.value);
	});
}

// 分页数改变
function handleCurrentChange(val: number) {
	// 更新分页数
	page.value = val;
	nextTick(() => {
		emit('pagination', {
			page: val,
			limit: limit.value,
			start: start.value,
			end: end.value,
			sliceList: sliceList.value,
		} as PaginationData);
	});
}
</script>
