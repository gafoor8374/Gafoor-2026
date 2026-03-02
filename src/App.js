import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Mockdataresturantmenu from "./components/Mockdataresturantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
 
const GafoorFoodApp = () =>{
    return(
        <div className="food-app">
            <Header />
            <Outlet />
        </div>
    )
}

const app = createBrowserRouter([
  {
    path: "/",
    element: <GafoorFoodApp />,
    children: [
      {
       path:"/",
       element:<Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    //   {
    //     path: "/restaurant/menu/:resId",
    //     element: <ResturantMenu />,
    //   },
      {
        path:"restaurant/:resId",
        element:<Mockdataresturantmenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={app}/>);