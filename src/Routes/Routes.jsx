import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import MainLayOut from "../Layout/MainlayOut";
import Login from "../Page/Auth/Login";
import Signin from "../Page/Auth/Signup";
import BookedSession from "../Page/Dashboard/Student/BookedSession";
import MangeNote from "../Page/Dashboard/Student/MangeNote";
import Notes from "../Page/Dashboard/Student/Notes";
import StudyMaterial from "../Page/Dashboard/Student/StudyMaterial";
import UpdateStudyMaterial from "../Page/Dashboard/Student/UpdateStudyMaterial";
import AddMaterial from "../Page/Dashboard/Tutor/AddMaterial";
import AddSession from "../Page/Dashboard/Tutor/AddSession";
import AllMaterials from "../Page/Dashboard/Tutor/AllMaterials";
import Materials from "../Page/Dashboard/Tutor/Materials";
import PersonalSession from "../Page/Dashboard/Tutor/PersonalSession";
import UpdateMaterial from "../Page/Dashboard/Tutor/UpdateMaterial";
import AllSession from "../Page/Home/AllSession";
import CardDetails from "../Page/Home/CardDetails";
import Home from "../Page/Home/Home";
import Payment from "../Page/Payment/Payment";

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
            path:'allSession',
            element: <AllSession></AllSession>
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
            path:'cardDetails/:id',
            element: <CardDetails></CardDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
            path:'book/:id',
            element: <Payment></Payment>,
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
          path:'notes',
          element:<Notes></Notes>
        },
        {
          path:'mangeNotes',
          element:<MangeNote></MangeNote>
        },
        {
          path:'updateNotes/:id',
          element:<UpdateStudyMaterial></UpdateStudyMaterial>
        },
        {
          path:'studyMaterial',
          element: <StudyMaterial></StudyMaterial>
        },

        // !Tutor
        {
          path:'addSession',
          element:<AddSession></AddSession>
        },
        {
          path:'personalSession',
          element:<PersonalSession></PersonalSession>
        },
        {
          path:'addMaterial/:id',
          element:<AddMaterial></AddMaterial>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'updateMaterial/:id',
          element:<UpdateMaterial></UpdateMaterial>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'materials',
          element:<Materials></Materials>
        },
        {
          path:'allMaterials',
          element:<AllMaterials></AllMaterials>
        },
      ]
    }
  ]);
export default router;