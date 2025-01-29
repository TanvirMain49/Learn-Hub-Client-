import React from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import DasHeading from "../../../Shared/DashBoardHeading";
import { FaBell, FaBellSlash } from "react-icons/fa";
import RejectedModal from "./RejectedModal";

const PersonalSession = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: items = [], refetch } = useQuery({
    queryKey: ["session", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/personalSession/${user?.email}`);
      return res.data;
    },
  });

  return (
    <>
      <DasHeading Heading=" Manage Your Sessions" subHeading="Organize Your Session"></DasHeading>
      <div className="overflow-x-auto md:px-16">
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
              <tr key={item._id}>
                <th>{idx+1}</th>
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
                <td className="font-semibold">
                  <p>
                    {item.registerStart} - {item.registerEnd}{" "}
                  </p>
                </td>
                <td>
                  {item.price === "0" ? (
                    <h2 className="text-xl">$Free</h2>
                  ) : (
                    <h2 className="text-4xl font-bold">${item.price}</h2>
                  )}
                </td>
                <td>
                    {item.status === "success" && (
                      <h2 className="hover:text-white px-3 py-2 rounded font-bold border border-green-500 text-green-500 hover:bg-green-400 transition-all ease-in-out duration-300">
                        {item.status}
                      </h2>
                    )} {item.status === "pending" && (
                      <h2 className="hover:text-white px-3 py-2 rounded font-bold border border-yellow-500 text-yellow-500 hover:bg-yellow-400 transition-all ease-in-out duration-300">
                        {item.status}
                      </h2>
                    )} {item.status === "rejected" && (
                      <div className="flex items-center gap-2">
                      <h2 className="hover:text-white px-3 py-2 rounded font-bold border border-red-500 text-red-500 hover:bg-red-400 transition-all ease-in-out duration-300 w-full">
                        {item.status}
                      </h2>
                      <button
                      className="text-red-500 font-bold hover:scale-125 transition-all ease-in-out"
                      onClick={()=>document.getElementById(`my_modal_${item._id}`).showModal()}
                      ><FaBell/></button>
                      </div>
                    )}
                    <RejectedModal item={item} refetch={refetch}></RejectedModal> 
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </>
  );
};

export default PersonalSession;
