import { createRouter, createWebHistory } from 'vue-router'
import AdminVue from '../views/Admin/AdminVue.vue'

const routes = [
  {
    path: '/',
    name: 'adminHome',
    meta: {layout: 'admin'},
    component: AdminVue
  },
  {
    path: '/sign',
    name: 'sign',
    meta: {layout: 'empty'},
    component: function () {
      return import('../views/Admin/SignVue.vue')
    }
  },
  {
    path: '/reg',
    name: 'reg',
    meta: {layout: 'empty'},
    component: function () {
      return import('../views/Admin/RegVue.vue')
    }
  },
  {
    path: '/statis',
    name: 'statis',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/StatisVue.vue')
    }
  },
  {
    path: '/baners',
    name: 'baners',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/BanerVue.vue')
    }
  },
  {
    path: '/films',
    name: 'films',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/FilmsVue.vue')
    }
  },
  {
    path: '/pageFilm',
    name: 'pageFilm',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageFilmVue.vue')
    }
  },
  {
    path: '/theatres',
    name: 'theatres',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/TheatresVue.vue')
    }
  },
  {
    path: '/pageTheatre',
    name: 'pageTheatre',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageTheatre.vue')
    }
  },
  {
    path: '/pageHall',
    name: 'pageHall',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageHall.vue')
    }
  },
  {
    path: '/news',
    name: 'news',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/NewsVue.vue')
    }
  },
  {
    path: '/pageNews',
    name: 'pageNews',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageNews.vue')
    }
  },
  {
    path: '/shares',
    name: 'shares',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/SharesVue.vue')
    }
  },
  {
    path: '/pageShares',
    name: 'pageShares',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageShares.vue')
    }
  },
  {
    path: '/pages',
    name: 'pages',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PagesAdmin.vue')
    }
  },
  {
    path: '/pageHolovna',
    name: 'pageHolovna',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageHolovna.vue')
    }
  },
  {
    path: '/pageOTheatre',
    name: 'pageOTheatre',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageOTheatre.vue')
    }
  },
  {
    path: '/pageBar',
    name: 'pageBar',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageBar.vue')
    }
  },
  {
    path: '/pageVip',
    name: 'pageVip',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageVip.vue')
    }
  },
  {
    path: '/pageAdvertising',
    name: 'pageAdvertising',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageAdvertising.vue')
    }
  },
  {
    path: '/pageChildren',
    name: 'pageChildren',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageChildren.vue')
    }
  },
  {
    path: '/pageContact',
    name: 'pageContact',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageContact.vue')
    }
  },
  {
    path: '/users',
    name: 'users',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/UsersAdmin.vue')
    }
  },
  {
    path: '/pageUsers',
    name: 'pageUsers',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/PageUsers.vue')
    }
  },
  {
    path: '/mailing',
    name: 'mailing',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/MailingAdmin.vue')
    }
  },
  {
    path: '/mailingUser',
    name: 'mailingUser',
    meta: {layout: 'admin'},
    component: function () {
      return import('../views/Admin/MailingUser.vue')
    }
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
