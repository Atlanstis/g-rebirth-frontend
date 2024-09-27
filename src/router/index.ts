import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TestView',
      component: () => import('../views/test/index.vue'),
    },
  ],
});

export default router;
