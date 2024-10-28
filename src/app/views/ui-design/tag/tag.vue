<template>
	<h1 class="text-title-page">Tag / Chip</h1>

	<article>
		<p class="text-body mt-4">
			Chips are versatile user interface (UI) elements that come in various forms, each serving
			specific purposes and enhancing the user experience.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Basic usage</h2>

	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col :sm="24">
				<div class="flex gap-2">
					<el-tag effect="dark" type="primary">Tag 1</el-tag>
					<el-tag effect="dark" type="success">Tag 2</el-tag>
					<el-tag effect="dark" type="info">Tag 3</el-tag>
					<el-tag effect="dark" type="warning">Tag 4</el-tag>
					<el-tag effect="dark" type="danger">Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="light" type="primary">Tag 1</el-tag>
					<el-tag effect="light" type="success">Tag 2</el-tag>
					<el-tag effect="light" type="info">Tag 3</el-tag>
					<el-tag effect="light" type="warning">Tag 4</el-tag>
					<el-tag effect="light" type="danger">Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="plain" type="primary">Tag 1</el-tag>
					<el-tag effect="plain" type="success">Tag 2</el-tag>
					<el-tag effect="plain" type="info">Tag 3</el-tag>
					<el-tag effect="plain" type="warning">Tag 4</el-tag>
					<el-tag effect="plain" type="danger">Tag 5</el-tag>
				</div>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Rounded</h2>

	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col :sm="24">
				<div class="flex gap-2">
					<el-tag effect="dark" type="primary" round>Tag 1</el-tag>
					<el-tag effect="dark" type="success" round>Tag 2</el-tag>
					<el-tag effect="dark" type="info" round>Tag 3</el-tag>
					<el-tag effect="dark" type="warning" round>Tag 4</el-tag>
					<el-tag effect="dark" type="danger" round>Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="light" type="primary" round>Tag 1</el-tag>
					<el-tag effect="light" type="success" round>Tag 2</el-tag>
					<el-tag effect="light" type="info" round>Tag 3</el-tag>
					<el-tag effect="light" type="warning" round>Tag 4</el-tag>
					<el-tag effect="light" type="danger" round>Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="plain" type="primary" round>Tag 1</el-tag>
					<el-tag effect="plain" type="success" round>Tag 2</el-tag>
					<el-tag effect="plain" type="info" round>Tag 3</el-tag>
					<el-tag effect="plain" type="warning" round>Tag 4</el-tag>
					<el-tag effect="plain" type="danger" round>Tag 5</el-tag>
				</div>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Closeable</h2>

	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col :sm="24">
				<div class="flex gap-2">
					<el-tag effect="dark" type="primary" closable>Tag 1</el-tag>
					<el-tag effect="dark" type="success" closable>Tag 2</el-tag>
					<el-tag effect="dark" type="info" closable>Tag 3</el-tag>
					<el-tag effect="dark" type="warning" closable>Tag 4</el-tag>
					<el-tag effect="dark" type="danger" closable>Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="light" type="primary" closable>Tag 1</el-tag>
					<el-tag effect="light" type="success" closable>Tag 2</el-tag>
					<el-tag effect="light" type="info" closable>Tag 3</el-tag>
					<el-tag effect="light" type="warning" closable>Tag 4</el-tag>
					<el-tag effect="light" type="danger" closable>Tag 5</el-tag>
				</div>
			</el-col>
			<el-col :sm="24" class="mt-2">
				<div class="flex gap-2">
					<el-tag effect="plain" type="primary" closable>Tag 1</el-tag>
					<el-tag effect="plain" type="success" closable>Tag 2</el-tag>
					<el-tag effect="plain" type="info" closable>Tag 3</el-tag>
					<el-tag effect="plain" type="warning" closable>Tag 4</el-tag>
					<el-tag effect="plain" type="danger" closable>Tag 5</el-tag>
				</div>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">With Icon</h3>

	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<div class="flex gap-2">
					<el-tag effect="dark" type="primary">
						<el-icon><span class="material-icons">circle</span></el-icon>
						Label
					</el-tag>
					<el-tag effect="plain" type="success" closable>
						<el-icon><span class="material-icons">circle</span></el-icon>
						Label
					</el-tag>
					<el-tag effect="light" type="success" closable round>
						<el-icon><span class="material-icons">circle</span></el-icon>
						Label
					</el-tag>
				</div>
			</el-col>
		</el-row>
	</div>

	<h2 class="text-subtitle mt-8">Checkable</h2>

	<div class="mt-4 p-10 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col :sm="24">
				<div class="flex gap-2">
					<el-check-tag :checked="checked1" type="primary" @change="onChange1">
						<el-icon>
							<span class="material-icons is-inactive">add</span>
							<span class="material-icons is-active">remove</span>
						</el-icon>
						Tag 1
					</el-check-tag>
					<el-check-tag :checked="checked2" type="success" @change="onChange2">
						<el-icon>
							<span class="material-icons is-inactive">add</span>
							<span class="material-icons is-active">remove</span>
						</el-icon>
						Tag 2
					</el-check-tag>
					<el-check-tag :checked="checked3" type="info" @change="onChange3">
						<el-icon>
							<span class="material-icons is-inactive">add</span>
							<span class="material-icons is-active">remove</span>
						</el-icon>
						Tag 3
					</el-check-tag>
					<el-check-tag :checked="checked4" type="warning" @change="onChange4">
						<el-icon>
							<span class="material-icons is-inactive">add</span>
							<span class="material-icons is-active">remove</span>
						</el-icon>
						Tag 4
					</el-check-tag>
					<el-check-tag :checked="checked5" type="danger" @change="onChange5">
						<el-icon>
							<span class="material-icons is-inactive">add</span>
							<span class="material-icons is-active">remove</span>
						</el-icon>
						Tag 5
					</el-check-tag>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(false);
const checked2 = ref(false);
const checked3 = ref(false);
const checked4 = ref(false);
const checked5 = ref(false);

const onChange1 = (status: boolean) => {
  checked1.value = status
}

const onChange2 = (status: boolean) => {
  checked2.value = status
}

const onChange3 = (status: boolean) => {
  checked3.value = status
}

const onChange4 = (status: boolean) => {
  checked4.value = status
}

const onChange5 = (status: boolean) => {
  checked5.value = status
}
</script>
