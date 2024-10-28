import { RouteRecordRaw } from 'vue-router';
import { session } from '@services/session.service';

export const routerPermission = (
	routerList: RouteRecordRaw[],
	permissionList: string[]
): RouteRecordRaw[] => {
	return filterRoutes(routerList, permissionList);
};

const filterRoutes = (routes: RouteRecordRaw[], permissions: string[]) => {
	return routes.filter((route) => {
		if (route.meta?.permission && !permissions.includes(route.meta.permission)) {
			return false;
		}
		if (route.children && route.children.length > 0) {
			route.children = filterRoutes(route.children, permissions);
		}
		return true;
	});
};

export const getPermissionList = () => {
	return session.getPermissionList();
};
