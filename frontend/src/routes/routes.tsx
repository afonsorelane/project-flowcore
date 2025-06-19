import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AboutPage, CreateUser, Dashboard, LoginPage, RequestPage, SubmitForm, SubmitDocument } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
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
    path: "/requestform",
    element: <SubmitForm />,
  },
    {
    path: "/dashboard",
    element: <Dashboard />,
  },
    {
    path: "/newuser",
    element: <CreateUser />,
  },
      {
    path: "/submitdocument",
    element: <SubmitDocument />,
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
