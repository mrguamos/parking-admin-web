import { loadElePlusLocaleMessages, loadLocaleMessages, setI18nLanguage } from '@utils/i18n';
import { getI18n } from '@services/i18n.service';
import { isEmpty } from 'lodash-es';

export const useLang = () => {
	const i18n = getI18n();
	const i18nStore = useI18nStore();

	const changeLang = async (lang: string) => {
		if (!i18n) return;
		if (!i18n.global.availableLocales.includes(lang) || isEmpty(i18nStore.elePlusLocals[lang])) {
			const [elePlusLocalData] = await Promise.all([
				loadElePlusLocaleMessages(lang),
				loadLocaleMessages(i18n, lang),
			]);
			i18nStore.updElePlusLocal(lang, elePlusLocalData);
		}

		// set i18n language
		setI18nLanguage(i18n, lang);
	};

	return { changeLang };
};
