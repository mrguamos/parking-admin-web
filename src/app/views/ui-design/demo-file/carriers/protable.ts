export const columns = reactive([
	{ type: 'selection', fixed: 'left', width: 70 },
	{ type: 'sort', label: 'Sort', width: 80 },
	{ type: 'expand', label: 'Expand', width: 85 },
	{
		prop: 'ID',
		label: 'ID',
		search: {
			el: 'input',
			tooltip: 'Property',
			width: 260,
			props: {
				placeholder: 'Property',
			},
			order: 2,
		},
		isShow: true,
		isSetting: true,
		isFilterEnum: true,
	},
	{
		prop: 'AccountId',
		label: 'AccountId',
		search: {
			el: 'input',
			width: 260,
			tooltip: 'Template',
			props: {
				placeholder: 'Template',
			},
			order: 2,
		},
		isShow: true,
		isSetting: true,
		isFilterEnum: true,
	},
	{
		prop: 'Company',
		label: 'Company',
		search: {
			el: 'input',
			width: 260,
			tooltip: 'Platform',
			props: {
				placeholder: 'Platform',
			},
			order: 4,
		},
		isShow: true,
		isSetting: true,
		isFilterEnum: true,
	},
	{
		prop: 'Carrier',
		label: 'Carrier',
		enum: getOptions('carrierServiceCode'),
		search: {
			el: 'select',
			tooltip: 'Status',
			defaultValue: '1',
			fieldNames: { label: 'label', value: 'value' },
			width: 260,
			props: {
				placeholder: 'Status',
			},
			order: 3,
		},
		isShow: true,
		isSetting: true,
		isFilterEnum: true,
	},
	{
		prop: 'Name',
		label: 'DATE & TIME',
		search: {
			el: 'date-picker',
			tooltip: 'Date Range',
			width: 260,
			props: {
				placeholder: 'Date Range',
			},
			order: 4,
		},
		isShow: true,
		isSetting: true,
		isFilterEnum: true,
	},
	{
		prop: 'operation',
		'min-width': '50px',
		fixed: 'right',
	},
]);
