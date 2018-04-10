import Vue from 'vue';
import Router from 'vue-router';
import Index from '../views/Index';
import Register from '../views/Register';
import Dashboard from '../views/Dashboard';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/register/:step(\\d+)?',
      name: 'Register',
      component: Register,
    }, {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
  ],
});

export default router;
