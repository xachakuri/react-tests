import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Home } from './pages/Home';

export default [
  {
    path: '/',
    exact: true,
    cache: false,
    component: Home,
    title: 'Home',
    sitemap: true,
  },
  {
    path: '/signin',
    exact: true,
    cache: false,
    component: Login,
    title: 'Login',
    sitemap: true,
  },
  {
    path: '/signup',
    exact: true,
    cache: false,
    component: Registration,
    title: 'Registration',
    sitemap: true,
  },
];
