<template>
	<h1 class="text-title-page">Menu</h1>

	<article>
		<p class="text-body mt-4">
			A menu is a UI component that presents a list of options or actions to users in a hierarchical
			or flat structure. It allows users to navigate through different sections or perform specific
			actions within an application or website. Menus can be displayed as dropdown menus, context
			menus, or as a dedicated menu bar.
		</p>
		<p class="text-body mt-4">
			Menus are essential components for organizing and presenting a range of options and actions to
			users. They provide a structured and intuitive way for users to access various functionalities
			within an application or website. By grouping related options and providing hierarchical
			navigation, menus enhance the user experience and streamline user interactions.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<menu-basic />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Sidebar</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<menu-sidebar />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import MenuBasic from './basic.vue';
import MenuSidebar from './sidebar.vue';
</script>
