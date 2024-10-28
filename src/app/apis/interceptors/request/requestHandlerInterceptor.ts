import { InternalAxiosRequestConfig } from 'axios';
import { addCompanyFacilityInterceptor } from './addCompanyFacilityInterceptor';
import { addTokenToHeader } from './addTokenInterceptor';

export const requestHandlerInterceptor = (
	config: InternalAxiosRequestConfig<any>
): InternalAxiosRequestConfig<any> => {
	config.headers = config.headers || {};
	config.headers['x-channel'] = 'WEB';

	let newConfig = addTokenToHeader(config);
	newConfig = addCompanyFacilityInterceptor(newConfig);

	return newConfig;
};
