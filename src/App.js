import React, {lazy,Suspense, useContext, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Mockdataresturantmenu from "./components/Mockdataresturantmenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import "../index.css";
import UserContext from "./utils/UserContext";
import LogUser from "./components/LogUser";

// import Grocery from "./components/Grocery";

/**
 * lazy loading:

  It is called 
  lazy loading, 
  on demand loading,
  chunking,
  code spilting,
  dynamic import
 */
const Grocery = lazy(() => (
  import("./components/Grocery")
)
);


 
const GafoorFoodApp = () =>{
  const [name, setName ] = useState()
//authentication
  useEffect(()=>{
  const data = {
    firstName : "Gafoor"
  }
  setName(data.firstName);
  },[])
    return(
      <UserContext.Provider value ={{loggedUser:name, setName}}>
        <div className="food-app">
            <Header />
            <Outlet />
        </div>
        </UserContext.Provider>
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
      {
        path: "/login",
        element: <LogUser />,
      },
      {
        path: "/restaurant/menu/:resId",
        element: <ResturantMenu />,
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>loading...!!!</h1>}><Grocery /></Suspense>,
      },
    //   {
    //     path:"restaurant/:resId",
    //     element:<Mockdataresturantmenu />
    //   }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(< RouterProvider router={app}/>);