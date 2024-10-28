import { Router } from 'vue-router';

export function createState(router: Router, isInit: boolean) {
	router.beforeEach(async (to, _from, next) => {
		if (isInit) {
			const { token } = to.query;
			if (token) {
				session.setToken(token as string);
			}
			// 清理缓存
			// 初始化数据 比如header query数据
			console.log('createStateGuard');
			isInit = false;
		}
		next();
	});
}
