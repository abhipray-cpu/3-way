import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/main-page.vue'
import QueryPage from '../views/query-page.vue'
import WaitlistPage from '../views/waitlist-page.vue'

const routes = [
{
  name:'main',
  path:'/',
  component:MainPage

},
{ path: '/home',
 redirect: '/' 
},
{
  name:'query',
  path:'/query',
  component:QueryPage
},
{
  name:'waitlist',
  path:'/waitlist',
  component:WaitlistPage
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
