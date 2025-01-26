import React from "react";
import DasHeading from "../../../Shared/DashBoardHeading";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import NoteCard from "./NoteCard";
import Lottie from "lottie-react";
import Note from "../../../../public/Animation - 1737810743733.json"

const MangeNote = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: notes = [] } = useQuery({
    queryKey: ["note", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`notes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <DasHeading Heading="Mange Note"></DasHeading>
      {notes.length ? (
        <div className="w-11/12 mx-auto grid grid-cols-3 gap-9">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note}></NoteCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
            <Lottie animationData={Note} loop={true} className="max-w-72"/>
            <h1 className="text-center text-3xl font-extrabold">Create Note First</h1>
        </div>
      )}
    </div>
  );
};

export default MangeNote;
