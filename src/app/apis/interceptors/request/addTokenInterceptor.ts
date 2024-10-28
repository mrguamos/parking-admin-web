import { session } from '@services/session.service';
import { InternalAxiosRequestConfig } from 'axios';

export const addTokenToHeader = (
	config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
	const token = session.getToken();
	config.headers = config.headers || {};
	config.headers.Authorization = token;
	return config;
};
