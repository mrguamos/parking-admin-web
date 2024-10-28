import { isEmpty } from 'lodash-es';

export function formattedTime12Hour(date: string | number | Date) {
	// TODO:使用dayjs转换
	if (!isEmpty(date)) {
		date = new Date(date);
	}
	if (date instanceof Date) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const period = hours >= 12 ? 'PM' : 'AM';
		const formattedHours = hours % 12 || 12;
		return `${padZero(month)}/${padZero(day)}/${year} ${formattedHours}:${padZero(
			minutes
		)} ${period}`;
	} else {
		return '';
	}
}

export function formatDate(date: Date | string | number, fmt: string) {
	if (date != undefined) {
		date = new Date(date);
		if (/(y+)/.test(fmt)) {
			fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		const o: { [key: string]: number } = {
			'M+': date.getMonth() + 1,
			'd+': date.getDate(),
			'h+': date.getHours(),
			'm+': date.getMinutes(),
			's+': date.getSeconds(),
		};
		for (const k in o) {
			if (new RegExp(`(${k})`).test(fmt)) {
				const str = o[k] + '';
				fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
			}
		}
		return fmt;
	} else {
		return null;
	}
}

//时间格式化成12小时制MM/dd/yyyy h:mm:ss am/pm
// TODO:使用dayjs实现就行
export function formattedTime12HourSeconds(date: Date | number | string) {
	date = new Date(date);
	if (!isNaN(date)) {
		const year = date.getFullYear();
		const month = date.getMonth() + 1;
		const day = date.getDate();
		const hours = date.getHours();
		const minutes = date.getMinutes();
		const seconds = date.getSeconds();
		const period = hours >= 12 ? 'PM' : 'AM';
		const formattedHours = hours % 12 || 12;
		return `${padZero(month)}/${padZero(day)}/${year} ${formattedHours}:${padZero(
			minutes
		)}:${padZero(seconds)} ${period}`;
	} else {
		return 'null';
	}
}

// TODO:使用dayjs格式化
export function formattedTime24HourSeconds(inputDate: Date | number | string) {
	const date = new Date(inputDate);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

function padZero(value: number) {
	return value < 10 ? `0${value}` : value;
}

function padLeftZero(str: string) {
	return ('00' + str).substr(str.length);
}
