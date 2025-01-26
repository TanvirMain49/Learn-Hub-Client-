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
import Users from "../Page/Dashboard/Admin/Users";
import PrivateRoutes from "./PrivateRoutes";

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
            element: <PrivateRoutes>
              <Payment></Payment>
            </PrivateRoutes>,
        }
      ]
    },
    {
      path:"dashboard",
      element: <PrivateRoutes>
        <DashBoard></DashBoard>
      </PrivateRoutes> ,
      children:[
        // !student
        {
          path:'bookedSession',
          element:<PrivateRoutes>
            <BookedSession></BookedSession>
          </PrivateRoutes>
        },
        {
          path:'notes',
          element:<PrivateRoutes>
            <Notes></Notes>
          </PrivateRoutes>
        },
        {
          path:'mangeNotes',
          element:<PrivateRoutes>
            <MangeNote></MangeNote>
          </PrivateRoutes>
        },
        {
          path:'updateNotes/:id',
          element:<PrivateRoutes>
            <UpdateStudyMaterial></UpdateStudyMaterial>
          </PrivateRoutes>
        },
        {
          path:'studyMaterial',
          element: <PrivateRoutes>
            <StudyMaterial></StudyMaterial>
          </PrivateRoutes>
        },

        // !Tutor
        {
          path:'addSession',
          element:<PrivateRoutes>
            <AddSession></AddSession>
          </PrivateRoutes>
        },
        {
          path:'personalSession',
          element:<PrivateRoutes>
            <PersonalSession></PersonalSession>
          </PrivateRoutes>
        },
        {
          path:'addMaterial/:id',
          element:<PrivateRoutes>
            <AddMaterial></AddMaterial>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'updateMaterial/:id',
          element:<PrivateRoutes>
            <UpdateMaterial></UpdateMaterial>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'materials',
          element:<PrivateRoutes>
            <Materials></Materials>
          </PrivateRoutes>
        },
        {
          path:'allMaterials',
          element:<PrivateRoutes>
            <AllMaterials></AllMaterials>
          </PrivateRoutes>
        },

        // !{Admin}
        {
          path:'Users',
          element:<PrivateRoutes>
            <Users></Users>
          </PrivateRoutes>
        }
      ]
    }
  ]);
export default router;