<script setup lang="ts">
import { ref } from 'vue';
import { loginApi } from '@apis/loginApi';
import { ILoginParams } from '@models/login/login-params.interface';
import { useRouter } from 'vue-router';
import { popup } from '@utils/popup';
import { useI18n } from 'vue-i18n';
import { session } from '@services/session.service';
import { map } from 'lodash-es';

const logining = ref(false);
const data = ref<ILoginParams>({
	username: '',
	password: '',
});

const router = useRouter();

const { t } = useI18n();

const sign = () => {
	logining.value = true;
	loginApi
		.login<any>(data.value)
		.then((res) => {
			console.log(res);
			session.setToken(res.oAuthToken);
			session.setPermissionList(map(res.userPermissions, 'name'));
			popup.tipSuccess();
			router.push('/');
		})
		.catch((err) => {
			console.log(err);
			popup.tipResError(err);
		})
		.finally(() => {
			logining.value = false;
		});
};
</script>
<template>
	<div class="flex justify-center items-center w-full min-h-[100vh]">
		<form class="w-[400px]">
			<div class="mb-3 w-full">
				<el-input v-model="data.username" class="w-full" :placeholder="t('login.User_Name')" />
			</div>
			<div class="mb-3 w-full">
				<el-input
					v-model="data.password"
					class="w-full"
					:placeholder="t('login.Password')"
					type="password"
					show-password
				/>
			</div>
			<div class="mb-3 w-full">
				<el-button type="primary" class="w-full" :loading="logining" @click="sign">
					{{ t('login.Sign') }}
				</el-button>
			</div>
		</form>
	</div>
</template>
