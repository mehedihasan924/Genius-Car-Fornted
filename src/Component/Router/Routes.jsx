/* eslint-disable no-unused-vars */
import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignUp/SignUp';
import Checkout from '../Pages/Checkout/Checkout';
import OrdersPage from '../Pages/OrdersPage/OrdersPage';

const router = createBrowserRouter([
  {

    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
       {
        path: "/login", 
        element: <Login></Login>,
      },
         {
        path: "/signup", 
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>, 
        loader: ({params})=>fetch(`http://localhost:4000/services/${params.id}`)
      },
      {
        path: "/orders",
        element:<OrdersPage></OrdersPage>
      }
    ],
  },
]);

export default router;