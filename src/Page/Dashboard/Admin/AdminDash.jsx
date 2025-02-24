import React, { useState } from "react";
import TotalStudent from "../../../Component/TotalStudent";
import TotalTutor from "../../../Component/TotalTutor";
import TotalCourse from "../../../Component/TotalCourse";
import TotalEarning from "../../../Component/TotalEarning";
import TotalRevenue from "../../../Component/TotalRevenue";
import Payment from "../../../Component/Payment";
import DashStudent from "../../../Component/DashStudent";
import DashTutor from "../../../Component/DashTuitor";
import useSessionAdmin from "../../../Hooks/useSessionAdmin";

export default function AdminDash() {
  const { cardAdmin, refetch } = useSessionAdmin();
  const [totalStudent, setTotalStudent] = useState("");
  const [totalTutor, setTotalTutor] = useState("");

  return (
    <>
      <h1 className="text-3xl font-bold dark:text-white/80">Dashboard</h1>
      <p className="text-gray-400">
        Welcome to <strong className="text-black dark:text-white">Admin</strong> Dashboard
      </p>

      {/* Cards Section */}
      <div className="flex md:flex-row flex-col md:justify-normal items-center gap-6 mt-6">
        <TotalStudent totalStudent={totalStudent} />
        <TotalTutor totalTutor={totalTutor} />
        <TotalCourse totalCourse={cardAdmin} />
        <TotalEarning />
      </div>

      {/* Revenue and Payment Section */}
      <div className="flex md:flex-row flex-col gap-6 mt-6">
        <TotalRevenue />
        <Payment />
      </div>

      {/* Students and Tutors Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-6 mt-6">
        <DashStudent setTotalStudent={setTotalStudent} />
        <DashTutor setTotalTutor={setTotalTutor} />
      </div>
    </>
  );
}
