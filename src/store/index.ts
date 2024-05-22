// 全局状态管理
import { createStore } from "vuex";
import user from "@/store/user";

export default createStore({
  mutations: {},
  actions: {},
  // 存储全局状态
  modules: {
    user,
  },
});
