import { ILoginParams } from '@models/login/login-params.interface';
import { api } from './base/api';

const login = <T>(params: ILoginParams) => {
	const body = {
		...params,
		channel: 'Web',
		returnUserPermissions: ['WEB'],
	};
	return api.post<T>('/shared/idm-app/user/login', body);
};

export const loginApi = {
	login,
};
