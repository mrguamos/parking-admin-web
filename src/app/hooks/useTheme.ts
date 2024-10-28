import { Theme, ThemeMode } from '@constants/theme';
import { session } from '@services/session.service';
import { reactive, readonly } from 'vue';

export const useTheme = () => {
	const state = reactive<{ mode: string; theme: string }>({
		mode: session.getThemeMode() || ThemeMode.LIGHT, // 默认主题为 light
		theme: session.getTheme() || Theme.BLUE,
	});

	const initTheme = () => {
		setTheme(state.theme);
		setMode(state.mode);
	};

	const getTheme = () => {
		return readonly(state);
	};

	const getMode = () => {
		if (state.mode !== 'dark') {
			document.documentElement.classList.remove('dark');
		} else {
			document.documentElement.classList.add('dark');
		}
		return readonly(state);
	};

	const setTheme = (theme: string) => {
		// TODO: 优化
		document.documentElement.classList.remove(state.theme);
		document.documentElement.classList.add(theme);

		state.theme = theme;
		session.setTheme(theme);
	};

	const setMode = (mode: string) => {
		state.mode = mode;
		session.setThemeMode(mode);
	};

	return { initTheme, getTheme, setTheme, getMode, setMode };
};
