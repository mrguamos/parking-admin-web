import { defineStore } from 'pinia';
import enLocale from 'element-plus/es/locale/lang/en';

interface ILocals {
	[key: string]: any;
}

interface II18nState {
	elePlusLocals: ILocals;
}

export const useI18nStore = defineStore('i18n', {
	state: (): II18nState => ({
		elePlusLocals: {
			en: enLocale,
		},
	}),
	getters: {},
	actions: {
		updElePlusLocal(lang: string, locals: any) {
			this.elePlusLocals[lang] = locals;
		},
		getElePlusLocalByLang(lang: string) {
			// 默认是en
			return this.elePlusLocals[lang] || enLocale;
		},
	},
});
