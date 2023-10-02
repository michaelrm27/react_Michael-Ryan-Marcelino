import "../App.css";
import Form from "../Pages/create-product";
import Page from "../Pages/landing-page";
import Detail from "../Pages/ProductDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/detail/:id",
      element: <Detail />,
    },
    {
      path: "/landing-page",
      element: <Page />,
    },
    {
      path: "*",
      element: <div>404 Page Not Found</div>,
    },
  ]);

  return <RouterProvider router={router} />;
}
