import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CrearMateria from '@/components/CrearMateria.vue'
import ListarMateria from '@/components/ListarMateria.vue'
import Actualizar from '@/components/Actualizar.vue'
import InformacionMaterias from '@/views/InformacionMaterias.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/crearMateria',
    name: 'crearMateria',
    component: CrearMateria
  },
  {
    path: '/listarMateria',
    name: 'listarMateria',
    component: ListarMateria
  },
  {
    path: '/actualizarMateria/:codigo',
    name: 'actualizarMateria',
    component: Actualizar
  },
  {
    path: '/informacionMaterias',
    name: 'informacionMaterias',
    component: InformacionMaterias
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
