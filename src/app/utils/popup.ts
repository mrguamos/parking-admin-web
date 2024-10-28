import { ElMessage, ElMessageBox, ElMessageBoxOptions, MessageOptionsWithType } from 'element-plus';
import { getResErrMessage } from './http';
import { t } from '@services/i18n.service';

export const tipSuccess = (
	message: string = t('common.Successful'),
	options: MessageOptionsWithType = {}
) => {
	return ElMessage.success({
		message,
		...options,
	});
};

export const tipError = (
	message: string = t('common.Error'),
	options: MessageOptionsWithType = {}
) => {
	return ElMessage.error({
		message,
		...options,
	});
};

export const tipResError = (response: any, options: MessageOptionsWithType = {}) => {
	const errMsg = getResErrMessage(response);
	return tipError(errMsg, options);
};

export const confirm = (
	content: string,
	title: string = t('common.Confirm'),
	options: ElMessageBoxOptions = {}
) => {
	return ElMessageBox.confirm(content, title, {
		showConfirmButton: true,
		showCancelButton: false,
		cancelButtonClass: 'is-plain',
		showClose: false,
		type: '',
		...options,
	});
};

export const confirmDel = (
	content: string = t('common.Are_you_sure_to_delete_the_data'),
	title: string = t('common.Confirm'),
	options: ElMessageBoxOptions = {}
) => {
	return confirm(content, title, {
		showCancelButton: true,
		...options,
	});
};

export const popup = {
	tipSuccess,
	tipError,
	tipResError,
	confirm,
	confirmDel,
};
