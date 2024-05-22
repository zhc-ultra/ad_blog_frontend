// 权限管理
import router from "@/router";
import store from "@/store";
import accessEnum from "@/access/accessEnum";
import checkAccess from "@/access/checkAccess";

// 全局路由拦截（鉴权）
router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;
  // 自动登录 (如果loginUser.userRole 为空表示首次登录)
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
  }

  const needAccess = (to.meta?.access as string) ?? accessEnum.NOT_LOGIN;
  // 要跳转的页面需要登录
  if (needAccess !== accessEnum.NOT_LOGIN) {
    // 如果没登录，跳转到登录页
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    // 以经登录，检查权限，如果权限不足，则跳转到无权限页面
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
    }
  }
  next();
});
