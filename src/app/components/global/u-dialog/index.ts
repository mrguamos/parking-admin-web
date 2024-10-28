import { ref } from 'vue';
import itemDialog from './index.vue';
import { useTimeoutFn } from '@vueuse/core';
import type { EventType, ArgsType, DialogProps, ButtonProps, DialogOptions } from './type';

const dialogStore = ref<any>([]);

/** 打开弹框 */
const addDialog = (options: DialogOptions) => {
	const open = () => dialogStore.value.push(Object.assign(options, { visible: true }));
	// eslint-disable-next-line prettier/prettier
  if (options?.openDelay) {
		useTimeoutFn(() => {
			open();
		}, options.openDelay);
	} else {
		open();
	}
};

/** 关闭弹框 */
const closeDialog = (options: any, index: number, args?: any) => {
	dialogStore.value[index].visible = false;
	options.closeCallBack && options.closeCallBack({ options, index, args });

	const closeDelay = options?.closeDelay ?? 200;
	useTimeoutFn(() => {
		dialogStore.value.splice(index, 1);
	}, closeDelay);
};

/**
 * @description 更改弹框自身属性值
 * @param value 属性值
 * @param key 属性，默认`title`
 * @param index 弹框索引（默认`0`，代表只有一个弹框，对于嵌套弹框要改哪个弹框的属性值就把该弹框索引赋给`index`）
 */
const updateDialog = (value: any, key = 'title', index = 0) => {
	dialogStore.value[index][key] = value;
};

/** 关闭所有弹框 */
const closeAllDialog = () => {
	dialogStore.value = [];
};

const ItemDialog = itemDialog;

export type { EventType, ArgsType, DialogProps, ButtonProps, DialogOptions };
export { ItemDialog, dialogStore, addDialog, closeDialog, updateDialog, closeAllDialog };
