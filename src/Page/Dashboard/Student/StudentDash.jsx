import React, { useState } from "react";
import StudentBanner from "../../../Component/Student/StudentBanner";
import useBooked from "../../../Hooks/useBooked";
import StudentCourse from "../../../Component/Student/StudentCourese";
import TotalNotes from "../../../Component/Student/TotalNotes";
import CompleteCourse from "../../../Component/Student/CompleteCourse";
import AllCourse from "../../../Component/Student/AllCourse";
import Assignment from "../../../Component/Student/Assignment";
import Calendar from "react-calendar";

export default function StudentDash() {
  const { bookedSessions } = useBooked();
  const [date, setDate] = useState(new Date());

  return (
    <div>
      <StudentBanner />

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex flex-1 flex-wrap md:justify-normal justify-center max-w-[100%] md:w-[85%] md:gap-x-12 gap-x-6 gap-y-8 mt-10">
          <StudentCourse bookedSessions={bookedSessions.length} />
          <CompleteCourse />
          <TotalNotes />
          <AllCourse bookedSessions={bookedSessions} />
        </div>

        <div className="w-full md:w-[30%] flex flex-col gap-6 md:mt-8 mt-0">
          <div className="md:p-4 px-7 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Select a Date</h2>
            <Calendar onChange={setDate} value={date} />
          </div>
          <Assignment />
        </div>
      </div>
    </div>
  );
}
