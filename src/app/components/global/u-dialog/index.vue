<script setup lang="ts">
import {
	type EventType,
	type ButtonProps,
	type DialogOptions,
	closeDialog,
	dialogStore,
} from './index';
import { isFunction } from 'lodash-es';

defineOptions({
	name: 'ItemDialog',
});

const fullscreen = ref(false);

const footerButtons = computed(() => {
	return (options: DialogOptions) => {
		if (!options.footerButtons) return [];
		return options?.footerButtons?.length > 0
			? options.footerButtons
			: ([
					{
						label: 'SAVE',
						type: 'primary',
						text: false,
						bg: true,
						popconfirm: options?.popconfirm,
						btnClick: ({ dialog: { options, index = -1 } }) => {
							const done = () => closeDialog(options, index as number, { command: 'sure' });
							if (options?.beforeSure && isFunction(options?.beforeSure)) {
								options.beforeSure(done, { options, index });
							} else {
								done();
							}
						},
					},
					{
						label: 'CANCEL',
						type: 'info',
						text: false,
						bg: true,
						btnClick: ({ dialog: { options, index = -1 } }) => {
							const done = () => closeDialog(options, index, { command: 'cancel' });
							if (options?.beforeCancel && isFunction(options?.beforeCancel)) {
								options.beforeCancel(done, { options, index });
							} else {
								done();
							}
						},
					},
				] as Array<ButtonProps>);
	};
});

const fullscreenClass = computed(() => {
	return ['el-icon', 'el-dialog__close', '-translate-x-2', 'cursor-pointer', 'hover:!text-[red]'];
});

function eventsCallBack(
	event: EventType,
	options: DialogOptions,
	index: number,
	isClickFullScreen = false
) {
	if (!isClickFullScreen) fullscreen.value = options?.fullscreen ?? false;
	if (options?.[event] && isFunction(options?.[event])) {
		return options?.[event]({ options, index });
	}
}

function handleClose(options: DialogOptions, index: number, args = { command: 'close' }) {
	closeDialog(options, index, args);
	eventsCallBack('close', options, index);
}
</script>

<template>
	<el-dialog
		v-for="(options, index) in dialogStore"
		:key="index"
		v-bind="options"
		v-model="options.visible"
		class="item-dialog"
		:class="!options.fullscreenIcon && 'pt-0'"
		:fullscreen="fullscreen ? true : options?.fullscreen ? true : false"
		@closed="handleClose(options, index)"
		@opened="eventsCallBack('open', options, index)"
		@open-auto-focus="eventsCallBack('openAutoFocus', options, index)"
		@close-auto-focus="eventsCallBack('closeAutoFocus', options, index)"
	>
		<!-- header -->
		<template
			v-if="options?.fullscreenIcon || options?.headerRenderer"
			#header="{ close, titleId, titleClass }"
		>
			<div v-if="options?.fullscreenIcon" class="flex items-center justify-between">
				<span :id="titleId" :class="titleClass">{{ options?.title }}</span>
				<i
					v-if="!options?.fullscreen"
					:class="fullscreenClass"
					@click="
						() => {
							fullscreen = !fullscreen;
							eventsCallBack('fullscreenCallBack', { ...options, fullscreen }, index, true);
						}
					"
				>
					icon
				</i>
			</div>
			<component :is="options?.headerRenderer({ close, titleId, titleClass })" v-else />
		</template>
		<component
			v-bind="options?.props"
			:is="options.contentRenderer({ options, index })"
			@close="(args: any) => handleClose(options, index, args)"
		/>
		<!-- footer -->
		<template v-if="!options?.hideFooter" #footer>
			<template v-if="options?.footerRenderer">
				<component :is="options?.footerRenderer({ options, index })" />
			</template>
			<span v-else>
				<template v-for="(btn, key) in footerButtons(options)" :key="key">
					<el-popconfirm
						v-if="btn.popconfirm"
						v-bind="btn.popconfirm"
						@confirm="
							btn.btnClick &&
								btn.btnClick({
									dialog: { options, index },
									button: { btn, index: key },
								})
						"
					>
						<template #reference>
							<el-button v-bind="btn">{{ btn?.label }}</el-button>
						</template>
					</el-popconfirm>
					<el-button
						v-else
						v-bind="btn"
						@click="
							btn.btnClick &&
								btn.btnClick({
									dialog: { options, index },
									button: { btn, index: key },
								})
						"
					>
						{{ btn?.label }}
					</el-button>
				</template>
			</span>
		</template>
	</el-dialog>
</template>
