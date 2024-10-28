const prefix = ['WISE2018', 'REPORT', 'LITE', 'LM', 'ASSET', 'TRF', 'RMS', 'GIS', 'CP', 'CRM'];
const pattern = new RegExp(`(${prefix.join('|')})-\\d+`);

module.exports = {
	extends: ['@commitlint/config-conventional'],
	rules: {
		'unis-commit': [2, 'always'],
		'type-empty': [0],
		'subject-empty': [0],
	},
	plugins: [
		{
			rules: {
				'unis-commit': ({ header }) => {
					return [
						pattern.test(header),
						`The commit message should contain Ticket No, e.g. WISE2018-123`,
					];
				},
			},
		},
	],
};
