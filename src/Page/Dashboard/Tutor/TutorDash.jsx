import React, { useState } from "react";
import TutorBanner from "../../../Component/Tutor/TutorBanner";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import TotalCourse from "../../../Component/TotalCourse";
import StudentEnrolled from "../../../Component/Tutor/StudentEnrolled";
import DashSession from "../../../Component/Tutor/DashSession";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function TutorDash() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: items = [], refetch } = useQuery({
    queryKey: ["session", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/personalSession/${user?.email}`);
      return res.data;
    },
  });

  const [date, setDate] = useState(new Date());

  return (
    <div>
      <TutorBanner />

      <div className="flex gap-8">
        {/* Left Section */}
        <div className="w-[70%] shadow-xl p-4 rounded-lg">
          <TotalCourse totalCourse={items} />
          <DashSession items={items} />
        </div>

        {/* Right Section (Calendar) */}
        <div className="w-[30%] p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 dark:text-white/80">Select a Date</h2>
          <Calendar onChange={setDate} value={date} />
          <p className="mt-2 text-center">Selected Date: {date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}
