<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<div
		:class="[
			isCollapse ? 'w-[68px]' : 'w-[256px]',
			'unis-sidebar transition-all flex flex-col flex-shrink-0 h-full py-6 bg-white',
		]"
	>
		<div :class="[isCollapse ? 'flex-col px-3' : 'pl-6 pr-3', 'flex items-center justify-between']">
			<div class="logo-top flex items-center gap-1 text-tiny-uppercase">
				<logo class="text-primary-foreground"></logo>
				<div v-if="!isCollapse" class="logo-info">
					UNIS
					<br />
					Design System
				</div>
			</div>
			<div>
				<template v-if="!isCollapse">
					<el-button
						type="info"
						class="rounded-none"
						:icon="IconSidebarCollapse"
						text
						circle
						@click="collapseEvent"
					></el-button>
				</template>
				<template v-else>
					<el-button
						type="info"
						class="rounded-none"
						:icon="IconSidebarExpand"
						text
						circle
						@click="collapseEvent"
					></el-button>
				</template>
			</div>
		</div>
		<el-scrollbar :class="[{ isCollapse: isCollapse }, 'mt-5 px-3 flex-auto']">
			<el-menu
				:default-active="defaultActive"
				:collapse="isCollapse"
				unique-opened="true"
				collapse-transition="false"
				router="true"
				mode="vertical"
			>
				<menu-item v-for="(route, index) in navigation" :key="index" :route="route" />
			</el-menu>
		</el-scrollbar>
	</div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue';
import { router, navigation } from '@/routers/index.ts';
import MenuItem from './components/menu-item.vue';

import Logo from '@assets/svg/layout/logo.svg';
import IconSidebarCollapse from '@assets/svg/layout/SidebarCollapse.svg';
import IconSidebarExpand from '@assets/svg/layout/SidebarExpand.svg';

let isCollapse = ref(false);
const emit = defineEmits(['clickEvent']);

const collapseEvent = () => {
	isCollapse.value = !isCollapse.value;
	emit('clickEvent', isCollapse.value);
};

const defaultActive = computed(() => {
	// return router.currentRoute.value.name || 'Home';
	return router.currentRoute.value.path || 'Home';
});
</script>
