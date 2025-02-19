import React from "react";
import StudentBanner from "../../../Component/Student/StudentBanner";
import useBooked from "../../../Hooks/useBooked";
import StudentCourse from "../../../Component/Student/StudentCourese";
import TotalNotes from "../../../Component/Student/TotalNotes";
import CompleteCourse from "../../../Component/Student/CompleteCourse";
import AllCourse from "../../../Component/Student/AllCourse";

export default function StudentDash() {
  const { bookedSessions } = useBooked();
  console.log(bookedSessions)
  return (
    <div>
      <StudentBanner />

      <div className="flex w-[74%] flex-wrap gap-12 mt-10">
        <StudentCourse bookedSessions={bookedSessions.length} />
        <CompleteCourse />
        <TotalNotes/>
        <AllCourse bookedSessions={bookedSessions} />
      </div>
    </div>
  );
}
