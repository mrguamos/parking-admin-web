import { AxiosResponse } from 'axios';

export const responseHandlerInterceptor = (response: AxiosResponse<any, any>) => {
	return response;
};
