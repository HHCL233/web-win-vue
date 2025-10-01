// 引入路由
import { createRouter, createWebHistory } from "vue-router";

// 路由配置
const routes = [
  {
    path: "/test", // 路由路径
    name: "home", // 路由名称
    component: () => import("@/testPage/Home.vue"), // 懒加载组件
  },
  {
    path: "/test/test2", // 路由路径
    name: "test2", // 路由名称
    component: () => import("@/testPage/Test2.vue"), // 懒加载组件
  },
  {
    path: "/test/test1",
    name: "test1",
    component: () => import("@/testPage/Test1.vue"),
  },
  {
    path: "/",
    name: "Welcome",
    component: () => import("@/Welcome.vue"),
    meta: { title: 'Welcome to Web-Win-Vue' }
  },
];
// 创建路由
const base = '/';
const router = createRouter({
  history: createWebHistory(base),
  routes, // 路由配置简写形式，同 routes: routes
});
// 导出 router
export default router;