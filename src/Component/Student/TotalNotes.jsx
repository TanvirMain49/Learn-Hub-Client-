import React from "react";
import { FaNoteSticky } from "react-icons/fa6";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";

export default function TotalNotes() {
      const axiosSecure = useAxiosSecure();
      const {user} = useAuth();
      const { data: notes = [], refetch } = useQuery({
        queryKey: ["note", user?.email],
        queryFn: async () => {
          const res = await axiosSecure.get(`notes/${user?.email}`);
          return res.data;
        },
      });
  return (
    <div className="card border-black border boxFixed w-56">
      <div className="card-body flex-row gap-6 items-center dark:text-white/80">
        <FaNoteSticky className="text-5xl" />
        <div>
          <h2 className="text-xl font-extrabold"> Notes</h2>
          <h1 className="text-3xl font-bold">{notes.length}</h1>
        </div>
      </div>
    </div>
  );
}
