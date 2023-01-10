import {createRouter, createWebHistory} from "vue-router"
import HomeView from "../views/HomeView.vue"
import ServicesView from "../views/ServicesView.vue"
import SignUpView from "../views/SignUpView.vue"
import TrackingView from "../views/TrackingView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASEURL),
  routes: [{
    path: "/",
    name: 'home',
    component: HomeView
      
  },
  {
    path: '/services',
    name: 'about',
    component: ServicesView

  },
  {
    path: '/sign-up',
    name:'sign-up',
    component: SignUpView  
  },
  {
    path: '/tracking',
    name:'tracking',
    component: TrackingView
]
 
})

export default router