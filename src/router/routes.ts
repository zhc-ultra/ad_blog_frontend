// 路由配置
import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AdminView from "@/views/AdminView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import HideView from "@/views/HideView.vue";
import accessEnum from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginAndRegisterView from "@/views/user/UserLoginAndRegisterView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登录",
        component: UserLoginAndRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/",
    name: "浏览题目",
    component: HomeView,
  },
  {
    path: "/noAuth",
    name: "鉴权失败",
    component: NoAuthView,
    meta: {
      // 访问权限
      hideInMenu: true,
    },
  },
  {
    path: "/hide",
    name: "隐藏页面",
    component: HideView,
    meta: {
      // 隐藏页面和导航项
      hideInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "仅管理员可见",
    component: AdminView,
    meta: {
      // 访问权限
      access: accessEnum.ADMIN,
    },
  },
  {
    path: "/about",
    name: "关于我的",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];
