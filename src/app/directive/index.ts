import { App } from 'vue';

const directives = [
	{
		name: 'permission',
		content: () => import('./permissionDirective'),
	},
];

export default {
	install(app: App) {
		directives.forEach(async (directive) => {
			const module = await directive.content();
			app.directive(directive.name, module.default);
		});
	},
};
