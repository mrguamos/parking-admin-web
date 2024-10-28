import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import { autoAnimatePlugin } from '@formkit/auto-animate/vue';
import { router } from '@routers/index';
import { setupStore } from '@stores/index';
import { createI18n } from '@services/i18n.service';
import directive from '@/directive';

import './style.scss';

import en from '@assets/locales/en.json';

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	globalInjection: true,
	messages: {
		en,
	},
});

const app = createApp(App);
setupStore(app);
app.use(i18n);
app.use(router);
app.use(autoAnimatePlugin);
app.use(directive);
app.use(ElementPlus);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}

app.mount('#app-root');
