import axios from 'axios';
import { requestHandlerInterceptor } from '../interceptors/request/requestHandlerInterceptor';
import { errorHandlerInterceptor } from '../interceptors/response/errorHandlerInterceptor';
import { responseHandlerInterceptor } from '@apis/interceptors/response/responseHandlerInterceptor';

const ax = axios.create();

ax.interceptors.request.use((config) => requestHandlerInterceptor(config));
ax.interceptors.response.use(
	(response) => responseHandlerInterceptor(response),
	errorHandlerInterceptor
);

export { ax };
