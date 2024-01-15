import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Main from "./components/Main/Main.jsx";
import Order from "./components/Order/Order.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("tshirts.json"),
      },
      { path: "/order", element: <Order></Order> },
      { path: "/inventory", element: <Inventory></Inventory> },
      { path: "/login", element: <LoginPage></LoginPage> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
