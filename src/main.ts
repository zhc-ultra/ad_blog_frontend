import { createApp } from "vue";
/*引入arco design 组件库 web*/
import ArcoVue from "@arco-design/web-vue";
import "@/access/index";
/*引入arco design 组件库 css*/
import "@arco-design/web-vue/dist/arco.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bytemd/dist/index.css";

/**
 * ArcoVue  插件
 * store    存储全局状态
 * router   路由模块
 * @param App 挂载到 #app
 */
createApp(App).use(ArcoVue).use(store).use(router).mount("#app");
