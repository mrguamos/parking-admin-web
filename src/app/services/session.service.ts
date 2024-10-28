import { ICompanyFacility } from '@models/company-facility.interface';

export class SessionService {
	private sessionStorage: { [key: string]: string | object | null | undefined } = {};
	private whitelist: string[] = ['theme', 'themeMode'];

	getCompanyFacility(): ICompanyFacility | null {
		return this.getSessionData('companyFacility', true) as ICompanyFacility | null;
	}

	setCompanyFacility(companyFacility: any) {
		this.setSessionData('companyFacility', companyFacility, true);
	}

	getTheme(): string {
		return (this.getSessionData('theme', false) || '') as string;
	}

	setTheme(theme: string) {
		this.setSessionData('theme', theme, false);
	}

	getThemeMode(): string {
		return this.getSessionData('themeMode', false) as string;
	}

	setThemeMode(mode: string) {
		this.setSessionData('themeMode', mode, false);
	}

	getToken(): string {
		return (this.getSessionData('token', false) as string) || '';
	}

	setToken(token: string) {
		this.setSessionData('token', token, false);
	}

	getPermissionList(): string[] {
		return (this.getSessionData('userPermissions', true) as string[]) || [];
	}

	setPermissionList(permissionList: string[]) {
		this.setSessionData('userPermissions', permissionList, true);
	}

	private getSessionData(key: string, isObjType: boolean): string | object | null {
		const dataFromSession = this.sessionStorage[key];
		if (dataFromSession) return dataFromSession;

		let dataFromLocalStorage: string | object | null = localStorage.getItem(key);
		if (dataFromLocalStorage && isObjType) {
			try {
				dataFromLocalStorage = JSON.parse(dataFromLocalStorage);
			} catch (err) {
				console.warn(`The ${key}'s data is not of type Object!`);
			}
		}
		this.sessionStorage[key] = dataFromLocalStorage;
		return dataFromLocalStorage || null;
	}

	private setSessionData(key: string, data: string | object, isObjType: boolean) {
		this.sessionStorage[key] = data;

		if (data === null || data === undefined) {
			localStorage.removeItem(key);
			return;
		}

		const data2Storage = isObjType ? JSON.stringify(data) : (data as string);
		localStorage.setItem(key, data2Storage);
	}

	clean() {
		const sessionStorageKeys = Object.keys(this.sessionStorage);
		sessionStorageKeys
			.filter((key) => !this.whitelist.includes(key))
			.forEach((key) => {
				this.sessionStorage[key] = null;
			});

		const keysFromLocalStorage = this.getKeysFromLocalStorage();
		keysFromLocalStorage
			.filter((key) => !this.whitelist.includes(key))
			.forEach((key) => {
				localStorage.removeItem(key);
			});
	}

	private getKeysFromLocalStorage(): string[] {
		const keys: string[] = [];
		for (let i = 0; i < localStorage.length; i++) {
			const storageKey = localStorage.key(i);
			if (storageKey) {
				keys.push(storageKey);
			}
		}
		return keys;
	}
}

const session = new SessionService();
export { session };
