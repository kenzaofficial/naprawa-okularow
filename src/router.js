import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/Home.vue'
import PhonePage from '@/pages/Phone.vue'
import AccessCodePage from '@/pages/AccessCode.vue'
import TariffPage from '@/pages/Tariff.vue'
import PayMethodPage from '@/pages/PayMethod.vue'
import PremiumPage from '@/pages/Premium.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/phone',
    name: 'PhonePage',
    component: PhonePage,
  },
  {
    path: '/code',
    name: 'AccessCodePage',
    component: AccessCodePage,
  },
  {
    path: '/paymethod',
    name: 'PayMethodPage',
    component: PayMethodPage,
  },
  {
    path: '/tariff',
    name: 'tariffPage',
    component: TariffPage,
  },
  {
    path: '/premium',
    name: 'PremiumPage',
    component: PremiumPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router