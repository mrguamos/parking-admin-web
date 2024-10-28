<template>
	<div class="chat-container relative overflow-y-auto min-w-96 rounded bg-white">
		<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
			<div class="text-center">
				<h1 class="text-title-hero">Welcome to Chat</h1>
				<p class="mt-3 text-body">Chat with our team to get help with your queries.</p>
			</div>
			<div class="mt-16 space-y-5">
				<bubble :show-buttons="true">Hello, how can I help you today?</bubble>
				<bubble :current-user="true" :avatar-type="userInfo.avatarType" :avatar="userInfo.avatar">
					Nothing, just browsing.
				</bubble>
				<bubble :show-buttons="true">
					<div class="space-y-1.5">
						<p class="text-body">Extra content here:</p>
						<ul class="list-disc list-outside space-y-1.5 ps-3.5">
							<li class="text-body">
								<a class="text-body text-primary-foreground hover:underline" href="#/table">
									Table Component
								</a>
							</li>
							<li class="text-body">
								<a
									class="text-body text-primary-foreground hover:underline"
									href="https://prismjs.com/index.html"
									target="_blank"
								>
									Prism: Syntax Highlighter
								</a>
							</li>
						</ul>
					</div>
				</bubble>
				<bubble :current-user="true" :avatar-type="userInfo.avatarType" :avatar="userInfo.avatar">
					Show me the table component.
				</bubble>
				<bubble :show-buttons="true">
					Sure, here is the table component:
					<template #extraContent>
						<div class="mt-2">
							<div class="table-container">
								<el-table :data="tableData1" border header-dragend style="width: 100%">
									<el-table-column prop="name" label="Name" width="180" />
									<el-table-column prop="address" label="Address" />
									<el-table-column prop="date" label="Date" width="180" />
								</el-table>
							</div>
						</div>
					</template>
				</bubble>
				<bubble :current-user="true" :avatar-type="userInfo.avatarType" :avatar="userInfo.avatar">
					Show me the code.
				</bubble>
				<bubble :show-buttons="true">
					Of course!
					<template #extraContent>
						<div class="mt-2">
							<pre><code class="language-html">
								{{ code1 }}
							</code></pre>
						</div>
					</template>
				</bubble>
			</div>
		</div>
		<footer
			class="max-w-4xl mx-auto sticky bottom-0 z-10 bg-white border-t border-primary-border pt-2 pb-4 sm:pt-4 sm:pb-6 px-4 sm:px-6 lg:px-0"
		>
			<div class="flex justify-between items-center px-4 mb-3">
				<el-button text>
					<i class="el-icon"><span class="material-icons-outlined">add</span></i>
					<span class="ms-2">New Chat</span>
				</el-button>
				<el-button type="primary">
					<i class="el-icon"><span class="material-icons">stop</span></i>
					<span class="ms-2">Stop generating</span>
				</el-button>
			</div>
			<div class="relative px-4">
				<el-input
					v-model="message"
					placeholder="Ask me anything..."
					type="textarea"
					clearable
					:rows="3"
					class="[&>textarea]:pb-12 block w-full"
				/>
				<div class="absolute inset-x-px bottom-2 px-6">
					<div class="flex justify-between items-center">
						<div class="flex items-center">
							<el-button type="primary" text circle>
								<i class="el-icon"><span class="material-icons">image</span></i>
							</el-button>
							<el-button type="primary" text circle>
								<i class="el-icon"><span class="material-icons">attach_file</span></i>
							</el-button>
						</div>
						<div class="flex items-center">
							<el-button type="primary" text circle>
								<i class="el-icon"><span class="material-icons">mic</span></i>
							</el-button>
							<el-button type="primary" circle>
								<i class="el-icon"><span class="material-icons">send</span></i>
							</el-button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';
import Bubble from './bubble.vue';

const message = ref('');

const userInfo = reactive({
	avatarType: 'image',
	avatar:
		'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
});

const tableData1 = [
	{
		date: '2016-05-03',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-02',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-04',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
	{
		date: '2016-05-01',
		name: 'Tom',
		address: 'No. 189, Grove St, Los Angeles',
	},
];

import Prism from 'prismjs';
const code1 = `
<div class="table-container">
	<el-table :data="tableData1" border header-dragend style="width: 100%">
		<el-table-column prop="name" label="Name" width="180" />
		<el-table-column prop="address" label="Address" />
		<el-table-column prop="date" label="Date" width="180" />
	</el-table>
</div>
`;
onMounted(() => {
	Prism.highlightAll();
});
</script>

<style scoped>
.chat-container {
	height: calc(100vh - 104px);
}
</style>
