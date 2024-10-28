<template>
	<h1 class="text-title-page">Badge</h1>

	<article>
		<p class="text-body mt-4">
			A badge UI component in a UI/UX design system serves as a visual tool to represent additional
			information, status, or context within a digital platform.
		</p>
		<p class="text-body mt-4">
			Appearing as a small graphical label or tag, it can be attached to various UI elements like
			buttons, icons, or text. These badges draw attention to specific items, highlight details,
			offer status updates, or categorize content. Notably, a notification badge alerts users to new
			or unread messages, commonly seen in messaging apps, social media, and email clients.
		</p>
		<p class="text-body mt-4">
			Meanwhile, a presence badge indicates a user's online or active status, providing real-time
			information about their current availability.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic Usage</h2>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="flex flex-wrap gap-10">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar :size="size" :icon="IconUser" />
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar shape="square" :size="size" :icon="IconUser" />
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar :size="size" :src="imgUrl" />
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar shape="square" :size="size" :src="imgUrl" />
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar :size="size">A</el-avatar>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-avatar shape="square" :size="size">A</el-avatar>
			</div>
		</div>
	</div>

	<h3 class="text-subtitle mt-8">With Badge</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="flex flex-wrap gap-10">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge is-dot>
					<el-avatar :size="size" :icon="IconUser" />
				</el-badge>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge is-dot>
					<el-avatar shape="square" :size="size" :icon="IconUser" />
				</el-badge>
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge :value="2">
					<el-avatar :size="size" :src="imgUrl" />
				</el-badge>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge :value="99">
					<el-avatar shape="square" :size="size" :src="imgUrl" />
				</el-badge>
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<div class="el-badge is-circle">
					<el-avatar :size="size">A</el-avatar>
					<sup class="el-badge__content el-badge__content--info is-fixed">
						<el-icon><icon-minus /></el-icon>
					</sup>
				</div>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<div class="el-badge is-circle">
					<el-avatar shape="square" :size="size">A</el-avatar>
					<sup class="el-badge__content el-badge__content--success is-fixed">
						<el-icon><icon-check /></el-icon>
					</sup>
				</div>
			</div>
		</div>
	</div>

	<h3 class="text-subtitle mt-8">Themed</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<div class="flex flex-wrap gap-10">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge is-dot>
					<el-avatar :size="size" :icon="IconUser" class="is-themed" />
				</el-badge>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge is-dot>
					<el-avatar shape="square" :size="size" :icon="IconUser" class="is-themed" />
				</el-badge>
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge :value="2">
					<el-avatar :size="size" :src="imgUrl" class="is-themed" />
				</el-badge>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<el-badge :value="99">
					<el-avatar shape="square" :size="size" :src="imgUrl" class="is-themed" />
				</el-badge>
			</div>
		</div>
		<div class="flex flex-wrap gap-10 mt-4">
			<div v-for="size in sizeList" :key="size" class="block">
				<div class="el-badge is-circle">
					<el-avatar :size="size" class="is-themed">A</el-avatar>
					<sup class="el-badge__content el-badge__content--info is-fixed">
						<el-icon><icon-minus /></el-icon>
					</sup>
				</div>
			</div>
			<div v-for="size in sizeList" :key="size" class="block">
				<div class="el-badge is-circle">
					<el-avatar shape="square" :size="size" class="is-themed">A</el-avatar>
					<sup class="el-badge__content el-badge__content--success is-fixed">
						<el-icon><icon-check /></el-icon>
					</sup>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconMinus from '@assets/svg/global/Minus.svg';
import IconCheck from '@assets/svg/global/Check.svg';
import IconUser from '@assets/svg/global/User.svg';

import { reactive, toRefs } from 'vue';

const state = reactive({
	imgUrl:
		'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	sizeList: ['small', '', 'large', 'xlarge'] as const,
});

const { imgUrl, sizeList } = toRefs(state);
</script>
