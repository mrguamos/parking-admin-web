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
		<el-row :gutter="40">
			<el-col>
				<div class="flex flex-wrap gap-10">
					<el-badge is-dot>
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="1000" :max="99">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="1">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="2">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge value="New">Text</el-badge>
				</div>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Inline</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<div class="flex flex-wrap gap-10 items-center">
					<el-badge is-dot class="is-inline">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="1000" :max="99" class="is-inline">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="1" class="is-inline">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge :value="2" class="is-inline">
						<el-button type="primary">Button</el-button>
					</el-badge>
					<el-badge value="New" class="is-inline">Text</el-badge>
				</div>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">With Icon</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<div class="flex flex-wrap gap-10">
					<div class="el-badge is-circle">
						<el-button type="primary">Button</el-button>
						<sup class="el-badge__content el-badge__content--info is-fixed">
							<el-icon><icon-minus /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle">
						<el-button type="primary">Button</el-button>
						<sup class="el-badge__content el-badge__content--warning is-fixed">
							<el-icon><icon-clock /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle">
						<el-button type="primary">Button</el-button>
						<sup class="el-badge__content el-badge__content--success is-fixed">
							<el-icon><icon-check /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle">
						<el-button type="primary">Button</el-button>
						<sup class="el-badge__content el-badge__content--danger is-fixed">
							<el-icon><icon-close /></el-icon>
						</sup>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Badge Only</h3>
	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<div class="flex flex-wrap gap-10 items-center">
					<el-badge is-dot class="is-inline"></el-badge>
					<el-badge :value="1000" :max="99" class="is-inline"></el-badge>
					<el-badge :value="1" class="is-inline"></el-badge>
					<el-badge :value="2" class="is-inline"></el-badge>
					<el-badge value="New" class="is-inline"></el-badge>
				</div>
			</el-col>
		</el-row>
		<el-row :gutter="40" class="mt-4">
			<el-col>
				<div class="flex flex-wrap gap-10">
					<div class="el-badge is-circle is-inline">
						<sup class="el-badge__content el-badge__content--info is-fixed">
							<el-icon><icon-minus /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle is-inline">
						<sup class="el-badge__content el-badge__content--warning is-fixed">
							<el-icon><icon-clock /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle is-inline">
						<sup class="el-badge__content el-badge__content--success is-fixed">
							<el-icon><icon-check /></el-icon>
						</sup>
					</div>
					<div class="el-badge is-circle is-inline">
						<sup class="el-badge__content el-badge__content--danger is-fixed">
							<el-icon><icon-close /></el-icon>
						</sup>
					</div>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import IconMinus from '@assets/svg/global/Minus.svg';
import IconCheck from '@assets/svg/global/Check.svg';
import IconClock from '@assets/svg/global/Clock.svg';
import IconClose from '@assets/svg/global/Close.svg';
</script>
