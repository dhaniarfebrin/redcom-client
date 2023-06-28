import { createRouter, createWebHistory } from 'vue-router'
import UserHomePage from '../views/UserHomePage.vue'
import QuestionPage from '../views/QuestionPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: UserHomePage
    },
    {
      path: '/question',
      name: 'question',
      component: QuestionPage
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
