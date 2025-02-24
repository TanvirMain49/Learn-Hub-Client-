import React from "react";
import { useNavigate } from "react-router-dom";

export default function AllCourse({ bookedSessions }) {
  const navigate = useNavigate();
    console.log(bookedSessions)
  return (
    <div className="md:w-full mt-8">
      <div className="bg-white dark:bg-neutral-700 shadow-md rounded-lg overflow-hidden">
        <div className="">
          <table className="w-full border-collapse dark:text-white/80">
            <thead className="bg-black text-white sticky top-0">
              <tr>
                <th className="p-2 border">Course Image</th>
                <th className="p-2 border">Title</th>
                <th className="p-2 border">Tutor</th>
              </tr>
            </thead>
            <tbody>
              {bookedSessions?.slice(0, 5).map((session, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                     <td className='block'>
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
        <div className="text-center p-4 dark:bg-neutral-700">
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
