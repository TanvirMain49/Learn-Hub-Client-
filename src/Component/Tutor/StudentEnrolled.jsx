import React from "react";
import Users from "../../Page/Dashboard/Admin/Users";

export default function StudentEnrolled() {
  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <Users className="text-5xl" />
        <div>
          <h2 className="text-lg font-extrabold">Student Enrolled</h2>
          <h1 className="text-3xl font-bold">20</h1>
        </div>
      </div>
    </div>
  );
}
