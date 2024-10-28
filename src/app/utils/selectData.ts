/*
 * @Author: zhanghan
 * @Date: 2023-11-01 12:51:23
 * @LastEditors: zhanghan 294333196@qq.com
 * @LastEditTime: 2023-11-10 15:16:08
 * @Descripttion: 数据字典处理
 */

import selectStaticCode from '@constants/selectStaticCode';

// 转换索引键值对
export function changeAryToObj(ary: any[]) {
	return Object.assign({}, ...ary.map((item, index) => ({ [index]: item })));
}

// 返回组件标准接口的option类型(格式：{ label: string, value: string | number })
interface optionsConfigType {
	showMoreInfo?: boolean;
}

// 获取字典（支持数组例如：['字典名称1'，'字典名称2'，'字典名称3']和键值对对象格式例如：{'字典值值1':'字典名称1'，'字典值值2':'字典名称2'，'字典值值2':'字典名称2'}）
export function getOptions(type: string, { showMoreInfo = false }: optionsConfigType = {}): any {
	// 处理静态字典
	let codeMap = selectStaticCode[type];
	if (Array.isArray(codeMap)) codeMap = changeAryToObj(codeMap);
	return filterCodeMap(codeMap, showMoreInfo);
}

function filterCodeMap(codeMap: Record<string, any>, showMoreInfo: boolean) {
	return Object.keys(codeMap).map((key) => {
		const obj = showMoreInfo ? codeMap[key] : { label: codeMap[key], value: key };
		return obj;
	});
}
