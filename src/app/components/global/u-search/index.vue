<template>
	<div v-if="columns.length" class="card table-search">
		<u-search-by>
			<el-form
				ref="formRef"
				class="flex gap-2 xl:lg:md:flex xs:grid xs:grid-cols-1"
				:model="searchParam"
			>
				<template v-for="(item, index) in columns" :key="index">
					<el-form-item class="w-full" :index="index">
						<template #label>
							<el-space :size="4">
								<span v-if="item.search.showLabel">
									{{ `${item.search?.label ?? item.label}` }}
								</span>
								<el-tooltip
									v-if="item.search?.tooltip"
									effect="dark"
									:content="item.search?.tooltip"
									placement="top"
								>
									<i :class="'iconfont icon-yiwen'"></i>
								</el-tooltip>
							</el-space>
							<span v-if="item.search.showLabel">&nbsp;:</span>
						</template>
						<SearchFormItem :column="item" :search-param="searchParam" />
					</el-form-item>
				</template>
				<div class="operation flex justify-end">
					<el-button :icon="Search" class="search-icon-button" @click="search"></el-button>
					<el-button v-if="isReset" :icon="Delete" class="search-icon-button" @click="reset">
						reset
					</el-button>
				</div>
			</el-form>
		</u-search-by>
	</div>
</template>
<script setup lang="ts">
import { ColumnProps } from '@components/global/u-table/interface';
import { Delete, Search } from '@element-plus/icons-vue';
import SearchFormItem from './components/SearchFormItem.vue';
import USearchBy from '@components/global/u-wrapper/SearchBy.vue';

interface ProTableProps {
	columns?: ColumnProps[]; // 搜索配置列
	searchParam?: { [key: string]: any }; // 搜索参数
	search?: (params: any) => void; // 搜索方法
	reset?: (params: any) => void; // 重置方法
	isSearch?: boolean; // 是否显示搜索按钮
	isReset?: boolean;
	isCollapse?: boolean;
}

// 默认值
withDefaults(defineProps<ProTableProps>(), {
	columns: () => [],
	searchParam: () => ({}),
	isSearch: true,
	isReset: false,
	isCollapse: false,
	search: () => {},
	reset: () => {},
});
</script>
