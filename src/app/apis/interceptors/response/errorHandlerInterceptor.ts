import { session } from '@services/session.service';
import { AxiosError } from 'axios';

export const errorHandlerInterceptor = async (error: AxiosError): Promise<any> => {
	if (error.response?.status === 401) {
		session.clean();
		useEventBus('logout').emit();
	}
	return await Promise.reject(error.response);
};
