// https://github.com/rstacruz/nprogress/issues/187
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({
	// 动画方式
	easing: 'ease',
	// 递增进度条的速度
	speed: 500,
	// 是否显示加载ico
	showSpinner: false,
	// 自动递增间隔
	trickleSpeed: 200,
	// 初始化时的最小百分比
	minimum: 0.3,
});

// @ts-ignore
NProgress.setColor = function (color: string) {
	const style = document.createElement('style');
	style.textContent = `
		#nprogress .bar {
			background: ${color} !important;
		}
  `;
	document.body.appendChild(style);
};

export default NProgress;
