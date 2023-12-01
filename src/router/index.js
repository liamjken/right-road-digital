import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import NotFound from '../views/NotFound.vue'
import Rotate from '../views/RotateTest.vue'
import Blog from '../views/TheBlog.vue'
import SofieBday from '../views/SofieBday.vue'
import sampleProjects from '../views/sampleProjects.vue'
import ArticleView from '../views/ArticleView.vue'
import About from '../views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/privacy-policy',
      name: 'PrivacyPolicy',
      component: PrivacyPolicy
    },
    {
      path: '/rotate',
      name: 'rotate',
      component: Rotate
    },
    {
      path: '/sofiebday',
      name: 'sofiebday',
      component: SofieBday,
      meta: { hideheader: true},
    },
    {
      path: '/portfolio',
      name: 'sampleProjects',
      component: sampleProjects,
    },
    {
      path: '/articles',
      name: 'articles',
      component: ArticleView,
    },
    {
      path: '/blog/:postname/:postid',
      name: 'blog',
      component: Blog
    },
    {
      path: '/about/',
      name: 'about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})

export default router
