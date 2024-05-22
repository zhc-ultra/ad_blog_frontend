// 存放用户的全局状态
import {StoreOptions} from "vuex";
import accessEnum from "@/access/accessEnum";

export default {
    namespaced: true,
    // 记录用户的全局状态
    state: () => ({
        loginUser: {
            userName: "未登录",
        },
    }),
    // 执行异步操作，触发mutations的更改
    actions: {
        async getLoginUser({commit, state}, payload) {
            // 暂时模拟登录
            commit("updateUser", {
                payload
            });

            //   // 从远程请求获取登录信息
            //   const res = await UserControllerService.getLoginUserUsingGet();
            //   if (res.code === 0) {
            //     commit("updateUser", res.data);
            //   } else {
            //     commit("updateUser", {
            //       ...state.loginUser,
            //       userRole: accessEnum.NOT_LOGIN,
            //     });
            //   }
        },
    },
    // 同步更新变量
    mutations: {
        updateUser(state, payload) {
            state.loginUser = payload;
        },
    },
} as StoreOptions<any>;
