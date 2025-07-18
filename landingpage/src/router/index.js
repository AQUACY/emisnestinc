import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../pages/Services.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../pages/About.vue')
  },
  {
    path: '/testimonials',
    name: 'Testimonials',
    component: () => import('../pages/Testimonials.vue')
  },
  {
    path: '/referral',
    name: 'Referral',
    component: () => import('../pages/Referral.vue')
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../pages/FAQ.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../pages/Contact.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router 