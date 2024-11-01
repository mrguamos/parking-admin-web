<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
	<div class="unis-sidebar" :class="[isCollapse ? 'unis-sidebar__collapse' : null]">
		<div class="unis-sidebar-head" :class="[isCollapse ? 'unis-sidebar-head__collapse' : null]">
			<div class="logo-top flex items-center text-tiny-uppercase">
				<Logo class="h-10 w-auto" />
			</div>
			<div v-if="!isCollapse" class="logo-info">
					Cubework Parking
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
		<el-scrollbar
			class="unis-sidebar-scrollbar"
			:class="[isCollapse ? 'unis-sidebar-scrollbar__collapse' : null]"
		>
			<el-menu
				:default-active="defaultActive"
				:collapse="isCollapse"
				:unique-opened="true"
				:collapse-transition="false"
				:router="true"
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

import Logo from '@assets/svg/parking-logo.svg';
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

<style lang="scss" scoped>
.unis-sidebar {
	@apply flex flex-col shrink-0 py-6 w-80 h-full;
	transition-property: all;
	transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
	transition-duration: 150ms;
	background-color: var(--bg-secondary);
	&-head {
		@apply flex items-center justify-between pl-6 px-4;
		&__collapse {
			@apply flex-col px-0;
		}
	}
	&-scrollbar {
		@apply flex-auto mt-6 px-4;
		&__collapse {
			@apply px-2.5;
		}
	}
	&__collapse {
		@apply w-16;
	}
}
</style>
