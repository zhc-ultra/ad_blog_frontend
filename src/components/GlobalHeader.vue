<!--全局导航栏组件-->
<template>
  <a-row class="globalHeader" align="center" :wrap="false">
    <!--栅格布局 auto start-->
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectedKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <!--占位的logo图标-->
          <div class="title-bar">
            <!--logo图片-->
            <img class="logo" src="../assets/logo.png" alt="#" />
            <!--网站名称-->
            <div class="title">AD Blog</div>
          </div>
        </a-menu-item>
        <!--根据路由动态渲染导航项-->
        <a-menu-item v-for="item in visibleRoutes" :key="item.path">
          {{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>
    <!--栅格布局 auto end-->

    <!--栅格布局 100px start-->
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
    <!--栅格布局 100px end-->
  </a-row>
</template>
<script setup lang="ts">
// 导入路由配置
import { routes } from "@/router/routes";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import checkAccess from "@/access/checkAccess";
import accessEnum from "@/access/accessEnum";
// 全局状态
const store = useStore();

// 路由对象，进行路由跳转
const router = useRouter();
// 选择的导航项，默认主页
const selectedKeys = ref(["/"]);

// 监听路由变化，更新导航项
router.afterEach((to) => {
  selectedKeys.value = [to.path];
});

// 三秒后自动登录 for test
// setTimeout(() => {
//   store.dispatch("user/getLoginUser", {
//     userName: "Admin",
//     userRole: accessEnum.ADMIN,
//   });
// }, 3000);

// 点击导航项之后进行路由跳转
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};

/**
 * 过滤掉隐藏路由（控制路由的显隐）
 */
const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (!checkAccess(store.state.user.loginUser, item.meta?.access as string)) {
      return false;
    }
    return true;
  });
});
</script>

<style scoped>
.title-bar {
  display: flex;
  align-items: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
