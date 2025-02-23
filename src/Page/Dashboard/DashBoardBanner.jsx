import React, { useState } from "react";
import useRole from "../../Hooks/useRole";
import AdminDash from "./Admin/AdminDash";
import StudentDash from "./Student/StudentDash";
import TutorDash from "./Tutor/TutorDash";

const DashBoardBanner = () => {
  const {isRole} = useRole();
  return <>
    {
      isRole === "Admin" && <div className="md:max-w-full max-w-sm"><AdminDash /></div>
    }
    {
      isRole === "Student" && <StudentDash />
    }
    {
      isRole === "Tutor" && <TutorDash />
    }
    
  </>;
};

export default DashBoardBanner;
