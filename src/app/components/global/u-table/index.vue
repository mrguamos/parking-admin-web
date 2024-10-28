<template>
	<!-- 查询表单 -->
	<SearchForm
		v-show="isShowSearch"
		:search="_search"
		:reset="_reset"
		:columns="searchColumns"
		:search-param="state.queryForm"
		:is-search="isSearch"
		:is-reset="isReset"
	/>
	<!-- 表格主体 -->
	<div class="card table-main" :class="tableHeaderClass">
		<!-- 表格头部 操作按钮 -->
		<div
			v-if="(showTableHeader === 'isSelected' && isSelected) || showTableHeader === 'default'"
			class="table-header p-2 flex"
			:class="
				toolButton
					? 'justify-between'
					: tableHeaderPosition === 'left'
						? 'justify-normal'
						: 'justify-end'
			"
		>
			<div class="header-button-lf">
				<slot
					name="tableHeader"
					:selected-list="selectedList"
					:selected-list-ids="selectedListIds"
					:is-selected="isSelected"
				/>
			</div>
			<div v-if="toolButton" class="header-button-ri">
				<slot name="toolButton">
					<el-button
						v-if="showToolButton('refresh')"
						:icon="Refresh"
						circle
						@click="getTableList"
					/>
					<el-button
						v-if="showToolButton('setting') && columns.length"
						:icon="Operation"
						circle
						@click="openColSetting"
					/>
					<el-button
						v-if="showToolButton('search') && searchColumns?.length"
						:icon="Search"
						circle
						@click="isShowSearch = !isShowSearch"
					/>
				</slot>
			</div>
		</div>
		<!-- 表格主体 -->
		<div class="wrapper-border-table flow-shadow">
			<el-table
				:id="uuid"
				ref="tableRef"
				v-bind="$attrs"
				v-loading="state.loading"
				:data="processTableData"
				:border="border"
				:row-key="rowKey"
				@selection-change="selectionChangeHandle"
			>
				<!-- 默认插槽 -->
				<slot />
				<template v-for="item in tableColumns" :key="item">
					<!-- selection || radio || index || expand || sort -->
					<el-table-column
						v-if="item.type && columnTypes.includes(item.type)"
						v-bind="item"
						:align="item.align ?? 'center'"
						:reserve-selection="item.type == 'selection'"
					>
						<template #default="scope">
							<!-- expand -->
							<template v-if="item.type == 'expand'">
								<component :is="item.render" v-bind="scope" v-if="item.render" />
								<slot v-else :name="item.type" v-bind="scope" />
							</template>
							<!-- radio -->
							<el-radio v-if="item.type == 'radio'" v-model="radio" :label="scope.row[rowKey]">
								<i></i>
							</el-radio>
							<!-- sort -->
							<el-tag v-if="item.type == 'sort'" class="move">
								<el-icon>
									<DCaret />
								</el-icon>
							</el-tag>
						</template>
					</el-table-column>
					<!-- other -->
					<TableColumn v-else :column="item">
						<template v-for="slot in Object.keys($slots)" #[slot]="scope">
							<slot :name="slot" v-bind="scope" />
						</template>
					</TableColumn>
				</template>
				<!-- 插入表格最后一行之后的插槽 -->
				<template #append>
					<slot name="append" />
				</template>
				<!-- 无数据 -->
				<template #empty>
					<div class="table-empty w-full flex items-center py-10 justify-center flex-col">
						<slot name="empty">
							<div>no data</div>
						</slot>
					</div>
				</template>
			</el-table>
			<!-- 分页组件 -->
			<slot name="pagination">
				<Pagination
					v-if="isPage"
					:pageable="state.pagination"
					:handle-size-change="handleSizeChange"
					:handle-current-change="handleCurrentChange"
				/>
			</slot>
		</div>
	</div>
	<!-- 列设置 -->
	<ColSetting v-if="toolButton" ref="colRef" v-model:col-setting="colSetting" />
</template>

<script setup lang="ts">
import { ref, watch, provide, onMounted, unref, computed, reactive } from 'vue';
import { ElTable } from 'element-plus';
import { useSelection } from '@/hooks/useSelection';
import { ColumnProps, TypeProps } from '@components/global/u-table/interface';
import { Refresh, Operation, DCaret, Search } from '@element-plus/icons-vue';
import { generateUUID, handleProp } from '@/utils/utils.ts';
import SearchForm from '@components/global/u-search/index.vue';
import Pagination from './components/Pagination.vue';
import ColSetting from './components/ColSetting.vue';
import TableColumn from './components/TableColumn.vue';
import Sortable from 'sortablejs';

export interface ProTableProps {
	columns: ColumnProps[]; // 列配置项  ==> 必传
	data?: any[]; // 静态 table data 数据，若存在则不会使用 requestApi 返回的 data ==> 非必传
	requestApi?: (params: any) => Promise<any>; // 请求表格数据的 api ==> 非必传
	requestAuto?: boolean; // 是否自动执行请求 api ==> 非必传（默认为true）
	requestError?: (params: any) => void; // 表格 api 请求错误监听 ==> 非必传
	dataCallback?: (data: any) => any; // 返回数据的回调函数，可以对数据进行处理 ==> 非必传
	title?: string; // 表格标题 ==> 非必传
	isPage?: boolean; // 是否需要分页组件 ==> 非必传（默认为true）
	initParam?: any; // 初始化请求参数 ==> 非必传（默认为{}）
	border?: boolean; // 是否带有纵向边框 ==> 非必传（默认为true）
	toolButton?: ('refresh' | 'setting' | 'search')[] | boolean; // 是否显示表格功能按钮 ==> 非必传（默认为true）
	tableHeaderPosition?: 'left' | 'right';
	showTableHeader?: 'default' | 'isSelected';
	tableHeaderClass?: string;
	rowKey?: string; // 行数据的 Key，用来优化 Table 的渲染，当表格数据多选时，所指定的 id ==> 非必传（默认为 id）
	isSearch?: boolean;
	isReset?: boolean;
}

// 接受父组件参数，配置默认值
const props = withDefaults(defineProps<ProTableProps>(), {
	columns: () => [],
	data: () => [],
	requestApi: () => null,
	requestError: () => null,
	dataCallback: () => null,
	title: '',
	requestAuto: true,
	isPage: true,
	initParam: {},
	border: true,
	toolButton: false,
	tableHeaderPosition: 'right',
	showTableHeader: 'default',
	tableHeaderClass: '',
	rowKey: 'id',
	isSearch: true,
	isReset: false,
});

// table 实例
const tableRef = ref<InstanceType<typeof ElTable>>();

// 生成组件唯一id
const uuid = ref('id-' + generateUUID());

// column 列类型
const columnTypes: TypeProps[] = ['selection', 'radio', 'index', 'expand', 'sort'];

// 是否显示搜索模块
const isShowSearch = ref(props.isSearch);

// 控制 ToolButton 显示
const showToolButton = (key: 'refresh' | 'setting' | 'search') => {
	return Array.isArray(props.toolButton) ? props.toolButton.includes(key) : props.toolButton;
};

// 单选值
const radio = ref('');

// 表格多选 Hooks
const { selectionChange, selectedList, selectedListIds, isSelected } = useSelection(props.rowKey);

const state = reactive({
	loading: true,
	createdIsNeed: false,
	dataList: props.data,
	pageList: props.requestApi,
	queryForm: props.initParam,
	isPage: props.isPage,
	responseCallback: props.dataCallback,
	requestError: props.requestError,
	pagination: {
		currentPage: 1,
		pageSize: 10,
		totalCount: 0,
		pageSizes: [5, 10, 15, 20],
		layout: 'prev, pager, next',
	},
});
const {
	currentChangeHandle: handleCurrentChange,
	getDataList: getTableList,
	sizeChangeHandle: handleSizeChange,
} = useTable(state);
// 清空选中数据列表
const clearSelection = () => tableRef.value!.clearSelection();

// 初始化表格数据 && 拖拽排序
onMounted(() => {
	dragSort();
	props.requestAuto && getTableList();
	state.loading = false;
	props.data && (state.pagination.totalCount = props.data.length);
});

// 处理表格数据
const processTableData = computed(() => {
	if (!props.data) return state.dataList;
	if (!props.isPage) return state.dataList;
	return props.data.slice(
		(state.pagination.currentPage - 1) * state.pagination.pageSize,
		state.pagination.pageSize * state.pagination.currentPage
	);
});

// 监听页面 initParam 改化，重新获取表格数据
watch(() => props.initParam, getTableList, { deep: true });

// 接收 columns 并设置为响应式
const tableColumns = computed<ColumnProps[]>(() => props.columns);

// 扁平化 columns
const flatColumns = computed(() => {
	return flatColumnsFunc(tableColumns.value);
});

// 定义 enumMap 存储 enum 值（避免异步请求无法格式化单元格内容 || 无法填充搜索下拉选择）
const enumMap = ref(new Map<string, { [key: string]: any }[]>());
const setEnumMap = async ({ prop, enum: enumValue }: ColumnProps) => {
	if (!enumValue) return;

	// 如果当前 enumMap 存在相同的值 return
	if (
		enumMap.value.has(prop!) &&
		(typeof enumValue === 'function' || enumMap.value.get(prop!) === enumValue)
	)
		return;

	// 当前 enum 为静态数据，则直接存储到 enumMap
	if (typeof enumValue !== 'function') return enumMap.value.set(prop!, unref(enumValue!));

	// 为了防止接口执行慢，而存储慢，导致重复请求，所以预先存储为[]，接口返回后再二次存储
	enumMap.value.set(prop!, []);

	// 当前 enum 为后台数据需要请求数据，则调用该请求接口，并存储到 enumMap
	const { data } = await enumValue();
	enumMap.value.set(prop!, data);
};

// 注入 enumMap
provide('enumMap', enumMap);

// 扁平化 columns 的方法
const flatColumnsFunc = (columns: ColumnProps[], flatArr: ColumnProps[] = []) => {
	columns.forEach(async (col) => {
		if (col._children?.length) flatArr.push(...flatColumnsFunc(col._children));
		flatArr.push(col);

		// column 添加默认 isShow && isSetting && isFilterEnum 属性值
		col.isShow = col.isShow ?? true;
		col.isSetting = col.isSetting ?? true;
		col.isFilterEnum = col.isFilterEnum ?? true;

		// 设置 enumMap
		await setEnumMap(col);
	});
	return flatArr.filter((item) => !item._children?.length);
};

// 过滤需要搜索的配置项 && 排序
const searchColumns = computed(() => {
	return flatColumns.value
		?.filter((item) => item.search?.el || item.search?.render)
		.sort((a, b) => a.search!.order! - b.search!.order!);
});

// 设置 搜索表单默认排序 && 搜索表单项的默认值
searchColumns.value?.forEach((column, index) => {
	column.search!.order = column.search?.order ?? index + 2;
	const key = column.search?.key ?? handleProp(column.prop!);
	const defaultValue = column.search?.defaultValue;
	if (defaultValue !== undefined && defaultValue !== null) {
		state.queryForm = { ...state.queryForm, [key]: defaultValue };
	}
});

// 列设置 ==> 需要过滤掉不需要设置的列
const colRef = ref();
const colSetting = tableColumns.value!.filter((item) => {
	const { type, prop, isSetting } = item;
	return !columnTypes.includes(type!) && prop !== 'operation' && isSetting;
});
const openColSetting = () => colRef.value.openColSetting();

// 定义 emit 事件
const emit = defineEmits<{
	selectionChange: [rowArr: { [key: string]: any }[]];
	search: [];
	reset: [];
	dragSort: [{ newIndex?: number; oldIndex?: number }];
}>();

function selectionChangeHandle(rowArr: { [key: string]: any }[]) {
	emit('selectionChange', rowArr);
	selectionChange(rowArr);
}

const _search = () => {
	getTableList();
	emit('search');
};

const _reset = () => {
	getTableList(true);
	emit('reset');
};

// 表格拖拽排序
const dragSort = () => {
	const tbody = document.querySelector(`#${uuid.value} tbody`) as HTMLElement;
	Sortable.create(tbody, {
		handle: '.move',
		animation: 300,
		onEnd({ newIndex, oldIndex }) {
			const [removedItem] = processTableData.value.splice(oldIndex!, 1);
			processTableData.value.splice(newIndex!, 0, removedItem);
			emit('dragSort', { newIndex, oldIndex });
		},
	});
};

function toggleSelection(list: any[]) {
	list.forEach((row) => {
		tableRef.value!.toggleRowSelection(row, undefined);
	});
}

// 暴露给父组件的参数和方法 (外部需要什么，都可以从这里暴露出去)
defineExpose({
	element: tableRef,
	tableData: processTableData,
	radio,
	pagination: state.pagination,
	isSelected,
	selectedList,
	selectedListIds,

	// 下面为 function
	toggleSelection,
	getTableList,
	handleSizeChange,
	handleCurrentChange,
	clearSelection,
	enumMap,
});
</script>
