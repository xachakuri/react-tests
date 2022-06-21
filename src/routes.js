import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { MainPage } from './pages/MainPage';

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
  {
    path: '/main',
    exact: true,
    cache: false,
    component: MainPage,
    title: 'MainPage',
    sitemap: true,
  },
];
