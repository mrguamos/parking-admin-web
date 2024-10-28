import { isObject } from 'lodash-es';
import { Router } from 'vue-router';
import { useUserStoreHook } from '@/stores/modules/user.ts';
import { isIframe } from '@utils/utils';

export function createIFrame(router: Router) {
	router.beforeEach(async (to, _, next) => {
		// if (remainingPaths.includes(to.path)){
		//     next()
		//     return
		// }
		const store = useUserStoreHook();
		if (to.meta.iframe || isIframe()) {
			console.log('createIFrameGuard');
			if (!isObject(store.userInfo)) {
				try {
					await store.getUserInfo();
				} catch (error) {
					// next('/error/500');
				}
			}
		}
		next();
	});
}
