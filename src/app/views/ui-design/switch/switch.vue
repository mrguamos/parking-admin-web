<template>
	<h1 class="text-title-page">Switch / Toggle</h1>

	<article>
		<p class="text-body mt-4">
			A toggle, also known as a toggle button or toggle switch, is a UI component used to switch
			between two or more mutually exclusive options or states. Unlike a switch that typically
			represents an "on" or "off" state, a toggle can have more than two states and allows users to
			select a desired option from the available choices.
		</p>
		<p class="text-body mt-4">
			They provide a compact and intuitive interface for toggling between different choices,
			enabling users to easily switch between the available options and select the desired state or
			setting.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<basic-switch />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Disalbed</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<switch-disabled />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Custom action icon</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<switch-with-icon />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import BasicSwitch from './basic.vue';
import SwitchDisabled from './disabled.vue';
import SwitchWithIcon from './with-icon.vue';
</script>
