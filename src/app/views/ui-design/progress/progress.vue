<template>
	<h1 class="text-title-page">Progress</h1>

	<article>
		<p class="text-body mt-4">
			A progress bar is a visual tool that depicts the advancement or completion of a task, giving
			users clarity on the amount of work done and the duration of wait time. Used in diverse
			applications like file uploads and software installations, it enhances user experience by
			minimizing uncertainty.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col class="mb-2">
				<el-progress :percentage="0" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="50" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="100" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="100" :format="format" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="100" status="success" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="25" status="warning" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :percentage="50" status="exception" />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">No Label</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col class="mb-2">
				<el-progress :show-text="false" :percentage="0" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :show-text="false" :percentage="50" />
			</el-col>
			<el-col class="mb-2">
				<el-progress :show-text="false" :percentage="100" />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Top Floating Label</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="0">
					<template #default="{ percentage }">
						<el-tag
							type="info"
							size="small"
							class="sticky right-0 mb-[100%] -mt-1 -translate-y-full"
						>
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="50">
					<template #default="{ percentage }">
						<el-tag
							type="info"
							size="small"
							class="sticky right-0 mb-[100%] -mt-1 -translate-y-full"
						>
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="100">
					<template #default="{ percentage }">
						<el-tag
							type="info"
							size="small"
							class="sticky right-0 mb-[100%] -mt-1 -translate-y-full"
						>
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Bottom Floating Label</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="0">
					<template #default="{ percentage }">
						<el-tag type="info" size="small" class="sticky right-0 translate-y-[10px]">
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="50">
					<template #default="{ percentage }">
						<el-tag type="info" size="small" class="sticky right-0 translate-y-[10px]">
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :text-inside="true" :percentage="100">
					<template #default="{ percentage }">
						<el-tag type="info" size="small" class="sticky right-0 translate-y-[10px]">
							{{ percentage }}%
						</el-tag>
					</template>
				</el-progress>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Title & Percentage</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col class="mb-10">
				<el-progress :percentage="0" class="flex flex-col-reverse gap-1 [&>*]:w-full">
					<template #default="{ percentage }">
						<div class="flex items-center justify-between">
							<span class="text-body">Title</span>
							<span class="text-small">{{ percentage }}%</span>
						</div>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :percentage="50" class="flex flex-col-reverse gap-1 [&>*]:w-full">
					<template #default="{ percentage }">
						<div class="flex items-center justify-between">
							<span class="text-body">Title</span>
							<span class="text-small">{{ percentage }}%</span>
						</div>
					</template>
				</el-progress>
			</el-col>
			<el-col class="mb-10">
				<el-progress :percentage="100" class="flex flex-col-reverse gap-1 [&>*]:w-full">
					<template #default="{ percentage }">
						<div class="flex items-center justify-between">
							<span class="text-body">Title</span>
							<span class="text-small">{{ percentage }}%</span>
						</div>
					</template>
				</el-progress>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`);
</script>
