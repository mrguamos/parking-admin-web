// 只能下载同源的文件
export const downloadByUrl = (url: string, target: string = '_blank', fileName?: string) => {
	const link = document.createElement('a');
	link.href = url;
	if (target) {
		link.target = target;
	}
	if (fileName) {
		link.download = fileName;
	}
	link.click();
	link.remove();
	URL.revokeObjectURL(link.href);
};

export const downloadByBase64 = (base64Content: string, contentType: string) => {
	const byteCharacters = atob(base64Content);
	const byteNumbers = new Array(byteCharacters.length);
	for (let i = 0; i < byteCharacters.length; i++) {
		byteNumbers[i] = byteCharacters.charCodeAt(i);
	}
	const byteArray = new Uint8Array(byteNumbers);
	const file = new Blob([byteArray], { type: contentType });
	const fileURL = URL.createObjectURL(file);
	downloadByUrl(fileURL);
};

export const downloadFileFromRes = (res: any, filename: any) => {
	const octetStreamMime = 'application/octet-stream';
	const headers = res.headers;
	const contentType = headers['content-type'] || octetStreamMime;
	const contentDisposition = headers['content-disposition'] || '';
	if (contentDisposition.match(/CSV/gi)) {
		filename = filename.replace('xlsx', 'csv');
	} else if (contentDisposition.match(/ZIP/gi)) {
		filename = filename.replace('xlsx', 'zip');
		filename = filename.replace('xls', 'zip');
	}
	const blob = new Blob([res.data], {
		type: contentType,
	});
	const objectUrl = URL.createObjectURL(blob);
	downloadByUrl(objectUrl, '', filename);
};
