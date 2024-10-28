<template>
	<el-form label-position="top" label-width="100px" :model="input">
		<div class="flex gap-4">
			<el-form-item class="w-full" label="list suggestions when activated">
				<el-autocomplete
					v-model="input.state1"
					:fetch-suggestions="querySearch"
					clearable
					placeholder="Please Input"
					class="w-full"
					@select="handleSelect"
				/>
			</el-form-item>
			<el-form-item class="w-full" label="list suggestions on input">
				<el-autocomplete
					v-model="input.state2"
					:fetch-suggestions="querySearch"
					:trigger-on-focus="false"
					clearable
					placeholder="Please Input"
					class="w-full"
					@select="handleSelect"
				/>
			</el-form-item>
		</div>
	</el-form>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue';

interface RestaurantItem {
	value: string;
	link: string;
}

const input = reactive({
	state1: '',
	state2: '',
});

const restaurants = ref<RestaurantItem[]>([]);
const querySearch = (queryString: string, cb: any) => {
	const results = queryString
		? restaurants.value.filter(createFilter(queryString))
		: restaurants.value;
	// call callback function to return suggestions
	cb(results);
};
const createFilter = (queryString: string) => {
	return (restaurant: RestaurantItem) => {
		return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
	};
};
const loadAll = () => {
	return [
		{ value: 'vue', link: 'https://github.com/vuejs/vue' },
		{ value: 'element', link: 'https://github.com/ElemeFE/element' },
		{ value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
		{ value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
		{ value: 'vuex', link: 'https://github.com/vuejs/vuex' },
		{ value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
		{ value: 'babel', link: 'https://github.com/babel/babel' },
	];
};

const handleSelect = (item: RestaurantItem) => {
	console.log(item);
};

onMounted(() => {
	restaurants.value = loadAll();
});
</script>
