import { RouteRecordRaw } from 'vue-router';

export const uiDesignRouters: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'Home',
		component: async () => await import('@views/home/home.vue'),
		meta: {
			title: 'Home',
			titleKey: 'menus.Home',
			hidden: false,
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
			icon: '<span class="material-icons-outlined">local_parking</span>',
		},
	},
	{
		path: '/parking-lots/:id?/form',
		name: 'ParkingLotsForm',
		component: async () => await import('@views/parking-lots/parking-lots-form.vue'),
		meta: {
			title: 'Parking Lot Form',
			hidden: true
		}
	},
	{
		path: '/reservations',
		name: 'Reservations',
		component: async () => await import('@views/reservations/reservations-list.vue'),
		meta: {
			title: 'Reservations',
			titleKey: 'menus.Reservations',
			hidden: false,
			icon: '<span class="material-icons-outlined">calendar_month</span>',
		},
	},
	{
		path: '/parkers',
		name: 'Parkers',
		component: async () => await import('@views/parkers/parkers-list.vue'),
		meta: {
			title: 'Parker Accounts',
			titleKey: 'menus.Parker_Accounts',
			hidden: false,
			icon: '<span class="material-icons-outlined">group</span>',
		},
	},
	{
		path: '/users',
		name: 'Users',
		component: async () => await import('@views/users/users-list.vue'),
		meta: {
			title: 'Users',
			titleKey: 'menus.Users',
			hidden: false,
			needCheckIsAdmin: true,
			icon: '<span class="material-icons-outlined">person</span>',
		},
	},
	{
		path: '/rfid-tags',
		name: 'RFIDTags',
		component: async () => await import('@views/rfid-tags/rfid-tags-list.vue'),
		meta: {
			title: 'RFID Tags',
			titleKey: 'menus.RFID_Tags',
			hidden: false,
			icon: '<span class="material-icons-outlined">nfc</span>',
		},
	},
	{
		path: '/settings',
		name: 'Settings',
		meta: {
			title: 'Settings',
			titleKey: 'menus.Settings',
			hidden: false,
			icon: '<span class="material-icons-outlined">settings</span>',
		},
		children: [
			{
				path: '/settings/account',
				name: 'AccountInfo',
				component: async () => await import('@views/settings/account/account.vue'),
				meta: {
					title: 'Account Info',
					titleKey: 'menus.Account_Info',
					icon: '<span class="material-icons-outlined">person</span>',
				},
			},
			{
				path: '/settings/password',
				name: 'ChangePassword',
				component: async () => await import('@views/settings/password/password.vue'),
				meta: {
					title: 'Change Password',
					titleKey: 'menus.Change_Password',
					icon: '<span class="material-icons-outlined">lock</span>',
				},
			},
			{
				path: '/settings/payouts',
				name: 'Payouts',
				component: async () => await import('@views/settings/payouts/payouts.vue'),
				meta: {
					title: 'Payouts',
					titleKey: 'menus.Payouts',
					icon: '<span class="material-icons-outlined">account_balance_wallet</span>',
				},
			}
		],
	},
	{
		path: '/parkers/:id',
		name: 'ParkerDetails',
		component: async () => await import('@views/parkers/parker-details.vue'),
		meta: {
			title: 'Parker Details',
			hidden: true
		}
	}
];
