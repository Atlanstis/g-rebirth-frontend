import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TestView',
      component: () => import('../layouts/admin/index.vue'),
      children: [
        { path: '/', component: () => import('../views/test/index.vue') },
      ],
    },
  ],
});

/**
 * 安装 vue 路由
 * @param app vue 实例
 */
export function setupRouter(app: App) {
  app.use(router);
}
