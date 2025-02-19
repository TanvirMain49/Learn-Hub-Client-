import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllCourse({ bookedSessions }) {
  const navigate = useNavigate();
    console.log(bookedSessions)
  return (
    <div className="w-full mt-8">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200 sticky top-0">
              <tr>
                <th className="p-2 border">Course Image</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Tutor</th>
              </tr>
            </thead>
            <tbody>
              {bookedSessions?.slice(0, 5).map((session, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                     <td className='hidden lg:block'>
                    <div className="flex justify-center items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12 sm:h-16 sm:w-16">
                          <img src={session.imageUrl} alt={session.title} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 border">{session.title}</td>
                  <td className="p-2 border">{session.tutorName}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="text-center p-4">
          <button
            onClick={() => navigate("/dashboard/bookedSession")}
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            View All Sessions
          </button>
        </div>
      </div>
    </div>
  );
}
