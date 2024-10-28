import { isObject, isEmpty, omitBy, mapValues } from 'lodash-es';

// 深度遍历删除数据中空值的属性
export const deepOmitBy = (value: any, iteratee: (value: any) => boolean): any => {
	if (Array.isArray(value)) {
		return value.map((v) => deepOmitBy(v, iteratee)).filter((v) => !isEmpty(v));
	} else if (isObject(value)) {
		value = omitBy(value, iteratee);
		return mapValues(value, (v) => deepOmitBy(v, iteratee));
	}
	return value;
};
