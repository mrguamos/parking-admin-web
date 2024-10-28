<template>
	<el-tabs v-model="activeName" type="card" @tab-click="handleClick">
		<el-tab-pane name="first">
			<template #label>
				<el-icon><icon-map /></el-icon>
				<span>User</span>
			</template>
			User
		</el-tab-pane>
		<el-tab-pane label="Config" name="second">
			<template #label>
				<el-icon><icon-table /></el-icon>
				<span>Config</span>
			</template>
			Config
		</el-tab-pane>
		<el-tab-pane label="Role" name="third">Role</el-tab-pane>
		<el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
	</el-tabs>
</template>

<script lang="ts" setup>
import IconTable from '@assets/svg/global/Table.svg';
import IconMap from '@assets/svg/global/Map.svg';

import { ref } from 'vue';
import type { TabsPaneContext } from 'element-plus';

const activeName = ref('first');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const handleClick = (tab: TabsPaneContext, event: Event) => {
	// console.log(tab, event)
};
</script>
