import DashBoard from "../Layout/DashBoard";
import MainLayOut from "../Layout/MainlayOut";
import Login from "../Page/Auth/Login";
import Signin from "../Page/Auth/Signup";
import BookedSession from "../Page/Dashboard/Student/BookedSession";
import CardDetails from "../Page/Home/CardDetails";
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
        },
        {
            path:'cardDetails',
            element: <CardDetails></CardDetails>
        }
      ]
    },
    {
      path:"dashboard",
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:'bookedSession',
          element:<BookedSession></BookedSession>
        },
      ]
    }
  ]);
export default router;