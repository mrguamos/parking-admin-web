<template>
	<h1 class="text-title-page">Table</h1>

	<article>
		<p class="text-body mt-4">
			A table is a fundamental UI component used to organize and present tabular data in a
			structured and visually appealing manner. Tables provide an efficient way to display
			information in rows and columns, enabling users to compare and analyze data easily.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Table with border</h2>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="table-container">
			<el-table :data="tableData1" border header-dragend style="width: 100%">
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
				<el-table-column prop="date" label="Date" width="180" />
			</el-table>
		</div>
	</div>

	<h3 class="text-subtitle mt-8">Frameless table</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="table-container">
			<el-table :data="tableData1" header-dragend style="width: 100%">
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
				<el-table-column prop="date" label="Date" width="180" />
			</el-table>
		</div>
	</div>

	<h3 class="text-subtitle mt-8">Multiple select</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="table-container">
			<el-table :data="tableData1" border header-dragend style="width: 100%">
				<el-table-column type="selection" width="55" />
				<el-table-column prop="name" label="Name" width="180" />
				<el-table-column prop="address" label="Address" />
				<el-table-column prop="date" label="Date" width="180" />
			</el-table>
		</div>
	</div>

	<h3 class="text-subtitle mt-8">Expandable Table</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-table :data="tableData2" border header-dragend style="width: 100%">
			<el-table-column type="expand">
				<template #default="props">
					<div class="mx-4">
						<el-table :data="props.row.family" border>
							<el-table-column label="Name" prop="name" />
							<el-table-column label="State" prop="state" />
							<el-table-column label="City" prop="city" />
							<el-table-column label="Address" prop="address" />
							<el-table-column label="Zip" prop="zip" />
						</el-table>
					</div>
				</template>
			</el-table-column>
			<el-table-column label="Name" prop="name" />
			<el-table-column label="Date" prop="date" />
		</el-table>
	</div>

	<h3 class="text-subtitle mt-8">Table with Pagination</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="table-container show-pagination">
			<el-table
				v-loading="loading"
				:data="tableData"
				border
				header-dragend
				style="width: 100%"
				max-height="64vh"
			>
				<el-table-column prop="Id" label="ID"  />
				<el-table-column prop="companyName" label="Company Name" />
				<el-table-column prop="Carrier" label="Carrier" width="180" />
				<el-table-column prop="AccountNumber" label="Account Number" />
				<el-table-column prop="Status" label="Status" />
				<el-table-column prop="ApiClientId" label="API Client ID" />
			</el-table>
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
	</div>
</template>

<script lang="ts" setup>
import UPagination from '@components/global/u-pagination/index.vue';
import { ref, onMounted } from 'vue';
import carrierListData from './carrierListData.json';

const tableData1 = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
];

const tableData2 = [
	{
		date: '2016-05-03',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-08',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-06',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
	{
		date: '2016-05-07',
		name: 'Tom',
		state: 'California',
		city: 'San Francisco',
		address: '3650 21st St, San Francisco',
		zip: 'CA 94114',
		family: [
			{
				name: 'Jerry',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Spike',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
			{
				name: 'Tyke',
				state: 'California',
				city: 'San Francisco',
				address: '3650 21st St, San Francisco',
				zip: 'CA 94114',
			},
		],
	},
];

let loading = ref(true);
let allDatas = ref([] as any);
let tableData = ref([] as any);
let totalCount = ref<any>(0);
let currentPage = ref<any>(1);
let pageSize = ref<number>(10);

// 获取列表数据
const getTableData = () => {
	loading.value = true;
	setTimeout(() => {
		try {
			const res = carrierListData;
			allDatas.value = res;
			totalCount.value = allDatas.value.length;
			loading.value = false;
		} catch (error) {
			loading.value = false;
		}
	}, 500);
};
onMounted(async () => {
	getTableData();
});
</script>
