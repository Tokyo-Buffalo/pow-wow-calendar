import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { CalendarPage } from './pages/Calendar';

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
  },
  {
    path: '/calendar',
    component: CalendarPage,
    exact: true
  }
];
