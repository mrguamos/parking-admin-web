import { get, isObject } from 'lodash-es';
import { t } from '@services/i18n.service';

export const getResErrMessage = (response: any) => {
	let result = response;
	switch (response?.status) {
		case 400:
			result = getErrMsgFrom400ErrCode(response);
			break;
		case 500:
			result = getErrMsgFrom500ErrCode(response);
			break;
		case 404:
			result = t('common.Service_you_called_is_not_found');
			break;
		case 502:
		case 503:
			result = t('common.Service_is_under_system_maintenance_please_come_back_later');
			break;
		case -1:
			result = t('common.System_connection_time_out_please_try_again_later');
			break;
		default: {
			const errData = get(response, 'data.data') || get(response, 'data');
			if (isObject(errData)) {
				const err = errData as { [key: string]: string };
				if (err.message) {
					result = err.message;
				} else if (err.error) {
					result = err.error;
				}
			} else if (errData) {
				try {
					result = JSON.parse(errData).error;
				} catch (error) {
					result = errData;
				}
			}
			break;
		}
	}
	return result;
};

function getErrMsgFrom400ErrCode(response: any) {
	let result = '';
	if (response.error) {
		result = response.error;
	}
	const err = get(response, 'data.data') || get(response, 'data');
	//判断err 是否是对象
	if (err && typeof err === 'object') {
		if (err.message) {
			result = err.message;
		} else if (err.error) {
			result = err.error;
		}
	} else if (err) {
		try {
			result = JSON.parse(err).error;
		} catch (error) {
			result = err;
		}
	}
	return result || t('common.Bad_Request_please_adjust_your_request_and_try_it_again');
}

function getErrMsgFrom500ErrCode(response: any) {
	let result = '';
	if (response.error) {
		result = response.error;
	}

	let err = response.text;
	if (err) {
		const erroJson = JSON.parse(err);
		if (erroJson.message) {
			result = erroJson.message;
			return result;
		}
	}

	err = get(response, 'data.data') || get(response, 'data');
	if (err) {
		let erroJson;
		try {
			erroJson = JSON.parse(err).error;
		} catch (error) {
			result = err.error;
		}
		if (erroJson) {
			if (erroJson.indexOf('"message"') > -1) {
				try {
					result = JSON.parse(erroJson).message;
				} catch (error) {
					result = erroJson;
				}
			} else {
				result = erroJson;
			}
		} else if (err.message) {
			result = err.message;
		}
	}
	return result || t('common.Server_Internal_Error_Please_call_the_admin_to_fix_it');
}
