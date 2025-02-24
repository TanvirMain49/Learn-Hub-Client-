import React from "react";
import useAuth from "../../Hooks/useAuth";
import { FaUserCircle, FaGlobe, FaEnvelope } from "react-icons/fa";
import ProfileUpdate from "./ProfileUpdate"
import useProfileInfo from "../../Hooks/useStudent";

export default function UserDetails() {
  const {profile, refetch} = useProfileInfo();

  const userInfo = [
    { label: "User ID", value: profile?._id, icon: <FaUserCircle /> },
    { label: "User Name", value: profile?.name, icon: <FaUserCircle /> },
    { label: "Email Address", value: profile?.email, icon: <FaEnvelope /> },
    { label: "Address", value: profile?.address, icon: <FaGlobe /> },
    { label: "City", value: profile?.city, icon: <FaGlobe /> },
    { label: "Country", value: profile?.country, icon: <FaGlobe /> },
  ];

  return (
    <div className="p-6 bg-white dark:bg-neutral-700 shadow-md rounded-lg w-full border border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold dark:text-white/80">Information</h2>
        <button
          className="px-4 py-1 text-white dark:bg-neutral-600 bg-black rounded-md"
          onClick={() => document.getElementById(`my_modal_${profile?._id}`).showModal()}
        >
          Edit
        </button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {userInfo.map((item, index) => (
          <div key={index} className="bg-gray-100 dark:bg-neutral-400 p-3 rounded-md">
            <p className="text-xs text-gray-500 font-semibold">{item.label}</p>
            <p className="text-md font-bold flex items-center gap-2">
              {item.value ? (
                item.value
              ) : (
                <span className="text-gray-400 flex items-center gap-3">
                  {item.icon} Not Provided
                </span>
              )}
            </p>
          </div>
        ))}
      </div>
      <ProfileUpdate user={profile} refetch={refetch}/>
    </div>
  );
}
