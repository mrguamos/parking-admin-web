<template>
	<h1 class="text-title-page">Date Picker</h1>

	<article>
		<p class="text-body mt-4">
			The Date Picker components is meticulously designed to offer an intuitive and user-friendly
			experience for effortlessly choosing dates and managing schedules.
		</p>
		<p class="text-body mt-4">
			This component presents a clean and organized interface that allows users to interact with
			ease. Users can navigate through months and years, select specific dates, and even choose date
			ranges, all with a few clicks or taps. The calendar layout is clear and visually pleasing,
			ensuring that users can quickly identify available dates or deadlines.
		</p>
		<p class="text-body mt-4">
			Our Date Picker component offers customizable options to seamlessly integrate into your
			design, enabling you to match it with your interface's overall look and feel.
		</p>
	</article>

	<h2 class="text-subtitle mt-8">Base</h2>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col :md="12">
				<date-picker />
			</el-col>
			<el-col :md="12">
				<date-time-picker />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">Date and time range</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<date-time-range />
			</el-col>
		</el-row>
	</div>

	<h3 class="text-subtitle mt-8">With shortcuts</h3>

	<div class="mt-4 p-10 pb-6 rounded-3xl bg-secondary">
		<el-row :gutter="40" class="mb-4">
			<el-col>
				<date-time-range-shortcuts />
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts" setup>
import DatePicker from './basic.vue';
import DateTimePicker from './datetime-picker.vue';
import DateTimeRange from './datetime-range.vue';
import DateTimeRangeShortcuts from './datetime-range-shortcuts.vue';
</script>
