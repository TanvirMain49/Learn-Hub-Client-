import React from "react";

export default function SuccessStoryCard({ story }) {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 flex flex-col text-center items-center">
      <img
        className="w-16 h-16 rounded-full object-cover mr-4"
        src={story.image}
        alt={story.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{story.name}</div>
        <p className="text-gray-700 text-base">{story.story}</p>
      </div>
    </div>
  );
}
