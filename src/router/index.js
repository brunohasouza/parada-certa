import Vue from 'vue'
import VueRouter from 'vue-router'
import Default from './../layouts/Default'

Vue.use(VueRouter)

  const routes = [
  {
    path: '',
    component: Default,
    children: [
      { path: '/', name: 'home', component: () => import('./../views/Details.vue')}
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
