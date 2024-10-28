<template>
	<!-- chat bubble -->
	<div :class="['flex gap-x-2 ms-auto', currentUser ? 'text-end flex-row-reverse' : '']">
		<el-avatar
			v-if="avatarType == 'image'"
			:src="avatar"
			class="hidden sm:inline-flex shrink-0"
		/>
		<el-avatar v-else :icon="avatar" class="hidden sm:inline-flex shrink-0" />
		<div class="grow w-full max-w-[80%] md:max-w-2xl">
			<div
				:class="[
					'rounded-[32px] inline-block px-6 py-4 text-body',
					currentUser
						? 'rounded-tr bg-brand text-on-brand'
						: 'rounded-tl bg-secondary border border-primary-border',
				]"
			>
				<slot />
			</div>
			<slot name="extraContent"></slot>
			<!-- actions -->
			<div
				v-if="showButtons"
				:class="['flex gap-3 mt-2', currentUser ? 'text-end flex-row-reverse' : '']"
			>
				<el-button-group>
					<el-button plain :icon="IconThumbUp" circle></el-button>
					<el-button plain :icon="IconThumbDown" circle></el-button>
				</el-button-group>
				<el-button plain :icon="IconCopy" circle></el-button>
				<el-button plain :icon="IconShare" circle></el-button>
			</div>
			<!-- end actions -->
		</div>
	</div>
	<!-- end chat bubble -->
</template>

<script setup lang="ts">
import IconUser from '@assets/svg/global/User.svg';
import { h, shallowRef } from 'vue';

const IconThumbUp = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined', innerHTML: 'thumb_up' });
	},
});
const IconThumbDown = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined', innerHTML: 'thumb_down' });
	},
});
const IconCopy = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined', innerHTML: 'content_copy' });
	},
});
const IconShare = shallowRef({
	render() {
		return h('span', { class: 'material-icons-outlined', innerHTML: 'share' });
	},
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
	currentUser: {
		type: Boolean,
		default: false,
	},
	avatarType: {
		type: String,
		default: 'icon',
	},
	avatar: {
		type: String,
		default: IconUser,
	},
	showButtons: {
		type: Boolean,
		default: false,
	},
});
</script>
