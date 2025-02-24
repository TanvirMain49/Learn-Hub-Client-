import React from "react";
import AllSessionBanner from "../Home/AllSessionBanner";
import SuccessStoryCard from "./SuccessStoryCard";

export default function SuccessStory() {
  const successStories = [
    {
      id: 1,
      name: "John Doe",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "I improved my coding skills by completing several projects and learning React. Now, I have landed my first job as a frontend developer!",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      story:
        "Thanks to online coding boot camps and constant practice, I mastered JavaScript and now work as a software engineer at a tech company.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      story:
        "I went from being a beginner in web development to creating my own successful portfolio website that landed me multiple freelancing gigs.",
    },
    {
      id: 4,
      name: "Michael Brown",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      story:
        "By taking part in coding challenges on platforms like HackerRank, I improved my problem-solving skills and am now working as a backend developer.",
    },
    {
      id: 5,
      name: "Emily Davis",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      story:
        "After dedicating time to mastering React and Node.js, I now lead a team at a startup, building full-stack web applications.",
    },
    {
      id: 6,
      name: "Daniel Harris",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      story:
        "Through continuous learning and mentorship, I gained expertise in machine learning and am now working as a data scientist.",
    },
  ];
  return (
    <div>
      <AllSessionBanner
        title="Inspiring Success Stories of Growth and Achievement"
        description="Explore the inspiring journeys of learners who turned their dreams into reality. Discover how they overcame challenges, achieved their goals, and transformed their lives through dedication and perseverance. Get motivated by real stories of success and start your own journey today!"
        img="https://img.freepik.com/free-photo/anime-style-students-attending-school_23-2151066405.jpg?t=st=1740339260~exp=1740342860~hmac=ea51227e55ca365193cdf94de9942295a039eb58e3ad808725355d13394a99c2&w=1380"
        link1="All Susses"
        route1="/allSuccess"
      />
      <div className="md:w-10/12 md:mx-auto mx-8 grid grid-cols-1 md:grid-cols-3 justify-center">
        {successStories.map((story) => (
          <div key={story.id} className="md:w-1/3 p-4">
            <SuccessStoryCard story={story} />
          </div>
        ))}
      </div>
    </div>
  );
}
