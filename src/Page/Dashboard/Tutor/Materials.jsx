import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import MaterialCard from "./MaterialCard";
import useAuth from "../../../Hooks/useAuth";

const Materials = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: items = [] } = useQuery({
      queryKey: ["session", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/personalSession/${user?.email}`);
        return res.data;
      },
    });
  return (
    <div>
      <h1 className="text-5xl font-bold text-center">Add a New Session</h1>
      <p className="text-base text-center font-normal mt-3 mb-8 max-w-4xl mx-auto">
        Plan and schedule study sessions with ease. Add essential details, set
        timings, and ensure a well-structured learning experience for all
        participants.
      </p>
    
        <div className="grid grid-cols-3 gap-4">
        {
            items.map(item=><MaterialCard key={item._id} item={item}></MaterialCard> )
        }
        </div>

    </div>
  );
};

export default Materials;
