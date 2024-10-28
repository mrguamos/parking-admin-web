<template>
	<div class="page-navbar">
		<el-page-header :icon="null">
			<template #title />
			<template #content>
				<div class="flex items-center">
					<el-button type="info" class="rounded-none" text circle size="large" :icon="HomeFilled"
						@click="goToHomePage"></el-button>
				</div>
			</template>
			<template #extra>
				<div class="flex items-center">
					<el-dropdown>
						<span class="el-dropdown-link flex items-center mr-4 outline-0">
							<el-icon class="mr-1 text-[20px]">
								<span class="material-icons-outlined">
									g_translate
								</span>
							</el-icon>
							{{ t('common.language') }}
							<el-icon class="ml-1">
								<span class="material-icons-outlined">
									expand_more
								</span>
							</el-icon>
						</span>
						<template #dropdown>
							<el-dropdown-menu>
								<el-dropdown-item v-for="lang in SUPPORT_LOCALES" :key="lang.val" :class="[]"
									@click="changeLanguage(lang.val)">
									{{ lang.label }}
								</el-dropdown-item>
							</el-dropdown-menu>
						</template>
					</el-dropdown>
					<div class="flex items-center relative group">
						<div class="flex flex-row justify-between items-center">
							<el-badge :value="99">
								<el-avatar size="" class="is-themed">{{ firstName }}</el-avatar>
							</el-badge>
							<el-icon>
								<span class="material-icons-outlined">
									expand_more
								</span>
							</el-icon>
						</div>
						<ul
							class="absolute top-full -right-5 w-56 p-4 bg-secondary rounded-b-lg z-[10000] hidden group-hover:block">
							<li class="flex flex-row items-center justify-between">
								<span v-if="themeMode === 'dark'" class="flex items-center">
									<el-icon class="text-2xl">
										<span class="material-icons-outlined">
											dark_mode
										</span>
									</el-icon>
									<span class="ml-2 text-small">Dark Mode</span>
								</span>
								<span v-else class="flex items-center">
									<el-icon class="text-2xl">
										<span class="material-icons-outlined">
											light_mode
										</span>
									</el-icon>
									<span class="ml-2 text-small">Light Mode</span>
								</span>
								<el-switch v-model="modeSwitch" style="
										--el-switch-on-color: var(--purple-600);
										--el-switch-off-color: var(--orange-500);
									"@click="changeMode" />
							</li>
							<el-divider />
							<li class="flex flex-row items-center justify-between">
								<span class="flex items-center">
									<el-icon class="text-2xl">
										<span class="material-icons-outlined">
											palette
										</span>
									</el-icon>
									<span class="ml-2 text-small">Theme</span>
								</span>
								<span class="flex items-center gap-1">
									<span class="unis-blue block cursor-pointer" @click="changeTheme('unis-blue')">
										<span class="flex items-center justify-center rounded w-8 h-8 bg-brand">
											<el-icon v-if="themeName === 'unis-blue'"
												class="text-xl text-on-brand">
												<span class="material-icons-outlined">
													done
												</span>
											</el-icon>
										</span>
									</span>
									<span class="item-purple block cursor-pointer" @click="changeTheme('item-purple')">
										<span class="flex items-center justify-center rounded w-8 h-8 bg-brand">
											<el-icon v-if="themeName === 'item-purple'"
												class="text-xl text-on-brand">
												<span class="material-icons-outlined">
													done
												</span>
											</el-icon>
										</span>
									</span>
								</span>
							</li>
							<el-divider />
							<li class="flex items-center">
								<el-button class="w-full">
									<el-icon>
										<span class="material-icons-outlined">logout</span>
									</el-icon>
									Logout
								</el-button>
							</li>
						</ul>
					</div>
				</div>
			</template>
		</el-page-header>
	</div>
</template>
<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { HomeFilled } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';
import { useLang } from '@hooks/useLang';
import { SUPPORT_LOCALES } from '@constants/i18n';
import { useTheme } from '@hooks/useTheme';
import { ThemeMode } from '@constants/theme';
import { session } from '@services/session.service';

const Router = useRoute();
const { getMode, setMode, getTheme, setTheme } = useTheme();

const username = ref('');
const isEditRoute = ref(false);
const themeMode = ref(getMode().mode);
const themeName = ref(getTheme().theme);

const firstName = computed(() => {
	if (!username.value) return '';
	return username.value.charAt(0).toUpperCase();
});

const mode = computed(() => {
	return getMode().mode;
});

let modeSwitch = computed(() => {
	return mode.value === ThemeMode.DARK ? true : false;
});

const changeMode = () => {
	const modeValue = getMode().mode;
	setMode(modeValue === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK);
	// TODO:优化
	if (
		localStorage.mode === ThemeMode.DARK ||
		(!('mode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		document.documentElement.classList.add(ThemeMode.DARK);
	} else {
		document.documentElement.classList.remove(ThemeMode.DARK);
	}
	themeMode.value = getMode().mode;
};

const changeTheme = (t: string) => {
	setTheme(t);
	themeName.value = getTheme().theme;
};

watch(
	() => Router,
	(newVal: any) => {
		isEditRoute.value = newVal.meta.isEdit || false;
	},
	{
		deep: true,
		immediate: true,
	}
);

const goToHomePage = () => {
	router.push('/');
};

onMounted(() => {
	// let userInfo: any = localStorage.getItem('userInfo');
	// userInfo = userInfo && JSON.parse(userInfo);
	// username.value = userInfo.username;
});

const { t, locale } = useI18n();
const currentLocale = ref(locale.value);
const { changeLang } = useLang();

const changeLanguage = (lang: string) => {
	currentLocale.value = lang;
	changeLang(lang);
};

const logOut = () => {
	session.clean();
	router.push({ name: 'login' });
};
</script>
