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
    <div>
      <h1 className="text-3xl font-bold">Profile</h1>
      <p className="text-gray-400">Welcome, {user.displayName}</p>

      <div className="flex items-start gap-3 mt-6">
        <div className="flex flex-1 flex-wrap items-start gap-x-3 gap-y-4 max-w-[799px]">
          <ProfileCard />
          <GetApp />
          <UserDetails />
        </div>

        <div className="flex justify-center flex-col gap-8">
          <ProfileList />
          <TopCourse />
        </div>
      </div>
    </div>
  );
}
