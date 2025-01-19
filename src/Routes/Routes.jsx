import MainLayOut from "../Layout/MainlayOut";
import Login from "../Page/Auth/Login";
import Signin from "../Page/Auth/Signup";
import Home from "../Page/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut></MainLayOut>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'login',
            element: <Login></Login>
        },
        {
            path:'signup',
            element: <Signin></Signin>
        }
      ]
    },
  ]);
export default router;