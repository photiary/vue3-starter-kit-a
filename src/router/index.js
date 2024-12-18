// https://router.vuejs.org/guide/#Creating-the-router-instance
import { createRouter, createWebHistory } from 'vue-router';

const routes = [];

// https://router.vuejs.org/guide/essentials/history-mode#HTML5-Mode
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
