import { isArray } from 'lodash-es';
import { message } from './message';
export const getBrowserInfo = () => {
	const ua = navigator.userAgent;
	let name = '';
	let version = '';

	// 判断是否为 Chrome 浏览器
	if (/Chrome\/([\d.]+)/.test(ua)) {
		name = 'Chrome';
		version = RegExp.$1;
	}
	// 判断是否为 Firefox 浏览器
	else if (/Firefox\/([\d.]+)/.test(ua)) {
		name = 'Firefox';
		version = RegExp.$1;
	}
	// 判断是否为 Safari 浏览器
	else if (/Safari\/([\d.]+)/.test(ua)) {
		name = 'Safari';
		version = RegExp.$1;
	}
	// 判断是否为 IE 浏览器
	else if (/Trident\/([\d.]+)/.test(ua)) {
		name = 'Internet Explorer';
		version = RegExp.$1;
	}
	// 判断是否为 Edge 浏览器
	else if (/Edge\/([\d.]+)/.test(ua)) {
		name = 'Edge';
		version = RegExp.$1;
	}
	// 判断是否为 Opera 浏览器
	else if (/OPR\/([\d.]+)/.test(ua)) {
		name = 'Opera';
		version = RegExp.$1;
	}
	// 其他浏览器
	else {
		name = 'Unknown';
		version = 'Unknown';
	}

	return {
		name,
		version,
	};
};

export function convertToKebabCase(str: string) {
	// TODO:是否可以直接用lodash方法：kebabCase()
	return str
		.toLowerCase() // Convert to lowercase
		.replace(/\s+|\/|_/g, '-'); // Replace spaces, slashes, and underscores with hyphens
}

export function convertToTitleCase(str: string) {
	// TODO:是否可以直接用lodash方法：startCase()
	return str
		.replace(/-/g, ' ') // Replace all hyphens with spaces
		.replace(/_/g, ' ') // Replace all underscores with spaces
		.replace(/\//g, ' ') // Replace all slashes with spaces
		.replace(/\b(\w)/g, function (char) {
			return char.toUpperCase();
		}); // Capitalize the first letter of each word
}

// secondVal: For example in 1 - 10 of 160 it's 10
// totalItems: For example in 1 - 10 of 160 it's 160
export function getCurrentTablePage(totalItems: number, secondVal: number, recordsPerPage: number) {
	const totalPages = Math.ceil(totalItems / recordsPerPage);
	const diff = totalItems - secondVal;
	const pagesLeft = Math.ceil(diff / recordsPerPage);
	return totalPages - pagesLeft;
}

export const obj2Param = (obj: { [key: string]: any }) => {
	const paramList = Object.keys(obj).reduce((paramList: string[], key: string) => {
		const val = obj[key];
		if (val !== 0 && val !== null && val !== undefined && val !== '') {
			paramList.push(`${key}=${val}`);
		}
		return paramList;
	}, []);
	return paramList.length ? `?${paramList.join('&')}` : '';
};

// 获取数组符合条件的项放在最前面
// TODO:使用lodash.groupBy()实现
export const moveItemToFront = <T>(array: T[], conditionFn: (item: T) => boolean) => {
	// 使用 filter 方法分别找出满足条件和不满足条件的项
	const matches = array.filter(conditionFn);
	const nonMatches = array.filter((item) => !conditionFn(item));

	// 使用 concat 方法将满足条件的项放在前面
	return matches.concat(nonMatches);
};

/**
 * 判断path是否为外链
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path: string): boolean => {
	return /^(https?:|mailto:|tel:)/.test(path);
};

export function isIframe() {
	return window.top !== window.self;
}

/**
 *
 * @param url 目标下载接口
 * @param query 查询参数
 * @param fileName 文件名称
 * @returns {*}
 */
export function downBlobFile(url: any, query: any, fileName: string) {
	return api
		.get(url, {
			responseType: 'blob',
			params: query,
		})
		.then((response) => {
			handleBlobFile(response, fileName);
		});
}

/**
 * blob 文件刘处理
 * @param response 响应结果
 * @returns
 */
export function handleBlobFile(response: any, fileName: string) {
	// 处理返回的文件流
	const blob = response;
	if (blob && blob.size === 0) {
		message('error cannot download', {
			type: 'error',
		});
		return;
	}
	const link = document.createElement('a');

	// 兼容一下 入参不是 File Blob 类型情况
	const binaryData = [] as any;
	binaryData.push(response);
	link.href = window.URL.createObjectURL(new Blob(binaryData));
	link.download = fileName;
	document.body.appendChild(link);
	link.click();
	window.setTimeout(function () {
		// @ts-ignore
		URL.revokeObjectURL(blob);
		document.body.removeChild(link);
	}, 0);
}

/**
 *
 * @param str 驼峰转下划线
 * @returns 下划线
 */
export function toUnderline(str: string) {
	return str.replace(/([A-Z])/g, '_$1').toLowerCase();
}

/**
 * @description 处理 prop，当 prop 为多级嵌套时 ==> 返回最后一级 prop
 * @param {String} prop 当前 prop
 * @returns {String}
 * */
export function handleProp(prop: string) {
	const propArr = prop.split('.');
	if (propArr.length == 1) return prop;
	return propArr[propArr.length - 1];
}

/**
 * @description 生成唯一 uuid
 * @returns {String}
 */
export function generateUUID() {
	let uuid = '';
	for (let i = 0; i < 32; i++) {
		const random = (Math.random() * 16) | 0;
		if (i === 8 || i === 12 || i === 16 || i === 20) uuid += '-';
		uuid += (i === 12 ? 4 : i === 16 ? (random & 3) | 8 : random).toString(16);
	}
	return uuid;
}

/**
 * @description 处理 prop 为多级嵌套的情况，返回的数据 (列如: prop: user.name)
 * @param {Object} row 当前行数据
 * @param {String} prop 当前 prop
 * @returns {*}
 * */
export function handleRowAccordingToProp(row: { [key: string]: any }, prop: string) {
	if (!prop.includes('.')) return row[prop] ?? '--';
	prop.split('.').forEach((item) => (row = row[item] ?? '--'));
	return row;
}

/**
 * @description 根据枚举列表查询当需要的数据（如果指定了 label 和 value 的 key值，会自动识别格式化）
 * @param {String} callValue 当前单元格值
 * @param {Array} enumData 字典列表
 * @param {Array} fieldNames label && value && children 的 key 值
 * @param {String} type 过滤类型（目前只有 tag）
 * @returns {String}
 * */
export function filterEnum(callValue: any, enumData?: any, fieldNames?: any, type?: 'tag') {
	const value = fieldNames?.value ?? 'value';
	const label = fieldNames?.label ?? 'label';
	const children = fieldNames?.children ?? 'children';
	let filterData: { [key: string]: any } = {};
	// 判断 enumData 是否为数组
	if (Array.isArray(enumData)) filterData = findItemNested(enumData, callValue, value, children);
	// 判断是否输出的结果为 tag 类型
	if (type == 'tag') {
		return filterData?.tagType ? filterData.tagType : '';
	} else {
		return filterData ? filterData[label] : '--';
	}
}

/**
 * @description 递归查找 callValue 对应的 enum 值
 * */
export function findItemNested(enumData: any, callValue: any, value: string, children: string) {
	return enumData.reduce((accumulator: any, current: any) => {
		if (accumulator) return accumulator;
		if (current[value] === callValue) return current;
		if (current[children]) return findItemNested(current[children], callValue, value, children);
	}, null);
}

/**
 * @description 处理 ProTable 值为数组 || 无数据
 * @param {*} callValue 需要处理的值
 * @returns {String}
 * */
export function formatValue(callValue: any) {
	// 如果当前值为数组，使用 / 拼接（根据需求自定义）
	if (isArray(callValue)) return callValue.length ? callValue.join(' / ') : '--';
	return callValue ?? '--';
}
