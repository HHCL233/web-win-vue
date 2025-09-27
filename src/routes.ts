// 引入路由
import { createRouter, createWebHashHistory } from "vue-router";

// 路由配置
const routes = [
  {
    path: "/", // 路由路径
    name: "home", // 路由名称
    component: () => import("@/Home.vue"), // 懒加载组件
  },
  {
    path: "/test",
    name: "test",
    component: () => import("@/Test1.vue"),
  },
];
// 创建路由
const base = '/';
const router = createRouter({
  history: createWebHashHistory(base),
  routes, // 路由配置简写形式，同 routes: routes
});
// 导出 router
export default router;