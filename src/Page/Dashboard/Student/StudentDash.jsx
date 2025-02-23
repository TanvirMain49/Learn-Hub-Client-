import React from "react";
import StudentBanner from "../../../Component/Student/StudentBanner";
import useBooked from "../../../Hooks/useBooked";
import StudentCourse from "../../../Component/Student/StudentCourese";
import TotalNotes from "../../../Component/Student/TotalNotes";
import CompleteCourse from "../../../Component/Student/CompleteCourse";
import AllCourse from "../../../Component/Student/AllCourse";
import Assignment from "../../../Component/Student/Assignment";

export default function StudentDash() {
  const { bookedSessions } = useBooked();
  console.log(bookedSessions);

  return (
    <div>
      <StudentBanner />

      <div className="flex flex-col md:flex-row items-start gap-10">
        <div className="flex flex-wrap md:justify-normal justify-center max-w-[100%] md:max-w-[85%] xl:max-w-[80%] w-full gap-x-6 gap-y-8 mt-10">
          <StudentCourse bookedSessions={bookedSessions.length} />
          <CompleteCourse />
          <TotalNotes />
          <AllCourse bookedSessions={bookedSessions} />
        </div>

        <div className="w-full md:w-auto">
          <Assignment />
        </div>
      </div>
    </div>
  );
}
