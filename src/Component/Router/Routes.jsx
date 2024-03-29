import React from 'react'
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from '../Pages/Home/Home';
import Main from '../Layout/Main';
import Login from '../Pages/LoginPage/Login';
import SignUp from '../Pages/SignUp/SignUp';

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
    ],
  },
]);

export default router;