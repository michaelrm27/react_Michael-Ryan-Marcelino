import { useState } from "react";
import "./App.css";
import Form from "./Pages/create-product";
import Page from "./Pages/landing-page";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Form />,
    },
    {
      path: "/lading-page",
      element: <Page />,
    },
    {
      path: "*",
      element: "404 Error Not Found",
    },
  ]);

  return <RouterProvider router={router} />;
}
