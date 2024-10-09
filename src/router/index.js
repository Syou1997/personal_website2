import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomePage from '../views/HomePage.vue'
import Resume from '../views/Resume.vue'
import Project from '../views/Project.vue'
import Magic from '../views/Magic.vue'
import JT from '../views/JT.vue'
import YT from '../views/YT.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      // 子路由
      children: [
        {
          path: '/',
          name: 'HomePage',
          component: HomePage,
        },
        {
          path: 'Resume',
          name: 'Resume',
          component: Resume,
        },
        {
          path: 'Project',
          name: 'Project',
          component: Project,
        },
        {
          path: 'Magic',
          name: 'Magic',
          component: Magic,
        },
        {
          path: 'JT',
          name: 'JT',
          component: JT,
        },
        {
          path: 'YT',
          name: 'YT',
          component: YT,
        },
        
      ]

    },
    // {
    //   path: '/ForgetPassword',
    //   name: 'ForgetPassword',
    //   component: ForgetPassword
    // },
  ]
})

export default router
