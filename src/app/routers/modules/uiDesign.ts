import { RouteRecordRaw } from 'vue-router';

export const uiDesignRouters: RouteRecordRaw[] = [
	{
		path: '/home',
		name: 'Home',
		component: async () => await import('@views/home/home.vue'),
		meta: {
			title: 'Home',
			titleKey: 'menus.Home',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">home</span>',
		},
	},
	{
		path: '/parking-lots',
		name: 'ParkingLots',
		component: async () => await import('@views/parking-lots/parking-lots-list.vue'),
		meta: {
			title: 'Parking Lots',
			titleKey: 'menus.Parking_Lots',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">local_parking</span>',
		},
	},
	{
		path: '/reservations',
		name: 'Reservations',
		component: async () => await import('@views/reservations/reservations-list.vue'),
		meta: {
			title: 'Reservations',
			titleKey: 'menus.Reservations',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">calendar_month</span>',
		},
	},
	{
		path: '/settings',
		name: 'Settings',
		component: async () => await import('@views/settings/settings.vue'),
		meta: {
			title: 'Settings',
			titleKey: 'menus.Settings',
			hidden: false,
			needCheckIsAdmin: false,
			icon: '<span class="material-icons-outlined">settings</span>',
		},
	},
];
