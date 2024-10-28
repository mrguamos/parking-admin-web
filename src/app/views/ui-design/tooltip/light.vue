<template>
	<div class="tooltip-base-box">
		<div class="row center">
			<el-tooltip effect="light" content="Top Left prompts info" placement="top-start">
				<el-button>top-start</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Top Center prompts info" placement="top">
				<el-button>top</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Top Right prompts info" placement="top-end">
				<el-button>top-end</el-button>
			</el-tooltip>
		</div>
		<div class="row">
			<el-tooltip effect="light" content="Left Top prompts info" placement="left-start">
				<el-button>left-start</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Right Top prompts info" placement="right-start">
				<el-button>right-start</el-button>
			</el-tooltip>
		</div>
		<div class="row">
			<el-tooltip effect="light" content="Left Center prompts info" placement="left">
				<el-button class="mt-3 mb-3">left</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Right Center prompts info" placement="right">
				<el-button>right</el-button>
			</el-tooltip>
		</div>
		<div class="row">
			<el-tooltip effect="light" content="Left Bottom prompts info" placement="left-end">
				<el-button>left-end</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Right Bottom prompts info" placement="right-end">
				<el-button>right-end</el-button>
			</el-tooltip>
		</div>
		<div class="row center">
			<el-tooltip effect="light" content="Bottom Left prompts info" placement="bottom-start">
				<el-button>bottom-start</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Bottom Center prompts info" placement="bottom">
				<el-button>bottom</el-button>
			</el-tooltip>
			<el-tooltip effect="light" content="Bottom Right prompts info" placement="bottom-end">
				<el-button>bottom-end</el-button>
			</el-tooltip>
		</div>
	</div>
</template>

<style>
.tooltip-base-box {
	width: 600px;
}
.tooltip-base-box .row {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.tooltip-base-box .center {
	justify-content: center;
}
</style>
