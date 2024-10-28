<template>
	<h1 class="text-title-page">Stepper</h1>

	<article>
		<p class="text-body mt-4">
			A stepper, also known as a stepper control or stepper component, allows users to incrementally
			increase or decrease a value within a predefined range.
		</p>
		<p class="text-body mt-4">
			Steppers are commonly used in UIs that involve numeric input or require controlled adjustments
			to a value. They provide a user-friendly and intuitive way to increment or decrement values,
			such as quantities, sizes, or numerical settings. Steppers help maintain data integrity by
			ensuring that users can only input valid values.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Filled</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<el-row :gutter="20" class="mb-4">
					<el-col :md="8">
						<el-input-number
							v-model="num_1"
							:min="1"
							:max="10"
							class="is-filled"
							@change="handleChange"
						/>
					</el-col>
					<el-col :md="8">
						<el-input-number
							v-model="num_2"
							:min="1"
							:max="10"
							class="is-filled"
							@change="handleChange"
						/>
					</el-col>
					<el-col :md="8">
						<el-input-number
							v-model="num_3"
							:min="1"
							:max="10"
							class="is-filled"
							@change="handleChange"
						/>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Outlined</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40">
			<el-col>
				<el-row :gutter="20" class="mb-4">
					<el-col :md="8">
						<el-input-number
							v-model="num_1"
							:min="1"
							:max="10"
							class="is-outlined"
							@change="handleChange"
						/>
					</el-col>
					<el-col :md="8">
						<el-input-number
							v-model="num_2"
							:min="1"
							:max="10"
							class="is-outlined"
							@change="handleChange"
						/>
					</el-col>
					<el-col :md="8">
						<el-input-number
							v-model="num_3"
							:min="1"
							:max="10"
							class="is-outlined"
							@change="handleChange"
						/>
					</el-col>
				</el-row>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const num_1 = ref(1);
const num_2 = ref(5);
const num_3 = ref(10);
const handleChange = (value: number) => {
	console.log(value);
};
</script>
