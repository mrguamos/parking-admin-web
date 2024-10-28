<template>
	<h1 class="text-title-page">Text Field / Text Area</h1>

	<article>
		<p class="text-body mt-4">
			A text field is a UI component that allows users to input and edit text or alphanumeric data.
			It is a fundamental input element used in various forms, search boxes, messaging applications,
			and other scenarios where users need to enter textual information.
		</p>
		<p class="text-body mt-4">
			Text fields are a core component in user interfaces, enabling users to interact and input
			textual information. They play a vital role in data entry, search functionalities, and
			messaging applications, providing users with a familiar and efficient means to enter and edit
			text-based content.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px" :model="input">
			<el-row :gutter="40">
				<el-col :xs="24" :lg="4" class="mb-2">
					<div class="text-body-strong capitalize">Input Only</div>
				</el-col>
				<el-col :xs="24" :lg="20">
					<el-row :gutter="20" class="mb-4">
						<el-col :sm="12">
							<el-input v-model="input.string" placeholder="placeholder" clearable />
						</el-col>
						<el-col :sm="12">
							<el-input v-model="input.string" placeholder="placeholder" disabled />
						</el-col>
					</el-row>
				</el-col>
			</el-row>

			<el-divider />

			<el-row :gutter="40">
				<el-col :xs="24" :lg="4" class="mb-2">
					<div class="text-body-strong capitalize">With Label</div>
				</el-col>
				<el-col :xs="24" :lg="20">
					<el-row :gutter="20" class="mb-4">
						<el-col :sm="12">
							<el-form-item label="Label">
								<el-input v-model="input.string" placeholder="placeholder" clearable />
							</el-form-item>
						</el-col>
						<el-col :sm="12">
							<el-form-item label="Label">
								<el-input v-model="input.string" placeholder="placeholder" disabled />
							</el-form-item>
						</el-col>
					</el-row>
				</el-col>
			</el-row>

			<el-divider />

			<el-row :gutter="40">
				<el-col :xs="24" :lg="4" class="mb-2">
					<div class="text-body-strong capitalize">With Icon</div>
				</el-col>
				<el-col :xs="24" :lg="20">
					<el-row :gutter="20" class="mb-4">
						<el-col :sm="12">
							<el-form-item label="Label">
								<el-input
									v-model="input.string"
									placeholder="placeholder"
									:prefix-icon="IconSearch"
									:suffix-icon="IconSearch"
								/>
							</el-form-item>
						</el-col>
						<el-col :sm="12">
							<el-form-item label="Label">
								<el-input
									v-model="input.string"
									placeholder="placeholder"
									:prefix-icon="IconSearch"
									:suffix-icon="IconSearch"
									disabled
								/>
							</el-form-item>
						</el-col>
					</el-row>
				</el-col>
			</el-row>
		</el-form>
	</div>

	<h3 class="text-subtitle mt-8">Password box</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px" :model="input">
			<el-row :gutter="20" class="mb-4">
				<el-col>
					<el-form-item label="Password">
						<el-input
							v-model="input.pws"
							size="large"
							type="password"
							placeholder="Please input password"
							show-password
						/>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>

	<h3 class="text-subtitle mt-8">Textarea</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px" :model="input">
			<el-row :gutter="20" class="mb-4">
				<el-col>
					<el-form-item label="Fixed Height">
						<el-input v-model="textarea" :rows="3" type="textarea" placeholder="Please input" />
					</el-form-item>
					<el-form-item label="Autosize">
						<el-input v-model="textarea" type="textarea" autosize placeholder="Please input" />
					</el-form-item>
					<el-form-item label="Autosize - minRows: 2, maxRows: 4">
						<el-input
							v-model="textarea"
							type="textarea"
							:autosize="{ minRows: 2, maxRows: 4 }"
							placeholder="Please input"
						/>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>

	<h3 class="text-subtitle mt-8">Mixed input</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-form label-position="top" label-width="100px" :model="input">
			<el-row :gutter="20" class="mb-4">
				<el-col>
					<el-form-item>
						<el-input
							v-model="input.string"
							:prefix-icon="IconSearch"
							placeholder="Search"
							class="input-append-button"
						>
							<template #append>
								<el-button type="primary">Search</el-button>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="input.string" placeholder="Search" class="input-append-button">
							<template #prepend>Http://</template>
							<template #append>
								<el-button type="primary" circle>
									<el-icon>
										<span class="material-icons-outlined">search</span>
									</el-icon>
								</el-button>
							</template>
						</el-input>
					</el-form-item>
					<el-form-item>
						<el-input v-model="input.string" placeholder="Please input">
							<template #append>.com</template>
						</el-input>
					</el-form-item>
				</el-col>
			</el-row>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import IconSearch from '@assets/svg/global/Search.svg';

import { reactive, ref } from 'vue';
const input = reactive({
	string: '',
	pws: '',
});
const textarea = ref('');
</script>
