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
  const { data: notes = [], refetch } = useQuery({
    queryKey: ["note", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`notes/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <DasHeading Heading="Mange Note" subHeading='Organize Your Notes'></DasHeading>
      {notes.length ? (
        <div className="md:w-11/12 md:mx-auto grid md:grid-cols-3 grid-cols-1 gap-9">
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} refetch={refetch}></NoteCard>
          ))}
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
            <Lottie animationData={Note} loop={true}  className="max-w-72"/>
            <h1 className="text-center text-3xl font-extrabold">Create Note First</h1>
        </div>
      )}
    </div>
  );
};

export default MangeNote;
