<template>
	<div @keyup.enter="search">
		<div class="flex justify-between items-center">
			<u-heading :size="'text-[28px]'" :titlename="'Carriers'" />
			<el-button class="h-[47px]" type="primary" @click="showPage">+ Add New</el-button>
		</div>
		<!-- 搜索表单 -->
		<div class="search-form rounded-lg p-4 mt-8 mb-4">
			<p class="text-gray-300 text-xs mb-3">SEARCH BY</p>
			<!-- 检索项 -->
			<div class="search-form-content">
				<el-input v-model="searchData.username" placeholder="Name" size="large"></el-input>
				<el-select
					v-model="searchData.Carrier"
					class="w-full"
					size="large"
					placeholder="Carrier"
					filterable
					clearable
					@change="search"
				>
					<el-option
						v-for="(item, index) in getOptions('carrierServiceCode')"
						:key="index"
						:value="item.label"
						:label="item.label"
					/>
				</el-select>
				<el-date-picker
					v-model="searchData.promotionPeriodTime"
					size="default"
					clearable
					type="daterange"
					start-placeholder="From"
					end-placeholder="To"
					value-format="YYYY-MM-DDTHH:mm:ss.SSS"
				/>
				<!-- 搜索按钮 -->
				<el-button @click="search">
					<icon-search class="w-[18px]" />
				</el-button>
			</div>
		</div>
		<!-- 表格 -->
		<div class="table-container show-pagination">
			<el-table v-loading="loading" :data="tableData" border class="mt-3" max-height="440px">
				<el-table-column prop="Id" label="ID"  />
				<el-table-column prop="companyName" label="Company Name" />
				<el-table-column prop="Carrier" label="Carrier" width="180" />
				<el-table-column prop="AccountNumber" label="Account Number" />
				<el-table-column prop="Status" label="Status" />
				<el-table-column prop="ApiClientId" label="Api Client ID" />
				<el-table-column label="ACTION" align="right" fixed="right">
					<template #default="{ row }">
						<el-text
							class="text-purple-300 text-sm leading-5 cursor-pointer"
							@click="showPage($event, true, row)"
						>
							EDIT
						</el-text>
						<el-divider direction="vertical" />
						<el-text class="text-red-400 text-sm leading-5 cursor-pointer" @click="deleteRow(row)">
							DELETE
						</el-text>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<div class="pagination-wrap">
				<u-pagination
					v-model:page="currentPage"
					v-model:limit="pageSize"
					v-model:slice-list="tableData"
					:all-list="allDatas"
					:total="totalCount"
					layout-name="full"
				/>
			</div>
		</div>

		<div class="my-6">
			<u-search-by>
				<u-heading :size="'text-[28px]'" :titlename="'u-table pro'" />
			</u-search-by>
		</div>
		<u-table
			tool-button
			:columns="columns"
			:data="carrierListData"
			:request-auto="false"
			:request-api="() => void 0"
			row-key="Id"
		>
			<template #expand="scope">
				<span>{{ scope.row.AccountId }}</span>
			</template>
			<template #tableHeader="scope">
				{{ scope.Status }}
				<el-button type="success" :disabled="!scope.isSelected">操作</el-button>
				<el-button @click="handleMessage">全局信息</el-button>
			</template>
		</u-table>
	</div>
</template>

<script setup lang="ts">
import { ElMessage, ElMessageBox } from 'element-plus';
import { reactive, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

// ProTable
import UTable from '@components/global/u-table/index.vue';
import { columns } from './protable.ts';
function handleMessage() {
	message('测试全局message', {
		type: 'warning',
	});
}
// ProTable

import UHeading from '@components/global/u-heading/index.vue';
import USearchBy from '@components/global/u-wrapper/SearchBy.vue';
import UPagination from '@components/global/u-pagination/index.vue';
import IconSearch from '@assets/svg/global/Search.svg';

import { getOptions } from '@utils/selectData';
import carrierListData from './carrierListData.json';

const searchData = reactive<any>({});
let loading = ref(true);
let allDatas = ref([] as any); // 返回的所有列表数据
let tableData = ref([] as any); // 当前展示的列表数据
// <-------------分页参数S
let totalCount = ref<any>(0);
let currentPage = ref<any>(1);
let pageSize = ref<number>(10);
// <-------------分页参数E

// 跳转编辑/新增页面
const router = useRouter();
const showPage = (_e: any, isEdit: boolean = false, item: any) => {
	router.push({
		path: `/ui-design/demo/${isEdit ? `edit/${item.id}` : 'add'}`,
		query: item ? { Carrier: item.name, AccountNumber: item.scac } : {},
	});
};

// 搜索事件
const search = () => {
	currentPage.value = 1;
	getTableData();
};

// 获取列表数据
const getTableData = () => {
	loading.value = true;
	setTimeout(() => {
		try {
			allDatas.value = carrierListData;
			totalCount.value = allDatas.value.length;
			loading.value = false;
		} catch (error) {
			loading.value = false;
		}
	}, 500);
};

// 删除
const deleteRow = (val: any) => {
	ElMessageBox.confirm(`Do you want to delete this row ?`, 'Delete Confirm', {
		confirmButtonText: 'OK',
		cancelButtonText: 'Cancel',
		type: 'warning',
	})
		.then(() => {
			const carrierIdx = tableData.value.findIndex((v: any) => v.id === val.id);
			tableData.value.splice(carrierIdx, 1);
			ElMessage.success('Delete completed');
		})
		.catch(() => {});
};

// 初始化
onMounted(async () => {
	getTableData();
});
</script>
