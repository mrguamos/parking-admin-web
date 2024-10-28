import { isString } from 'lodash-es';
import { atob } from './pollify';
import { t } from '@services/i18n.service';

export const downloadBlob = (data: any) => {
	const contentDisposition = data.headers['content-disposition'];
	const index = contentDisposition.indexOf('e=');
	const fileName =
		contentDisposition.slice(index + 3, contentDisposition.length - 1) ||
		new Date().getTime() + '.csv';
	download(fileName, data.data);
};

export const download = (fileName: string, blob: Blob) => {
	const link = document.createElement('a');
	link.href = URL.createObjectURL(blob);
	link.download = fileName;
	link.click();
	link.remove();
	URL.revokeObjectURL(link.href);
};

/**
 * 文件下载函数
 */
export function fileDownload(file: string | Blob, name: string) {
	if (!file) {
		throw new Error(t('common.File_should_not_be_empty'));
	}

	// file是url
	if (isString(file) && file.indexOf('http') > -1) {
		name = name || getUrlFileName(file);
		const link = document.createElement('a');
		link.style.display = 'none';
		link.href = file;
		link.target = '_blank';
		link.setAttribute('download', name); // 自定义下载文件名（如exemple.txt）
		document.body.appendChild(link);
		link.click();
		return;
	}

	if (!name) {
		throw new Error(t('File_name_should_not_be_empty'));
	}

	// file是base64先转blob
	let blobFile;
	if (isString(file)) {
		blobFile = base64toBlob(file);
	}

	if (!blobFile) return;

	// file是blob
	if ((window.navigator as any).msSaveBlob) {
		(window.navigator as any).msSaveOrOpenBlob(blobFile, name);
	} else {
		const url = window.URL.createObjectURL(new Blob([blobFile]));
		const link = document.createElement('a');
		link.style.display = 'none';
		link.href = url;
		link.target = '_blank';
		link.setAttribute('download', name); // 自定义下载文件名（如exemple.txt）
		document.body.appendChild(link);
		link.click();
	}
}

/**
 * 获链接文件名+后缀
 * @param {string} url 文件地址
 */
export function getUrlFileName(url: string) {
	if (!url) return '';
	const file = url.split('/');
	return file[file.length - 1] || '';
}

/**
 * 从base64编码的图片中获取扩展名
 * @param {String} base64
 * @returns {String}
 */
export function getExtensionFromBase64(base64: string) {
	const re = new RegExp('/(?<ext>.*?);base64,.*');
	const res = re.exec(base64);
	if (res) {
		return res.groups?.ext;
	}
}

/**
 * 判断是否为base64格式文件
 * @param {String} base64
 * @returns {Boolean}
 */
export function checkBase64(base64: string) {
	const re = new RegExp('/(?<ext>.*?);base64,.*');
	return re.exec(base64);
}

/**
 * 获取uuid
 * @returns {String}
 */
export function getUUID() {
	const s = [];
	const hexDigits = '0123456789abcdef';
	for (let i = 0; i < 36; i++) {
		s[i] = hexDigits.substring(Math.floor(Math.random() * 0x10), 1);
	}
	s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
	s[19] = hexDigits.substring(((s as any)[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
	s[8] = s[13] = s[18] = s[23] = '-';
	const uuid = s.join('');
	return uuid;
}

/**
 * Base64 转 Blob
 * @param {string} base64String Blob格式数据
 */
export function base64toBlob(base64String: string) {
	const arr = base64String.split(',');
	if (arr.length < 2) return;

	const mime = arr[0].match(/:(.*?);/)?.[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], {
		type: mime,
	});
}

/**
 * Blob 转 Base64
 * @param {blob} file Blob格式数据
 */
export function blobToBase64(file: Blob) {
	return new Promise(function (resolve, reject) {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function () {
			resolve(reader.result);
		};
		reader.onerror = function (error) {
			reject(error);
		};
	});
}

/**
 * 压缩base64图片
 * @param {string} base64String base64格式数据
 * @param {number} w 宽度
 * @param {number} quality 文件质量（0~1）
 */
export function compressImg(base64String: string, w: number, quality: number) {
	const getMimeType = function (urlData: string) {
		const arr = urlData.split(',');
		const mime = arr[0].match(/:(.*?);/)?.[1];
		return mime;
	};
	const newImage = new Image();
	let imgWidth, imgHeight;

	const promise = new Promise(function (resolve) {
		newImage.onload = resolve;
	});
	newImage.src = base64String;
	return promise.then(function () {
		imgWidth = newImage.width;
		imgHeight = newImage.height;
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		if (Math.max(imgWidth, imgHeight) > w) {
			if (imgWidth > imgHeight) {
				canvas.width = w;
				canvas.height = (w * imgHeight) / imgWidth;
			} else {
				canvas.height = w;
				canvas.width = (w * imgWidth) / imgHeight;
			}
		} else {
			canvas.width = imgWidth;
			canvas.height = imgHeight;
		}
		ctx?.clearRect(0, 0, canvas.width, canvas.height);
		ctx?.drawImage(newImage, 0, 0, canvas.width, canvas.height);
		const base64 = canvas.toDataURL(getMimeType(base64String), quality);
		return base64;
	});
}

/**
 * 获取base64文件大小，返回KB数字
 * @param {string} base64String base64格式数据
 */
export function getBase64Size(base64String: string) {
	let str = base64String.split(',')[1];
	const equalIndex = str.indexOf('=');
	if (str.indexOf('=') > 0) {
		str = str.substring(0, equalIndex);
	}
	const strLength = str.length;
	const fileLength = parseInt(`${strLength - (strLength / 8) * 2}`);
	// 由字节转换为KB
	let size = '';
	size = (fileLength / 1024).toFixed(2);
	const sizeStr = size + ''; // 转成字符串
	const index = sizeStr.indexOf('.'); // 获取小数点处的索引
	const dou = sizeStr.substring(index + 1, 2); // 获取小数点后两位的值
	if (dou == '00') {
		// 判断后两位是否为00，如果是则删除00
		return sizeStr.substring(0, index) + sizeStr.substring(index + 3, 2);
	}
	return parseInt(size);
}
