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
    <div className="px-4">
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="text-gray-400">Welcome, {user?.displayName}</p>

      <div className="flex flex-col lg:flex-row items-start gap-6 mt-6">
        <div className="md:w-[70%] w-full flex flex-wrap items-start gap-x-5 gap-y-4">
          <ProfileCard />
          <GetApp />
          <UserDetails />
        </div>

        <div className="flex flex-col gap-6 w-full md:w-[30%]">
          <ProfileList />
          <TopCourse />
        </div>
      </div>
    </div>
  );
}
