import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Profile } from "./pages/Profile";

export const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true
  },
  {
    path: "/profile",
    component: Profile,
    exact: true
  }
];
