import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";
import { Events } from "./pages/Events";
import { AddEvents } from "./pages/AddEvent";
import { Profile } from "./pages/Profile";

export const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/events",
    component: Events
  },
  {
    path: "/events/add",
    component: AddEvents
  },
  {
    path: "/profile",
    component: Profile
  }
];
