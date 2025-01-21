import DashBoard from "../Layout/DashBoard";
import MainLayOut from "../Layout/MainlayOut";
import Login from "../Page/Auth/Login";
import Signin from "../Page/Auth/Signup";
import BookedSession from "../Page/Dashboard/Student/BookedSession";
import Notes from "../Page/Dashboard/Student/Notes";
import CardDetails from "../Page/Home/CardDetails";
import Home from "../Page/Home/Home";
import { createBrowserRouter } from "react-router-dom";
import AddSession from "../Page/Dashboard/Tutor/AddSession";

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
        // !student
        {
          path:'bookedSession',
          element:<BookedSession></BookedSession>
        },
        {
          path:'Notes',
          element:<Notes></Notes>
        },
        {
          path:'addSession',
          element:<AddSession></AddSession>
        },
      ]
    }
  ]);
export default router;