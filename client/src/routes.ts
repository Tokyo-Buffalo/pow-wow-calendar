import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true
  }
];
