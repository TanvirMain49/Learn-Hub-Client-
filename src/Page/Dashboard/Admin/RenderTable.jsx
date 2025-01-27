import React from "react";
import UpdateRole from "./UpdateRole";

const RenderTable = ({ cards, status, refetch }) => {
  return (
    <div className="mb-10">
      <h2
        className={`text-xl font-bold mb-4 capitalize ${
          status === "pending"
            ? "text-yellow-500"
            : status === "success"
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {status} Sessions: ({cards.length})
      </h2>
        <table className="table overflow-x-auto">
          {/* head */}
          <thead className="text-center text-lg bg-black text-white">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Session</th>
              <th>Tutor Name</th>
              <th>Tutor Email</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody className="text-center text-base bg-gray-100">
            {cards.map((item, idx) => (
              <tr key={item._id} className="border border-black">
                <th>{idx + 1}</th>
                <td>
                  <div className="flex justify-center items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-16 w-16">
                        <img src={item.imageUrl} alt="session" />
                      </div>
                    </div>
                  </div>
                </td>
                <td className="font-semibold">{item.title}</td>
                <td className="font-semibold">{item.tutorName}</td>
                <td className="font-semibold">
                  <p>{item.tutorEmail}</p>
                </td>
                <td>
                  {item.price === "0" ? (
                    <h2>$Free</h2>
                  ) : (
                    <h2 className="font-bold">${item.price}</h2>
                  )}
                </td>
                <td>
                  <button
                  onClick={()=>document.getElementById(`my_modal_${item._id}`).showModal()}
                    className={`hover:text-white px-3 py-2 rounded font-bold border transition-all ease-in-out duration-300 ${
                      item.status === "pending"
                        ? "border-yellow-500 text-yellow-500 hover:bg-yellow-400"
                        : item.status === "success"
                        ? "border-green-500 text-green-500 hover:bg-green-400"
                        : "border-red-500 text-red-500 hover:bg-red-400"
                    }`}
                  >
                    {item.status}
                  </button>
                </td>
                <UpdateRole item={item} refetch={refetch}></UpdateRole>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  );
};

export default RenderTable;
