import { AxiosPromise } from 'axios';
import { ax } from './axios';

export class Api {
	private _makeRequest<T>(
		method: string,
		url: string,
		queryParams?: object,
		body?: object,
		headers?: object
	): Promise<T> {
		let request: AxiosPromise<T>;
		switch (method) {
			case 'GET':
				request = ax.get<T>(url, { params: queryParams, headers });
				break;
			case 'POST':
				request = ax.post<T>(url, body, { params: queryParams, headers });
				break;
			case 'PUT':
				request = ax.put<T>(url, body, { params: queryParams, headers });
				break;
			case 'PATCH':
				request = ax.patch<T>(url, body, { params: queryParams, headers });
				break;
			case 'DELETE':
				request = ax.delete(url, { params: queryParams, headers });
				break;
			default:
				throw new Error('Method not supported');
		}
		return request.then((res) => res.data);
	}

	get<T>(url: string, queryParams?: object, headers?: object): Promise<T> {
		return this._makeRequest<T>('GET', url, queryParams, {}, headers);
	}

	post<T>(url: string, body?: object, queryParams?: object, headers?: object): Promise<T> {
		return this._makeRequest<T>('POST', url, queryParams, body, headers);
	}

	put<T>(url: string, body: object, queryParams?: object, headers?: object): Promise<T> {
		return this._makeRequest<T>('PUT', url, queryParams, body, headers);
	}

	patch<T>(url: string, body: object, queryParams?: object, headers?: object): Promise<T> {
		return this._makeRequest<T>('PATCH', url, queryParams, body, headers);
	}

	delete<T>(url: string, queryParams?: object, headers?: object): Promise<T> {
		return this._makeRequest<T>('DELETE', url, queryParams, headers);
	}
}
export const api = new Api();
