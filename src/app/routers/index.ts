import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@components/layout/index.vue';
import { uiDesignRouters } from './modules/uiDesign';
import { routerPermission, getPermissionList } from './utils';
import setupRootGuard from '@routers/guard';

/**
 * Note: 路由配置项
 * name:'router-name'               // 设定路由的名字，一定要填写不然使用<keep-alive>时会出现各种问题
 * meta : {
	hidden: true                    // 当设置 true 的时候该路由不会再侧边栏出现 如401，login等页面，或者如一些编辑页面/edit/1
	keepAlive: false                // 如果设置为true，则不会被 <keep-alive> 缓存(默认 false)
	title: 'title'                  // 设置该路由在侧边栏和面包屑中展示的名字
	icon: 'svg-name'                // 设置该路由的图标，对应路径src/assets/icons/svg
	needCheckIsAdmin: false         // 当设置 true 的时候路由需要鉴权从才能进入
	prevRoute: {name: 'parent-router-name' , tab: 'tab-name'}    // back时需要跳转的上一个路由的名称，如路由内有选项卡可以设置tab名称跳转指定tab
	}
*/

declare module 'vue-router' {
	interface RouteMeta {
		hidden?: boolean;
		keepAlive?: boolean;
		title?: string;
		titleKey?: string;
		permission?: string;
		icon?: string;
		needCheckIsAdmin?: boolean;
		prevRoute?: object;
	}
}

const navigation: RouteRecordRaw[] = routerPermission([...uiDesignRouters], getPermissionList());

const routes: RouteRecordRaw[] = [
	{
		path: '/login',
		name: 'login',
		component: async () => await import('@views/login/login.vue'),
	},
	{
		path: '/',
		component: Layout,
		children: navigation,
		meta: { hidden: true },
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

setupRootGuard(router);

export { router, navigation };
