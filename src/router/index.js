import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Contacto from '../views/Contacto.vue'
import Farmacia from '../views/Farmacia.vue'
import Juguetes from '../views/Juguetes.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/Farmacia',
    name: 'Farmacia',
    component: Farmacia
  },
  {
    path: '/Juguetes',
    name: 'Juguetes',
    component: Juguetes
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
