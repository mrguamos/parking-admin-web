<template>
	<h1 class="text-title-page">{{ t('color.title') }}</h1>

	<article>
		<p class="text-body mt-4">
			{{ t('color.desc1') }}
		</p>
		<p class="text-body mt-4">
			{{ t('color.basicOverviewDesc') }}
		</p>
		<ol class="text-body mt-4 list-decimal ml-6">
			<i18n-t keypath="color.basicOveview1.content" tag="li">
				<template #title>
					<strong>{{ t('color.basicOveview1.title') }}</strong>
				</template>
			</i18n-t>
			<i18n-t keypath="color.basicOveview2.content" tag="li">
				<template #title>
					<strong>{{ t('color.basicOveview2.title') }}</strong>
				</template>
			</i18n-t>
			<i18n-t keypath="color.basicOveview3.content" tag="li">
				<template #title>
					<strong>{{ t('color.basicOveview3.title') }}</strong>
				</template>
			</i18n-t>
		</ol>
	</article>

	<div class="mt-8 p-10 pb-0 rounded-3xl bg-secondary">
		<el-row v-for="(colors, name) in colorGroup" :key="name" :gutter="40">
			<el-col :xs="24" :md="3" class="mb-2">
				<span class="text-body-strong capitalize">{{ name }}</span>
			</el-col>
			<el-col :xs="24" :md="21">
				<el-row :gutter="20" class="mb-4">
					<el-col
						v-for="(color, number) in colors"
						:key="color"
						:xs="8"
						:sm="6"
						:md="6"
						:lg="4"
						flex
						flex-col
					>
						<div
							class="h-10 rounded-md border border-gray-100"
							:style="`background-color: ${color}`"
						></div>
						<el-row class="flex justify-between items-center mt-2 mb-8">
							<span class="text-tiny-uppercase">{{ number }}</span>
							<span class="text-tiny uppercase">{{ color }}</span>
						</el-row>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>
<script lang="ts" setup>
import colorGroup from '@styles/design-system/tailwind-base.json';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
