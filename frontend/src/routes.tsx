import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
