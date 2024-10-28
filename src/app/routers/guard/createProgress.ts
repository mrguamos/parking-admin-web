import { Router } from 'vue-router';
import NProgress from '@utils/nprogress.ts';

export function createProgress(router: Router) {
	router.beforeEach(async (_to, _from, next) => {
		NProgress.start();
		console.log('createProgressGuard');
		next();
	});
	router.afterEach(() => {
		NProgress.done();
	});
}
