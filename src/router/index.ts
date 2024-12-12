// filepath: /src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router';
import app from '~/app.vue';
import facility from '~/src/pages/facility.vue';
const routes = [
  { path: '/',
    name : 'app',
    component: app },
  { path: '/facility',
    name : 'facility',
    component: facility,
    meta: { requiresAuth: false } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;