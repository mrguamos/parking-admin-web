<template>
	<el-alert class="show-icon" type="theme">
		<div class="flex items-start">
			<i class="el-icon el-alert__icon is-big">
				<span class="material-icons-outlined">info</span>
			</i>
			<div class="pr-4">
				<span class="el-alert__title">Alert title</span>
				<p class="el-alert__description">An example with both icon and description.</p>
			</div>
		</div>
		<div class="flex justify-end">
			<el-button type="primary">Action</el-button>
		</div>
	</el-alert>
	<br />
	<el-alert show-icon type="success" title="Alert title">
		An example with both icon and description.
		<div class="flex justify-end">
			<el-button type="primary">Action</el-button>
		</div>
	</el-alert>
	<br />
	<el-alert show-icon type="info" title="Alert title">
		An example with both icon and description.
		<div class="flex justify-end">
			<el-button type="primary">Action</el-button>
		</div>
	</el-alert>
	<br />
	<el-alert show-icon type="warning" title="Alert title">
		An example with both icon and description.
		<div class="flex justify-end">
			<el-button type="primary">Action</el-button>
		</div>
	</el-alert>
	<br />
	<el-alert show-icon type="error" title="Alert title">
		An example with both icon and description.
		<div class="flex justify-end">
			<el-button type="primary">Action</el-button>
		</div>
	</el-alert>
</template>
