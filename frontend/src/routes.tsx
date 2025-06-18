import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, LoginPage, RequestPage, SubmitForm } from "./pages";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/request",
    element: <RequestPage />,
  },
  {
    path: "/rquestform",
    element: <SubmitForm />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
