<template>
	<div class="table-from">
		<span class="inline-block mr-2 cursor-pointer" @click="useGoBack">
			<go-back-icon />
		</span>
		<!-- 标题 -->
		<span class="inline-block font-medium text-[28px] leading-9 mb-8">
			{{ route.meta.title }}
		</span>
		<el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-position="top">
			<!-- 用来防止浏览器自动填充表单 -->
			<input type="password" style="width: 0; position: absolute; border: none" />
			<input type="text" style="width: 0; position: absolute; border: none" />
			<!-- 用来防止浏览器自动填充表单 -->
			<el-row :gutter="16">
				<el-col :span="6">
					<el-form-item label="Carrier" prop="Carrier">
						<el-select
							v-model="ruleForm.Carrier"
							:disabled="route.params.id ? true : false"
							placeholder=" "
							clearable
							filterable
						>
							<el-option
								v-for="(item, index) of carrierList"
								:key="index"
								:label="item.label"
								:value="item.label"
							/>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Account No" prop="AccountNumber">
						<el-input
							v-model="ruleForm.AccountNumber"
							:disabled="route.params.id ? true : false"
							clearable
						/>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Api Client ID" prop="ApiClientId">
						<el-input v-model="ruleForm.ApiClientId" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Api Client Password" prop="ApiClientPassword">
						<el-input
							v-model="ruleForm.ApiClientPassword"
							type="password"
							show-password
							clearable
						/>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Api Token" prop="ApiToken">
						<el-input v-model="ruleForm.ApiToken" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Name" prop="Name">
						<el-input v-model="ruleForm.Name" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Company" prop="Company">
						<el-input v-model="ruleForm.Company" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Address1" prop="Address1">
						<el-input v-model="ruleForm.Address1" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Address2" prop="Address2">
						<el-input v-model="ruleForm.Address2" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="City" prop="City">
						<el-input v-model="ruleForm.City" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="State" prop="State">
						<el-select v-model="ruleForm.State" placeholder=" " clearable filterable>
							<el-option
								v-for="(item, index) in getOptions('state')"
								:key="index"
								:label="item.label"
								:value="item.value"
							/>
						</el-select>
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Zip Code" prop="ZipCode">
						<el-input v-model="ruleForm.ZipCode" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Country" prop="Country">
						<el-input v-model="ruleForm.Country" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Phone" prop="Phone">
						<el-input v-model="ruleForm.Phone" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Smart Post HubId" prop="SmartPostHubId">
						<el-input v-model="ruleForm.SmartPostHubId" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Return Account Number" prop="ReturnAccountNumber">
						<el-input v-model="ruleForm.ReturnAccountNumber" clearable />
					</el-form-item>
				</el-col>
				<el-col :span="6">
					<el-form-item label="Is Return" prop="IsReturn">
						<el-switch
							v-model="ruleForm.IsReturn"
							:inactive-value="0"
							:active-value="1"
							clearable
						/>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item>
				<div class="ml-auto">
					<el-button @click="useGoBack">Cancel</el-button>
					<el-button type="primary" :loading="saveLoading" @click="submitForm(ruleFormRef)">
						{{ route.params.id ? 'Edit' : 'Add' }} Shipping Account
					</el-button>
				</div>
			</el-form-item>
		</el-form>
	</div>
</template>

<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useGoBack } from '@hooks/useGoBack';
import type { FormInstance, FormRules } from 'element-plus';
import { ElMessage } from 'element-plus';

import { getOptions } from '@utils/selectData';

import GoBackIcon from '@assets/svg/goBack.svg';
import carrierListData from './../carrierListData.json';

const ruleFormRef = ref<FormInstance>();
const route = useRoute();

let carrierList: Record<string, any>[] = reactive([]);

let saveLoading = ref(false);

let ruleForm = reactive({
	Carrier: '',
	AccountNumber: '',
	ApiClientId: '',
	ApiClientPassword: '',
	ApiToken: '',
	Name: '',
	Company: '',
	Address1: '',
	Address2: '',
	City: '',
	State: '',
	ZipCode: '',
	Country: '',
	Phone: '',
	SmartPostHubId: '',
	ReturnAccountNumber: '',
	IsReturn: 0,
});

const rules = reactive<FormRules<typeof ruleForm>>({
	Carrier: [{ required: true, message: 'Please select carrier', trigger: 'change' }],
	AccountNumber: [{ required: true, message: 'Please input account number', trigger: 'change' }],
});

const submitForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return;
	formEl.validate((valid) => {
		if (valid) {
			saveLoading.value = true;
			// 编辑
			if (route.params.id) {
				ElMessage.success('Update Success');
				useGoBack();
				saveLoading.value = false;
			} else {
				// 新增
				ElMessage.success('Add Success');
				useGoBack();
				saveLoading.value = false;
			}
		} else {
			return false;
		}
	});
};

const getDetail = () => {
	try {
		const res = carrierListData;
		ruleForm = Object.assign(ruleForm, res[0]);
	} catch (error) {
		ruleForm = Object.assign(ruleForm, {});
	}
};

// 初始化
onBeforeMount(async () => {
	console.log('参数：', route.params.id, route);
	route.params.id && getDetail();
});
</script>
