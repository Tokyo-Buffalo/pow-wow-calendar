import { Home } from './pages/Home';
import { Dashboard } from './pages/Dashboard';
import { CalendarPage } from './pages/Calendar';
import { Search } from './pages/Search';

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
  },
  {
    path: '/search',
    component: Search,
    exact: true
  }
];
