import React from "react";
import useAuth from "../../Hooks/useAuth";
import useRole from "../../Hooks/useRole";
import { GoVerified } from "react-icons/go";

export default function ProfileCard() {
  const { user } = useAuth();
  const { isRole } = useRole();

  return (
    <div className="w-96 bg-white shadow-lg rounded-xl overflow-hidden border border-black">
      {/* Profile Image & Info */}
      <div className="flex items-center gap-4 p-6">
        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
          <img 
            src={user?.photoURL || "https://via.placeholder.com/150"} 
            alt={user?.displayName || "User"} 
            className="w-full h-full object-cover" 
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{user?.displayName || "Unknown User"}</h2>
          <p className="text-sm text-gray-500 capitalize">{isRole || "User"}</p>
          <p className="text-sm text-gray-400">{user?.email || "No email available"}</p>
        </div>
      </div>

      {/* Verify Account Section */}
      <div className="bg-gray-100 p-4 flex items-center justify-center gap-2 text-black font-semibold text-sm rounded-b-xl cursor-pointer hover:bg-gray-200 transition">
        <GoVerified className="text-lg" />
        <span>Verify Account</span>
      </div>
    </div>
  );
}
