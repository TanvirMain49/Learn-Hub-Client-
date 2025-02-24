import React, { useState } from "react";

export default function Assignment() {
  const [assignments] = useState([
    {
      id: 1,
      title: "React Basics",
      description:
        "Learn the fundamentals of React, including components, JSX, and state management.",
    },
    {
      id: 2,
      title: "Tailwind Styling",
      description:
        "Understand how to style applications efficiently using Tailwind CSS utility classes.",
    },
    {
      id: 3,
      title: "API Integration",
      description:
        "Learn how to fetch and display data using REST APIs in a React application.",
    },
    {
      id: 4,
      title: "Database Design",
      description:
        "Explore relational and non-relational database models and their best practices.",
    },
    {
      id: 5,
      title: "Next.js Routing",
      description:
        "Learn about dynamic routing, SSR, and SSG in Next.js for optimized web applications.",
    },
  ]);

  return (
    <div className="shadow-lg rounded-xl p-4 mt-8 max-w-full">
      <h2 className="text-lg font-semibold mb-4 text-center">
        Assignment Tasks
      </h2>
      <div className="grid grid-cols-1 gap-4">
        {assignments.slice(0, 4).map((assignment) => (
          <div
            key={assignment.id}
            className="p-4 border rounded-lg bg-white dark:bg-neutral-700 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-base font-bold dark:text-white/80">{assignment.title}</h3>
            <p className="text-gray-600 mt-1 text-sm dark:text-white/60">
              {assignment.description}
            </p>
            <button className="mt-2 text-blue-500 hover:text-blue-700 underline">
              See More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
