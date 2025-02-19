import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import TotalStudent from "../../Component/TotalStudent";
import TotalTutor from "../../Component/TotalTutor";
import TotalCourse from "../../Component/TotalCourse";
import TotalEarning from "../../Component/TotalEarning";
import TotalRevenue from "../../Component/TotalRevenue";
import Payment from "../../Component/Payment";
import DashStudent from "../../Component/DashStudent";
import DashTutor from "../../Component/DashTuitor";
import useSessionAdmin from "../../Hooks/useSessionAdmin";
import useRole from "../../Hooks/useRole";

const DashBoardBanner = () => {
  const {isRole} = useRole();
  const { cardAdmin, refetch } = useSessionAdmin();
  const [totalStudent, setTotalStudent] = useState('');
  const [totalTutor, setTotalTutor] = useState('');


  return <div>
    <h1 className="text-3xl font-bold">Dashboard</h1>
    <p className="text-gray-400">Welcome to <strong className="text-black">{isRole}</strong> Dashboard</p>

    <div className="flex items-center mt-6 gap-8">
      <TotalStudent totalStudent={totalStudent}/>
      <TotalTutor totalTutor={totalTutor} />
      <TotalCourse totalCourse = {cardAdmin} />
      <TotalEarning />
    </div>

    <div className="flex items-center justify-center gap-10 mt-4">
      <TotalRevenue />
      <Payment />
    </div>

    <div className="flex items-center justify-between ">
      <DashStudent setTotalStudent={setTotalStudent} />
      <DashTutor setTotalTutor={setTotalTutor} />
    </div>
  </div>;
};

export default DashBoardBanner;
