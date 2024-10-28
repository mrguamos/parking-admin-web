<template>
	<h1 class="text-title-page">Typography</h1>

	<article>
		<p class="text-body mt-4">
			Helvetica Now is a widely recognized and popular typeface that exudes a sense of modernity and
			versatility.
		</p>
	</article>

	<div class="mt-8 p-10 pb-0 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Title Hero</div>
				<p class="text-small text-gray-600">
					Large attention-grabbing typography used primarily for decorative or expressive purposes.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-title-hero">Title Hero</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Title Page</div>
				<p class="text-small text-gray-600">
					Title of the page or main content.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-title-page">Title Page</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Subtitle</div>
				<p class="text-small text-gray-600">
					The title of the section, or box who are the first level in the main content.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-subtitle">Subtitle</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Heading</div>
				<p class="text-small text-gray-600">
					The title of the modal, drawer, dialog, popup and the page title of mobile device.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-heading">Heading</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Subheading</div>
				<p class="text-small text-gray-600">
					The title of the small box or card who are in the sections.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-subheading">Subheading</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Body</div>
				<p class="text-small text-gray-600">
					Default text size for the main content of the page, paragraph, and the text in the card or box.
				</p>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-body">Body</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Body Strong</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-body">Body Strong</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Body Uppercase</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-body-uppercase">Body Uppercase</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Small</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-small">Small</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Small Strong</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-small-strong">Small Strong</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Small Uppercase</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-small-uppercase">Small Uppercase</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Tiny</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-tiny">Tiny</span>
				</div>
			</el-col>
		</el-row>

		<el-row :gutter="40" class="mt-6">
			<el-col :xs="24" :lg="5" class="mb-2">
				<div class="text-heading">Tiny Uppercase</div>
			</el-col>
			<el-col :xs="24" :lg="19">
				<div class="min-h-24 p-4 flex items-center justify-center rounded-md border border-gray-100">
					<span class="text-tiny-uppercase">Tiny Uppercase</span>
				</div>
			</el-col>
		</el-row>

	</div>
</template>
