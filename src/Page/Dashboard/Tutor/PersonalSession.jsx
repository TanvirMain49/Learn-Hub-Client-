import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PersonalSession = () => {
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

      <div className="overflow-x-auto px-16 ">
        <table className="table smooch-sans">
          {/* head */}
          <thead className="text-center  text-2xl bg-black text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Session</th>
              <th>Tutor Name</th>
              <th>Registration Time</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center text-xl bg-gray-100">
            {items.map((item, idx) => (
              <tr>
                <th>1</th>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img src={item.imageUrl} />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.title}</td>
                <td className="font-semibold">{item.tutorName}</td>
                <td className="font-semibold"><p>{item.registerStart} - {item.registerEnd} </p>
                     </td>
                <td>
                  {item.price === "0" ? (
                    <h2 className="text-xl">$Free</h2>
                  ) : (
                    <h2 className="text-4xl font-bold">${item.price}</h2>
                  )}
                </td>
                <td><p className="border border-black px-1 rounded font-semibold text-white bg-yellow-500 smooch-sans">{item.status}</p></td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default PersonalSession;
