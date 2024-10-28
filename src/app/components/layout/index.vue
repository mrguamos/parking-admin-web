<template>
	<div class="flex flex-row w-full overflow-hidden h-screen">
		<sidebar @click-event="getIsCollapse" />
		<div class="flex-auto overflow-y-auto">
			<navbar></navbar>
			<!-- 页面切换容器 -->
			<router-view v-slot="{ Component }">
				<div class="w-full px-12 pt-8 pb-12">
					<keep-alive>
						<component :is="Component" v-if="$route.meta.keepAlive" :key="$route.path" />
					</keep-alive>
					<component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.path" />
				</div>
			</router-view>
		</div>
	</div>
</template>
<script lang="ts" setup>
import Sidebar from '@components/sidebar-v1/index.vue';
import Navbar from './components/navbar.vue';
import { ref } from 'vue';

let isCollapse = ref(false);

const getIsCollapse = (newIsCollapse: boolean) => {
	isCollapse.value = newIsCollapse;
};
</script>
