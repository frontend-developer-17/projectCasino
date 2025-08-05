
import {
  createBrowserRouter,
} from "react-router";
import App from "../App";
import Register from "../components/Auth/register";
import Login from "../components/Auth/login";
import Authorisation from "../pages/Authorisation/index";
export const router = createBrowserRouter([
  {
    path: "*",
     Component: App,
  },
  {
        path: "auth",
        Component: Authorisation,
        children: [
          { path: "login", Component: Login },
          { path: "register", Component: Register },
        ],
      },
]);
