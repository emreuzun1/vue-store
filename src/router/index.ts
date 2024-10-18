import LoginView from '@/pages/LoginView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/', name: 'login', component: LoginView }],
})

export default router
