<template>
	<div v-if="!item?.meta?.hidden">
		<template v-if="!haveChild">
			<app-link :to="item.path">
				<el-menu-item :index="item.name" :class="[{ 'collapse-item': collapse }]">
					<template #title>
						<component
							:is="item?.meta?.icon"
							v-if="item?.meta?.icon"
							:class="[!collapse ? 'mr-2' : '']"
						></component>
						<span v-if="!collapse" :title="t(item?.meta?.titleKey)">
							{{ t(item?.meta?.titleKey) }}
						</span>
					</template>
				</el-menu-item>
			</app-link>
		</template>

		<el-sub-menu v-else ref="subMenu" :index="item.name">
			<template v-if="item?.meta" #title>
				<component :is="item?.meta?.icon" v-if="item?.meta?.icon" class="mr-2"></component>
				<span v-if="!collapse" :title="t(item?.meta?.titleKey)">{{ t(item?.meta?.titleKey) }}</span>
			</template>

			<sidebar-item
				v-for="child in item.children"
				:key="child.path"
				:is-nest="true"
				:item="child"
				:base-path="child.path"
				class="nest-menu"
			/>
		</el-sub-menu>
	</div>
</template>

<script setup lang="ts">
import AppLink from './link.vue';
import { computed } from 'vue';
import { filter } from 'lodash-es';
import { useI18n } from 'vue-i18n';

const props = defineProps({
	item: {
		type: Object,
		required: true,
	},
	isNest: {
		type: Boolean,
		default: false,
	},
	basePath: {
		type: String,
		default: '',
	},
	collapse: {
		type: Boolean,
		default: false,
	},
});

const { t } = useI18n();

const haveChild = computed(() => {
	const filterChildren =
		!props.collapse &&
		props.item.children &&
		filter(props.item.children, (item: any) => {
			if (!item?.meta?.hidden) {
				return item;
			}
		}).length > 0;
	return filterChildren;
});
</script>

<!-- <style lang="scss" scoped>
.collapse-item {
	padding: 0 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
}

</style> -->
