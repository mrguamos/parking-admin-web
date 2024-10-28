import { numRex, rateRex, regEmail, trueNum, urlRex } from '@constants/validator';

/**
 * 校验正数
 */
export function checkTrueNum(str: string | number) {
	return trueNum.test(str as string);
}

/**
 * 校验网址
 */
export function checkUrl(str: string) {
	return urlRex.test(str);
}

/**
 * 校验邮箱格式
 */
export function checkEmail(str: string) {
	return regEmail.test(str);
}

/**
 * 校验数字
 */
export function checkNumber(str: string | number) {
	return numRex.test(str as string);
}

/**
 * 校验率数
 */
export function checkRate(str: string | number) {
	return rateRex.test(str as string);
}
