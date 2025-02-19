import React, { useState } from "react";
import useRole from "../../Hooks/useRole";
import AdminDash from "./Admin/AdminDash";
import StudentDash from "./Student/StudentDash";

const DashBoardBanner = () => {
  const {isRole} = useRole();
  return <>
    {
      isRole === "Admin" && <AdminDash />
    }
    {
      isRole === "Student" && <StudentDash />
    }
    
  </>;
};

export default DashBoardBanner;
