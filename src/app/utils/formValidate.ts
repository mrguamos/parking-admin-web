//自定义表单校验规则
import { checkEmail, checkTrueNum, checkNumber, checkRate, checkUrl } from '@utils/check';
import { t } from '@services/i18n.service';

/**
 * 校验正实数
 */
export const validateTrueNum = checkWrap(
	(value: number | string) => checkTrueNum(value),
	t('common.Please_enter_a_positive_real_number')
);

/**
 * 校验网址
 */
export const validateUrl = checkWrap(
	(value: string) => checkUrl(value),
	t('common.Please_enter_a_valid_URL')
);

/**
 * 校验邮箱
 */
export const validateEmail = checkWrap(
	(value: string) => checkEmail(value),
	t('common.Please_enter_a_valid_email_address')
);

/**
 * 校验数字
 */
export const validateNumber = checkWrap(
	(value: number | string) => checkNumber(String(value)),
	t('common.Please_enter_a_valid_number')
);

/**
 * 校验率数
 */
export const validRate = checkWrap(
	(value: number | string) => checkRate(String(value)),
	t('common.Please_enter_a_valid_rate')
);

/**
 * 校验文本长度
 */
export const validateTextLength = (length = 0) => {
	return checkWrap(
		(value: number | string) => value.toString().length <= length,
		t(`common.Field_length_cannot_exceed_length`, { length })
	);
};

interface validateTimeType {
	getRef?: any;
	start?: any;
	end?: any;
	startLabel?: string;
	endLabel?: string;
	minStartTime?: () => unknown;
	minStartText?: string;
	required?: boolean;
}

/**
 * 时间大小判断
 * @param {object} form 表单对象
 * @param {array} [startName,endName ] 起始字段名，结束字段名
 * @param {string} startLabelName 起始标签名
 * @param {string} endLabelName 结束标签名
 */
export const validateStartTime = ({
	getRef,
	end,
	startLabel = t('common.Start_time'),
	endLabel = t('common.End_time'),
	minStartTime = () => {},
	minStartText,
}: validateTimeType) => {
	return (_rule: any, value: any, callback: (param?: unknown) => unknown) => {
		const ref = getRef();
		const min = compareTimeGt(value, minStartTime());

		if (!min) {
			return callback(new Error(minStartText));
		}

		const result = compareTimeGt(ref.model[end], value) && compareTimeGt(value, minStartTime());
		if (result) {
			if (ref.model[end]) {
				setTimeout(() => ref.clearValidate(end), 100);
			}
			callback();
		} else {
			callback(
				new Error(t(`common.startLabel_should_not_exceed_endLabel`, { startLabel, endLabel }))
			);
		}
	};
};

export const validateEndTime = ({
	getRef,
	start,
	startLabel = t('common.Start_time'),
	endLabel = t('common.End_time'),
	minStartTime = () => {},
}: validateTimeType) => {
	return (_rule: any, value: any, callback: (param?: unknown) => unknown) => {
		const ref = getRef();
		const result = compareTimeGt(value, ref.model[start]);
		if (result) {
			if (ref.model[start] && compareTimeGt(ref.model[start], minStartTime())) {
				setTimeout(() => ref.clearValidate(start), 100);
			}
			callback();
		} else {
			callback(
				new Error(t(`common.endLabel_should_not_be_less_than_startLabel`, { startLabel, endLabel }))
			);
		}
	};
};

export const validateTimeRange = ({
	getRef,
	start,
	end,
	startLabel = t('common.Start_time'),
	endLabel = t('common.End_time'),
	minStartTime,
	minStartText,
	required,
}: validateTimeType) => {
	return {
		[start]: [
			{
				required,
				message: t(`common.Please_select_startLabel`, { startLabel }),
			},
			{
				validator: validateStartTime({
					getRef,
					end,
					startLabel,
					endLabel,
					minStartTime,
					minStartText,
				}),
			},
		],
		[end]: [
			{
				required,
				message: t(`common.Please_select_endLabel`, { endLabel }),
			},
			{
				validator: validateEndTime({
					getRef,
					start,
					startLabel,
					endLabel,
					minStartTime,
					minStartText,
				}),
			},
		],
	};
};

/**
 * 时间大小校验方法 对比时间值1>对比时间值2 为校验通过
 * @param {date} date  对比时间值1
 * @param {date} value 对比时间值2
 * @param {string} errorMsg 检验不通过信息
 */
function compareTimeGt(date: any, value: any) {
	if (!date || !value) {
		// 空值返回true
		return true;
	}
	if (typeof date === 'string' && typeof value === 'string') {
		date = new Date(date);
		value = new Date(value);
	}
	if (Number(value) > Number(date)) {
		return false;
	} else {
		return true;
	}
}

/**
 *
 * @param {function} checkFunction 校验方法
 * @param {string} error 错误提示
 */
function checkWrap<T>(checkFunction: (value: T) => boolean, error: string) {
	return (_rule: any, value: any, callback: (param?: unknown) => unknown) => {
		if (value && !checkFunction(value)) {
			return callback(new Error(error));
		}
		callback();
	};
}
