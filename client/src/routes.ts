import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Events } from "./pages/Events";
import { AddEvents } from "./pages/AddEvent";

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
    path: "/events",
    component: Events,
    exact: true
  },
  {
    path: "/events/add",
    component: AddEvents,
    exact: true
  }
];
