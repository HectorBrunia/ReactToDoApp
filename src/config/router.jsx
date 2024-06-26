import { createBrowserRouter } from "react-router-dom";

import RootLayout from "../layout/RootLayout";
import PrivateLayout from "../layout/PrivateLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Home from "../pages/Home";
import { PublicLayout } from "../layout/PublicLayout";
import User from "../pages/User";

export const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <PublicLayout />,
        children: [
          {
            index: true,
            element: <Login />,
          },
          {
            path: "login",
            element: <Login />,
          },
          {
            path: "register",
            element: <Register />,
          },
        ],
      },
      {
        path: "home",
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "user",
            element: <User />,
          },
        ],
      },
    ],
  },
]);
