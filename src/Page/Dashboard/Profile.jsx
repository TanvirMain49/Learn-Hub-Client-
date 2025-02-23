import React from "react";
import useAuth from "../../Hooks/useAuth";
import ProfileCard from "../../Component/_profile/ProfileCard";
import GetApp from "../../Component/_profile/GetApp";
import ProfileList from "../../Component/_profile/ProfileList";
import UserDetails from "../../Component/_profile/UserDetails";
import TopCourse from "../../Component/_profile/TopCourse";

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="text-gray-400">Welcome, {user.displayName}</p>

      <div className="flex flex-col lg:flex-row items-start gap-6 mt-6">
        <div className="flex-1 flex flex-wrap items-start gap-4">
          <ProfileCard />
          <GetApp />
          <UserDetails />
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-auto">
          <ProfileList />
          <TopCourse />
        </div>
      </div>
    </div>
  );
}
