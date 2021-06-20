import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/tipos',
    name: 'Types',
    component: () => import(/* webpackChunkName: "types" */ '../views/Types/Index.vue'),
  },
  {
    path: '/tipos/:id',
    name: 'EditTypes',
    component: () => import(/* webpackChunkName: "edit-types" */ '../views/Types/Edit.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
