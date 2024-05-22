// 提取权限判断方法
import accessEnum from "@/access/accessEnum";
import AccessEnum from "@/access/accessEnum";

/**
 * 鉴权，判断某个用户是否拥有特定的权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要的权限
 * @returns {boolean} 是否拥有权限
 */
const checkAccess = (loginUser: any, needAccess = accessEnum.NOT_LOGIN) => {
  // 获取当前登录用户的权限(没有loginUser 则为未登录)
  const loginUserAccess = loginUser?.userRole ?? accessEnum.NOT_LOGIN;
  if (needAccess === accessEnum.NOT_LOGIN) {
    return true;
  }

  // 需要用户登录，但是用户未登录
  if (needAccess === accessEnum.USER) {
    if (loginUserAccess === accessEnum.NOT_LOGIN) {
      return false;
    }
  }

  // 需要管理员权限
  if (needAccess === accessEnum.ADMIN) {
    // 如果不是管理员，表示无权限
    if (loginUserAccess !== accessEnum.ADMIN) {
      return false;
    }
  }
  return true;
};

export default checkAccess;
