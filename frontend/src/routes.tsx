import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
