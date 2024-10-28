<script setup lang="ts">
import { useTheme } from '@hooks/useTheme';
import { computed, onMounted, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';
import { useTitle } from '@vueuse/core';

const { initTheme } = useTheme();
const { t, locale } = useI18n();
const i18nStore = useI18nStore();

const route = useRoute();
const title = useTitle();

const localeForElePlus = computed(() => i18nStore.getElePlusLocalByLang(locale.value));

watch([route, locale], () => {
	updWebsiteTitle();
});

onMounted(() => {
	initTheme();
});

const updWebsiteTitle = () => {
	const projTitle = linc.VITE_PROJECT_NAME;
	if (!route.meta.titleKey) {
		title.value = projTitle;
		return;
	}
	title.value = `${t(route.meta.titleKey)} - ${projTitle}`;
};
</script>

<template>
	<el-config-provider :locale="localeForElePlus">
		<router-view></router-view>
	</el-config-provider>
</template>

<style scoped lang="scss"></style>
