import { RouteRecordRaw } from 'vue-router';

export const uiDesignRouters: RouteRecordRaw[] = [
	{
		path: '/ui-design/demo',
		name: 'Demo',
		component: async () => await import('@views/ui-design/demo-file/carriers/carriers.vue'),
		meta: {
			title: 'Demo',
			titleKey: 'menus.Demo',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">android</span>',
		},
	},
	{
		path: '/ui-design/demo/add',
		component: async () =>
			await import('@views/ui-design/demo-file/carriers/components/add-and-edit.vue'),
		meta: {
			title: 'Add',
			titleKey: 'menus.Add_Carrier',
			hidden: true,
			needCheckIsAdmin: false,
		},
	},
	{
		path: '/ui-design/demo/edit/:id',
		component: async () =>
			await import('@views/ui-design/demo-file/carriers/components/add-and-edit.vue'),
		meta: {
			title: 'Edit',
			titleKey: 'menus.Edit_Carrier',
			hidden: true,
			needCheckIsAdmin: false,
		},
	},
	{
		path: '/ui-design/foundations',
		name: 'Foundations',
		meta: {
			title: 'Foundations',
			titleKey: 'menus.Foundations',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">foundation</span>',
		},
		children: [
			{
				path: '/ui-design/color',
				name: 'Color',
				component: async () => await import('@/views/ui-design/color/color.vue'),
				meta: {
					title: 'Color Guidance',
					titleKey: 'menus.Color_Guidance',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/typography',
				name: 'Typography',
				component: async () => await import('@/views/ui-design/typography/typography.vue'),
				meta: {
					title: 'Typography',
					titleKey: 'menus.Typography',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
		],
	},
	{
		path: '/ui-design/form',
		name: 'Form',
		meta: {
			title: 'Form',
			titleKey: 'menus.Form',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">format_align_left</span>',
		},
		children: [
			{
				path: '/ui-design/autocomplete',
				name: 'Autocomplete',
				component: async () => await import('@/views/ui-design/autocomplete/autocomplete.vue'),
				meta: {
					title: 'Autocomplete',
					titleKey: 'menus.Autocomplete',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/button',
				name: 'Button',
				component: async () => await import('@/views/ui-design/button/button.vue'),
				meta: { title: 'Button', titleKey: 'menus.Button', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/cascader',
				name: 'Cascader',
				component: async () => await import('@/views/ui-design/cascader/cascader.vue'),
				meta: {
					title: 'Cascader',
					titleKey: 'menus.Cascader',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/checkbox',
				name: 'Checkbox',
				component: async () => await import('@/views/ui-design/checkbox/checkbox.vue'),
				meta: {
					title: 'Checkbox',
					titleKey: 'menus.Checkbox',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/date-picker',
				name: 'DatePicker',
				component: async () => await import('@/views/ui-design/date-picker/date-picker.vue'),
				meta: {
					title: 'Date Picker',
					titleKey: 'menus.Date_Picker',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/input',
				name: 'Input',
				component: async () => await import('@/views/ui-design/input/input.vue'),
				meta: {
					title: 'Input / Text Area',
					titleKey: 'menus.Input_Or_TextArea',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/radio',
				name: 'Radio',
				component: async () => await import('@/views/ui-design/radio/radio.vue'),
				meta: { title: 'Radio', titleKey: 'menus.Radio', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/rate',
				name: 'Rate',
				component: async () => await import('@views/ui-design/rate/rate.vue'),
				meta: { title: 'Rate', titleKey: 'menus.Rate', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/select',
				name: 'Select',
				component: async () => await import('@/views/ui-design/select/select.vue'),
				meta: { title: 'Select', titleKey: 'menus.Select', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/slider',
				name: 'Slider',
				component: async () => await import('@/views/ui-design/slider/slider.vue'),
				meta: { title: 'Slider', titleKey: 'menus.Slider', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/stepper',
				name: 'Stepper',
				component: async () => await import('@/views/ui-design/stepper/stepper.vue'),
				meta: {
					title: 'Stepper / Input Number',
					titleKey: 'menus.Stepper_Or_Input_Number',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/switch',
				name: 'Switch',
				component: async () => await import('@/views/ui-design/switch/switch.vue'),
				meta: { title: 'Switch', titleKey: 'menus.Switch', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/time-picker',
				name: 'TimePicker',
				component: async () => await import('@/views/ui-design/time-picker/time-picker.vue'),
				meta: {
					title: 'Time Picker',
					titleKey: 'menus.Time_Picker',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/transfer',
				name: 'Transfer',
				component: async () => await import('@/views/ui-design/transfer/transfer.vue'),
				meta: {
					title: 'Transfer',
					titleKey: 'menus.Transfer',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/upload',
				name: 'Upload',
				component: async () => await import('@/views/ui-design/upload/upload.vue'),
				meta: { title: 'Upload', titleKey: 'menus.Upload', hidden: false, needCheckIsAdmin: false },
			},
		],
	},
	{
		path: '/ui-design/data',
		name: 'Data',
		meta: {
			title: 'Data',
			titleKey: 'menus.Data',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">data_usage</span>',
		},
		children: [
			{
				path: '/ui-design/avatar',
				name: 'Avatar',
				component: async () => await import('@/views/ui-design/avatar/avatar.vue'),
				meta: { title: 'Avatar', titleKey: 'menus.Avatar', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/badge',
				name: 'Badge',
				component: async () => await import('@/views/ui-design/badge/badge.vue'),
				meta: { title: 'Badge', titleKey: 'menus.Badge', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/carousel',
				name: 'Carousel',
				component: async () => await import('@/views/ui-design/carousel/carousel.vue'),
				meta: {
					title: 'Carousel',
					titleKey: 'menus.Carousel',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/collapse',
				name: 'Collapse',
				component: async () => await import('@/views/ui-design/collapse/collapse.vue'),
				meta: {
					title: 'Collapse / Accordion',
					titleKey: 'menus.Collapse_Or_Accordion',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/progress',
				name: 'Progress',
				component: async () => await import('@/views/ui-design/progress/progress.vue'),
				meta: {
					title: 'Progress',
					titleKey: 'menus.Progress',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/segmented',
				name: 'Segmented',
				component: async () => await import('@/views/ui-design/segmented/segmented.vue'),
				meta: {
					title: 'Segmented',
					titleKey: 'menus.Segmented_Control',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/table',
				name: 'Table',
				component: async () => await import('@/views/ui-design/table/table.vue'),
				meta: { title: 'Table', titleKey: 'menus.Table', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/tag',
				name: 'Tag',
				component: async () => await import('@/views/ui-design/tag/tag.vue'),
				meta: {
					title: 'Tag / Chip',
					titleKey: 'menus.Tag_Or_Chip',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
		],
	},
	{
		path: '/ui-design/navigation',
		name: 'Navigation',
		meta: {
			title: 'Navigation',
			titleKey: 'menus.Navigation',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">navigation</span>',
		},
		children: [
			{
				path: '/ui-design/breadcrumb',
				name: 'Breadcrumb',
				component: async () => await import('@/views/ui-design/breadcrumb/index.vue'),
				meta: {
					title: 'Breadcrumb',
					titleKey: 'menus.Breadcrumb',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/menu',
				name: 'Menu',
				component: async () => await import('@views/ui-design/menu/menu.vue'),
				meta: { title: 'Menu', titleKey: 'menus.Menu', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/pagination',
				name: 'Pagination',
				component: async () => await import('@/views/ui-design/pagination/pagination.vue'),
				meta: {
					title: 'Pagination',
					titleKey: 'menus.Pagination',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/tabs',
				name: 'Tabs',
				component: async () => await import('@views/ui-design/tabs/tabs.vue'),
				meta: { title: 'Tabs', titleKey: 'menus.Tabs', hidden: false, needCheckIsAdmin: false },
			},
		],
	},
	{
		path: '/ui-design/feedback',
		name: 'Feedback',
		meta: {
			title: 'Feedback',
			titleKey: 'menus.Feedback',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">feedback</span>',
		},
		children: [
			{
				path: '/ui-design/chat',
				name: 'Chat',
				component: async () => await import('@views/ui-design/chat/chat.vue'),
				meta: { title: 'Chat', titleKey: 'menus.Chat', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/dialog',
				name: 'Dialog',
				component: async () => await import('@views/ui-design/dialog/dialog.vue'),
				meta: { title: 'Dialog', titleKey: 'menus.Dialog', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/drawer',
				name: 'Drawer',
				component: async () => await import('@views/ui-design/drawer/drawer.vue'),
				meta: { title: 'Drawer', titleKey: 'menus.Drawer', hidden: false, needCheckIsAdmin: false },
			},
			{
				path: '/ui-design/info-box',
				name: 'InformationBox',
				component: async () => await import('@/views/ui-design/info-box/info-box.vue'),
				meta: {
					title: 'Information Box',
					titleKey: 'menus.Information_Box',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/tooltip',
				name: 'Tooltip',
				component: async () => await import('@/views/ui-design/tooltip/tooltip.vue'),
				meta: {
					title: 'Tooltip',
					titleKey: 'menus.Tooltip',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
		],
	},
	{
		path: '/ui-design/others',
		name: 'Others',
		meta: {
			title: 'Others',
			titleKey: 'menus.Others',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">more_horiz</span>',
		},
		children: [
			{
				path: '/ui-design/divider',
				name: 'Divider',
				component: async () => await import('@/views/ui-design/divider/divider.vue'),
				meta: {
					title: 'Divider',
					titleKey: 'menus.Divider',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
		],
	},
	{
		path: '/ui-design/blocks',
		name: 'Blocks',
		meta: {
			title: 'Blocks',
			titleKey: 'menus.Blocks',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">view_module</span>',
		},
		children: [
			{
				path: '/ui-design/blocks/title',
				name: 'Title',
				component: async () => await import('@/views/ui-design/blocks/title/index.vue'),
				meta: {
					title: 'Title',
					titleKey: 'menus.Title',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/mobile-test/list',
				name: 'AI_Test',
				component: async () => await import('@views/ui-design/mobile-test/list/index.vue'),
				meta: {
					title: 'AI_Test',
					titleKey: 'menus.AI_Test',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
			{
				path: '/ui-design/mobile-test',
				name: 'AI_Checkin',
				component: async () => await import('@views/ui-design/mobile-test/index.vue'),
				meta: {
					title: 'AI_Checkin',
					titleKey: 'menus.AI_Checkin',
					hidden: false,
					needCheckIsAdmin: false,
				},
			},
		],
	},
];
