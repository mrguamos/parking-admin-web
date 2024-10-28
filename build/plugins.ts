import vue from '@vitejs/plugin-vue';
import { PluginOption } from 'vite';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// import { vitePluginFakeServer } from 'vite-plugin-fake-server';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';
import { createHtmlPlugin } from 'vite-plugin-html';
import { visualizer } from 'rollup-plugin-visualizer';
import vueI18n from '@intlify/unplugin-vue-i18n/vite';
import { pathResolve } from './utils';
import type { Env } from '../src/global.d';
/**
 * 创建 vite 插件
 * @param viteEnv
 */
export const createVitePlugins = (viteEnv: Env): (PluginOption | PluginOption[])[] => {
	const { VITE_PROJECT_NAME } = viteEnv;
	console.log(VITE_PROJECT_NAME);
	return [
		vue(),
		vueJsx(),
		svgLoader(),
		// 按需自动导入 API
		AutoImport({
			imports: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
			dirs: [
				'src/app/utils/*',
				'src/app/stores/*',
				'src/app/routers/*',
				'src/app/apis/*',
				'src/app/hooks/*',
				'src/app/services/*',
			],
			include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/],
			dts: './types/auto-imports.d.ts',
			resolvers: [
				ElementPlusResolver({
					importStyle: false, // 该项目已经全局引入了element的样式，故此不需要按需导入，只需要按需导入工具类
				}),
			],
		}),
		// Vue 的按需组件自动导入
		Components({
			dts: './types/components.d.ts',
			resolvers: [
				ElementPlusResolver({
					importStyle: false, // 该项目已经全局引入了element的样式，故此不需要按需导入，只需要按需导入他的组件
				}),
			],
		}),
		createHtmlPlugin({
			minify: true,
			/**
			 * 不需要再在`index.html`内添加 script 标签
			 */
			entry: '/src/main.ts',
			/**
			 * 将 `index.html`存放在指定文件夹
			 */
			template: 'index.html',

			/**
			 * 需要注入 index.html ejs 模版的数据
			 */
			inject: {
				data: {
					title: VITE_PROJECT_NAME,
					favIcon: 'favicon',
					injectScript: `<script type="module" src="./inject.js"></script>`,
				},
				tags: [
					{
						injectTo: 'body-prepend',
						tag: 'div',
						attrs: {
							id: 'tag',
						},
					},
				],
			},
		}),
		vueI18n({
			include: pathResolve('../src/assets/locales/**'),
		}),
		visualizer(),
		// vitePluginFakeServer({
		// 	logger: false,
		// 	include: 'mock',
		// 	infixName: false,
		// 	enableProd: false,
		// }),
	];
};
