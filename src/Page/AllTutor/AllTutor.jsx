import React from "react";
import AllSessionBanner from "../Home/AllSessionBanner";
import useTutor from "../../Hooks/useTutor";
import AllTutorCard from "./AllTutorCard";

export default function AllTutor() {
  const { tutors, refetch } = useTutor();
  return (
    <div>
      <AllSessionBanner
        title="Discover and connect with expert educators across various subjects."
        description="Explore a diverse range of experienced educators to find the perfect tutor for your learning needs. View detailed profiles, session availability, and areas of expertise to make an informed choice. Connect with the right mentor and take your educational journey to the next level."
        img="https://img.freepik.com/free-photo/view-3d-male-teacher_23-2150710024.jpg?t=st=1740334356~exp=1740337956~hmac=bc79ce449266e908603de6ec926eeb60bcde69533851dddad2b9ae30b343ef4d&w=900"
        link1="All Tutor"
        route1="/allTutor"
      />
      <div
        className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
      >
        {tutors.map((tutor) => (
          <AllTutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </div>
  );
}
