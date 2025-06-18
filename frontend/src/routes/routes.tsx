import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, LoginPage } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
