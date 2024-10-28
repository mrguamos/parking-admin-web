export default {
	'^(/shared/|/api/|/fd-app/|/idm-app/)': {
		// When multiple http requests need to be proxied to the same server
		target: 'https://stage.logisticsteam.com',
		secure: false,
		changeOrigin: true,
		rewrite: (path) => path.replace(/^\/(api)/, ''),
	},
	'^/oapi/': {
		// When single http requests need to be proxied to the same server
		target: 'https://stage.logisticsteam.com',
		secure: false,
		changeOrigin: true,
		// rewrite: path => path.replace(/^\/(api)/, '')
	},
};
