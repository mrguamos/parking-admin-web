import { defineStore } from 'pinia';
// @ts-ignore
import { store } from '../index';

const { VITE_APP_CODE } = import.meta.env;

export const useUserStore = defineStore({
	id: 'user',
	state: () => ({
		username: '',
		roles: [],
		permissions: [],
		userId: '',
		accountView: null,
		userInfo: null,
		companyFacility: null,
	}),
	actions: {
		/** 存储用户名 */
		setUserName(username: string) {
			this.username = username;
		},
		/** 存储角色 */
		setRole(roles: never[]) {
			this.roles = roles;
		},
		setAccountView(accountView: any) {
			this.accountView = accountView;
		},
		setUserInfo(userInfo: any) {
			this.userInfo = userInfo;
		},
		setCompanyFacility(companyFacility: any) {
			this.companyFacility = companyFacility;
		},
		/** 登入 */
		loginByPassword(data: any) {
			// eslint-disable-next-line no-async-promise-executor
			return new Promise(async (resolve, reject) => {
				try {
					const browser = getBrowserInfo();
					const result = await loginApi.login({
						...data,
						platform: 'Web',
						device: `${browser.name} ${browser.version} ${browser.name}-${browser.version}`,
						applicationCode: VITE_APP_CODE,
					});
					resolve(result);
				} catch (error) {
					reject(error);
				}
			});
		},
		/** 前端登出（不调用接口） */
		logout() {
			this.username = '';
			this.roles = [];
			this.$reset();
			session.clean();
			useEventBus('logout');
		},
		getUserInfo() {
			// eslint-disable-next-line no-async-promise-executor
			return new Promise(async (_resolve, reject) => {
				try {
					// const result = await UserApi.getUserInfo(); // maybe or api ?
					// this.setAccountView(result.accountView);
					// this.setUserInfo(result);
					// const company = result.companies[0];
					// const companyFacility = {
					// 	companyId: company?.id,
					// 	facilityId: null,
					// 	company: company,
					// 	facility: {},
					// };
					// this.setCompanyFacility(companyFacility);
					// resolve(result);
				} catch (error) {
					console.log('error', error);
					reject(error);
				}
			});
		},
	},
});

export function useUserStoreHook() {
	return useUserStore(store);
}
