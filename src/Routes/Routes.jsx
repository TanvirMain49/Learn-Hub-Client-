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
import AllSession from "../Page/Home/AllSession";
import PersonalSession from "../Page/Dashboard/Tutor/PersonalSession";
import Materials from "../Page/Dashboard/Tutor/Materials";
import AllMaterials from "../Page/Dashboard/Tutor/AllMaterials";
import AddMaterial from "../Page/Dashboard/Tutor/AddMaterial";
import UpdateMaterial from "../Page/Dashboard/Tutor/UpdateMaterial";
import MangeNote from "../Page/Dashboard/Student/MangeNote";
import NoteDetails from "../Page/Dashboard/Student/NoteDetails";

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
          path:'mangeNotes/:id',
          element:<NoteDetails></NoteDetails>,
          loader: ({params})=> fetch(`http://localhost:5000/note/${params.id}`)
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