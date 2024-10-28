// 使用 router 实例来访问当前路由和执行导航
const currentRoute = router.currentRoute.value;

interface PrevRoute {
	name?: string;
	tab?: string;
}

// 返回到上一级
export const useGoBack = () => {
	// 如果页面有指定上一个路由的参数则根据参数跳转
	if (currentRoute.meta?.prevRoute) {
		const prevRoute = currentRoute.meta.prevRoute as PrevRoute;
		router.push({ name: prevRoute.name, query: { tab: prevRoute?.tab } });
		return;
	}
	router.back();
};
