import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

export const pathResolve = (dir = '.', metaUrl = import.meta.url) => {
	// 当前文件目录的绝对路径
	const currentFileDir = dirname(fileURLToPath(metaUrl));
	// build 目录的绝对路径
	const buildDir = resolve(currentFileDir, 'build');
	// 解析的绝对路径
	const resolvedPath = resolve(currentFileDir, dir);
	// 检查解析的绝对路径是否在 build 目录内
	if (resolvedPath.startsWith(buildDir)) {
		// 在 build 目录内，返回当前文件路径
		return fileURLToPath(metaUrl);
	}
	// 不在 build 目录内，返回解析后的绝对路径
	return resolvedPath;
};

export const alias = {
	'@assets': pathResolve('../src/assets'),
	'@styles': pathResolve('../src/styles'),
	'@apis': pathResolve('../src/app/apis'),
	'@components': pathResolve('../src/app/components'),
	'@constants': pathResolve('../src/app/constants'),
	'@hooks': pathResolve('../src/app/hooks'),
	'@models': pathResolve('../src/app/models'),
	'@routers': pathResolve('../src/app/routers'),
	'@stores': pathResolve('../src/app/stores'),
	'@utils': pathResolve('../src/app/utils'),
	'@views': pathResolve('../src/app/views'),
	'@services': pathResolve('../src/app/services'),
	'@': pathResolve('../src/app'),
};

//  optimze structrue & plugin & env file & pro table & hooks & module guard