import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
<<<<<<< HEAD
import { Events } from "./pages/Events";
import { AddEvents } from "./pages/AddEvent";
=======
import { Profile } from "./pages/Profile";
>>>>>>> develop

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
<<<<<<< HEAD
    path: "/events",
    component: Events,
    exact: true
  },
  {
    path: "/events/add",
    component: AddEvents,
=======
    path: "/profile",
    component: Profile,
>>>>>>> develop
    exact: true
  }
];
