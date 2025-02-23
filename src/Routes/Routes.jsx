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
import AllSessionAdmin from "../Page/Dashboard/Admin/AllSessionAdmin";
import ViewAllMaterial from "../Page/Dashboard/Admin/ViewAllMetarial";
import DashBoardBanner from "../Page/Dashboard/DashBoardBanner";
import PrivateTutorRoutes from "./PrivateTutorRoutes";
import PrivateAdminRoutes from "./PrivateAdminRoutes";
import Profile from "../Page/Dashboard/Profile";
import AllTutor from "../Page/AllTutor/AllTutor";
import SuccessStory from "../Page/SuccessStory/SuccessStory";

// http://localhost:5000

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
            path:'allTutor',
            element: <AllTutor></AllTutor>
        },
        {
            path:'allSuccess',
            element: <SuccessStory></SuccessStory>
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
            element: <PrivateRoutes>
              <CardDetails></CardDetails>
            </PrivateRoutes>,
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

        {
          path:'/dashboard/Das',
          element: <DashBoardBanner></DashBoardBanner>
        },
        {
          path:'/dashboard/profile',
          element: <Profile></Profile>
        },

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
            <PrivateTutorRoutes>
            <AddSession></AddSession>
            </PrivateTutorRoutes>
          </PrivateRoutes>
        },
        {
          path:'personalSession',
          element:<PrivateRoutes>
            <PrivateTutorRoutes>
            <PersonalSession></PersonalSession>
            </PrivateTutorRoutes>
          </PrivateRoutes>
        },
        {
          path:'addMaterial/:id',
          element:<PrivateRoutes>
            <PrivateTutorRoutes>
            <AddMaterial></AddMaterial>
            </PrivateTutorRoutes>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'updateMaterial/:id',
          element:<PrivateRoutes>
            <PrivateTutorRoutes>
            <UpdateMaterial></UpdateMaterial>
            </PrivateTutorRoutes>
          </PrivateRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/session/${params.id}`)
        },
        {
          path:'materials',
          element:<PrivateRoutes>
            <PrivateTutorRoutes>
            <Materials></Materials>
            </PrivateTutorRoutes>
          </PrivateRoutes>
        },
        {
          path:'allMaterials',
          element:<PrivateRoutes>
            <PrivateTutorRoutes>
            <AllMaterials></AllMaterials>
            </PrivateTutorRoutes>
          </PrivateRoutes>
        },

        // !{Admin}
        {
          path:'Admin/Users',
          element:<PrivateRoutes>
            <PrivateAdminRoutes>
            <Users></Users>
            </PrivateAdminRoutes>
          </PrivateRoutes>
        },
        {
          path:'Admin/AllSession',
          element:<PrivateRoutes>
            <PrivateAdminRoutes>
            <AllSessionAdmin></AllSessionAdmin>
            </PrivateAdminRoutes>
          </PrivateRoutes>
        },
        {
          path:'Admin/AllMaterials',
          element:<PrivateRoutes>
            <PrivateAdminRoutes>
            <ViewAllMaterial></ViewAllMaterial>
            </PrivateAdminRoutes>
          </PrivateRoutes>
        }
      ]
    }
  ]);
export default router;