import { from, Observable } from 'rxjs';
import { Api, api } from './api';

export class Rx4axios {
	private readonly _httpClient: Api;

	constructor(api: Api) {
		this._httpClient = api;
	}

	public get<T>(url: string, queryParams?: object, headers?: object): Observable<T> {
		return from(this._httpClient.get<T>(url, { params: queryParams, headers }));
	}

	public post<T>(
		url: string,
		body?: object,
		queryParams?: object,
		headers?: object
	): Observable<T> {
		return from(this._httpClient.post<T>(url, body, { params: queryParams, headers }));
	}

	public put<T>(url: string, body: object, queryParams?: object, headers?: object): Observable<T> {
		return from(this._httpClient.put<T>(url, body, { params: queryParams, headers }));
	}

	public patch<T>(
		url: string,
		body: object,
		queryParams?: object,
		headers?: object
	): Observable<T> {
		return from(this._httpClient.patch<T>(url, body, { params: queryParams, headers }));
	}

	public delete<T>(url: string, queryParams?: object, headers?: object): Observable<T> {
		return from(this._httpClient.delete<T>(url, { params: queryParams, headers }));
	}
}

export const Rx4ax = new Rx4axios(api);
