import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaDollarSign } from "react-icons/fa6";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export default function TotalEarning() {
  const axiosSecure = useAxiosSecure();
  const {data:total} = useQuery({
    queryKey:"totalEarning",
    queryFn: async()=>{
      const res = await axiosSecure.get('/total-revenue')
      return res.data;
    }
  })

  return (
    <div className="card border-black border boxFixed w-64">
      <div className="card-body flex-row gap-6 items-center">
        <FaDollarSign  className="text-5xl dark:text-white/80" />
        <div>
          <h2 className="text-lg font-extrabold dark:text-white/80">Total Earning</h2>
          <h1 className="text-3xl font-bold dark:text-white/80">${total?.total}</h1>
        </div>
      </div>
    </div>
  );
}
