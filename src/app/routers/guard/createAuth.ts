import { session } from '@services/session.service';
import { Router } from 'vue-router';

export function createAuth(router: Router) {
	const permissionList: string[] = session.getPermissionList();

	router.beforeEach((to, _from, next) => {
		// if (!session.getToken() && to.name !== 'login') {
		// 	router.push({ name: 'login' });
		// }
		if (to.meta?.permission && !permissionList.includes(to.meta.permission)) {
			//TODO no permission page
			next();
		} else {
			next();
		}
	});
}
