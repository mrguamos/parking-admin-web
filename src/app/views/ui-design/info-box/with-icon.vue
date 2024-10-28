<template>
	<el-alert class="show-icon" type="theme">
		<div class="flex items-start">
			<i class="el-icon el-alert__icon is-big">
				<span class="material-icons-outlined">info</span>
			</i>
			<div class="pr-4">
				<p>Themed information</p>
			</div>
		</div>
	</el-alert>
	<br />
	<el-alert show-icon type="success">Success information</el-alert>
	<br />
	<el-alert show-icon type="info">Info information</el-alert>
	<br />
	<el-alert show-icon type="warning">Warning information</el-alert>
	<br />
	<el-alert show-icon type="error">Error information</el-alert>
</template>
