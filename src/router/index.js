import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '../views/ProductList.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Cart from '../views/Cart.vue'
import Orders from '../views/Orders.vue'

const routes = [
  {path: '/', name: 'home', component: ProductList},
  {path: '/login', name: 'login', component: Login},
  {path: '/signup', name: 'signup', component: Signup},
  {path: '/cart', name: 'Cart', component: Cart},
  {path: '/orders', name: 'Orders', component: Orders}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
