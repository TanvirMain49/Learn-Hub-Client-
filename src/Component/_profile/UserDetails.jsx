import React from "react";
import useAuth from "../../Hooks/useAuth";
import { FaUserCircle, FaGlobe, FaEnvelope } from "react-icons/fa";

export default function UserDetails() {
  const { user } = useAuth();

  const userInfo = [
    { label: "User ID", value: user?.uid.slice(0, 5), icon: <FaUserCircle /> },
    { label: "User Name", value: user?.displayName, icon: <FaUserCircle /> },
    { label: "Email Address", value: user?.email, icon: <FaEnvelope /> },
    { label: "Address", value: user?.address, icon: <FaGlobe /> },
    { label: "Post Code", value: user?.postcode, icon: <FaGlobe /> },
    { label: "City", value: user?.city, icon: <FaGlobe /> },
    { label: "Country", value: user?.country, icon: <FaGlobe /> },
    { label: "Joined Since", value: user?.createdAt, icon: <FaGlobe /> },
    { label: "Website", value: user?.website, icon: <FaGlobe /> },
    { label: "Type", value: user?.type, icon: <FaGlobe /> },
  ];

  return (
    <div className="p-6 mr-4 bg-white shadow-md rounded-lg w-full border border-black">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Information</h2>
        <button className="px-4 py-1 text-white bg-black rounded-md">Edit</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {userInfo.map((item, index) => (
          <div key={index} className="bg-gray-100 p-3 rounded-md">
            <p className="text-xs text-gray-500 font-semibold">{item.label}</p>
            <p className="text-md font-bold flex items-center gap-2">
              {item.value ? item.value : <span className="text-gray-400 flex items-center gap-3">{item.icon} Not Provided</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
