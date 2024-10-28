import { setupI18n } from '@utils/i18n';
import { I18n, I18nOptions } from 'vue-i18n';

class I18nService {
	i18n: I18n;
	constructor(options: I18nOptions = { locale: 'en' }) {
		this.i18n = setupI18n(options);
	}

	t(key: string, ...arg: any) {
		return this.i18n.global.t(key, ...arg);
	}
}

let i18nService: I18nService;

export const createI18n = (options: I18nOptions = { locale: 'en' }) => {
	i18nService = new I18nService(options);
	return i18nService.i18n;
};

export const getI18n = () => {
	if (!i18nService) {
		console.error('You should call createI18n function to create i18n first!');
		return;
	}
	return i18nService.i18n;
};

export const t = (key: string, ...arg: any) => {
	if (!i18nService) {
		console.error('You should call createI18n function to create i18n first!');
		return key;
	}
	return i18nService.t(key, ...arg);
};
