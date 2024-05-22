<template>
  <div id="app">
    <template v-if="route.path.startsWith('/user')">
      <!--默认路由-->
      <router-view />
    </template>

    <template v-else>
      <!--通用布局组件-->
      <basic-layout />
    </template>
  </div>
</template>

<style>
#app {
  height: 100vh;
}
</style>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue";
import { onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
/**
 * 全局初始化入口，全局单词调用代码
 */
const doInit = () => {
  // TODO
  console.log("hello!");
};

onMounted(() => {
  doInit();
});
</script>
