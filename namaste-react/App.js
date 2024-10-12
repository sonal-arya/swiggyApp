import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/swiggy_log.webp"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Error from "./src/components/Error";
import Contact from "./src/components/Contact";
import ResturantMenu from "./src/components/ResturantMenu";
import Login from "./src/components/Login";
import Register from "./src/components/Register";
import PrivateRoute from "./src/components/PrivateRoute";
import Dashboard from "./src/components/Dashboard";

const Grocery = lazy(() => import("./src/components/Grocery"))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRrouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [{
      path: '/',
      element: <Body />
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/register",
      element:<Register/>
    },
    {
      path: "/grocery",
      element: (
      <Suspense fallback={<h1>Loading....</h1>} >
        <Grocery />
      </Suspense>)
    },
    {
      path: "/resturants/:resId",
      element: <ResturantMenu />
    },
    {
      path: "/dashboard",
      element:   <PrivateRoute element={<Dashboard/>} />
    }
    ],
    errorElement: <Error />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRrouter} />);
