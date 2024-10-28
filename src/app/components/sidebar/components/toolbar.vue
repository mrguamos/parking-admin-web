<template>
	<div>
		<ul>
			<li
				v-for="tool in toolbarList"
				:key="tool.path"
				class="flex flex-row items-center h-[40px] cursor-pointer"
			>
				<component
					:is="tool.icon"
					:class="[theme === 'dark' ? 'dark' : 'light', !props.collapse ? 'mr-[8px]' : '']"
				/>
				<a v-if="!props.collapse" :href="tool.path" target="_blank" class="text-[14px]">
					{{ tool.name }}
				</a>
			</li>
		</ul>
	</div>
</template>
<script setup lang="ts">
import APIIcon from '@assets/svg/layout/api.svg';
import DownloadIcon from '@assets/svg/layout/download.svg';
import FeedbackIcon from '@assets/svg/layout/feedback.svg';
import HelpIcon from '@assets/svg/layout/help.svg';
import { useTheme } from '@hooks/useTheme';
import { computed } from 'vue';

const props = defineProps({
	collapse: {
		type: Boolean,
		default: false,
	},
});

const toolbarList = [
	{
		name: 'Help',
		icon: HelpIcon,
		path: 'https://help.item.com',
	},
	{
		name: 'API',
		icon: APIIcon,
		path: 'https://api.item.com',
	},
	{
		name: 'Feedback',
		icon: FeedbackIcon,
		path: 'https://www.item.com/feedback',
	},
	{
		name: 'Download',
		icon: DownloadIcon,
		path: 'https://www.item.com/download',
	},
];

const { getTheme } = useTheme();
const theme = computed(() => {
	return getTheme().theme;
});
</script>
<style scoped lang="scss">
::v-deep .dark {
	& path {
		@apply fill-white-100;
	}
}
::v-deep .light {
	& path {
		@apply fill-gray-800;
	}
}
</style>
