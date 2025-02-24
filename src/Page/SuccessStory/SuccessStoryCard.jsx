import React from "react";

export default function SuccessStoryCard({ story }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 flex flex-col text-center items-center dark:bg-neutral-700">
      <img
        className="w-16 h-16 rounded-full object-cover mr-4"
        src={story.image}
        alt={story.name}
      />
      <div className="px-6 py-4">
        <h1 className="font-bold text-xl mb-2 dark:text-white/80">{story.name}</h1>
        <p className="text-gray-700 text-base dark:text-white/60">{story.story}</p>
      </div>
    </div>
  );
}
