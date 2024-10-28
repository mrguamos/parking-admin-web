<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<el-sub-menu v-if="hasChildren" :index="route.path">
		<template #title>
			<el-icon v-if="route?.meta?.icon" v-html="route.meta.icon"></el-icon>
			<span>{{ t(route.meta.titleKey) }}</span>
		</template>
		<menu-item v-for="(child, index) in route.children" :key="index" :route="child" />
	</el-sub-menu>
	<el-menu-item v-else-if="!route.meta?.hidden" :index="route.path">
		<el-icon v-if="route?.meta?.icon" v-html="route.meta.icon"></el-icon>
		<span>{{ t(route.meta.titleKey) }}</span>
	</el-menu-item>
</template>

<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

const props = defineProps({
	route: {
		type: Object,
		required: true,
	},
});

const hasChildren = computed(() => {
	return props.route?.children?.length > 0;
});
</script>
