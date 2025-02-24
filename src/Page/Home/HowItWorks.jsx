import React from "react";

const steps = [
  {
    id: 1,
    title: "Step 1: Sign Up",
    description: "Create an account by providing your details or logging in via Google.",
    icon: "🔑",
  },
  {
    id: 2,
    title: "Step 2: Browse Options",
    description: "Explore our wide range of products, services, or resources tailored to your needs.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Step 3: Choose and Customize",
    description: "Select what you need and personalize it according to your preferences.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Step 4: Enjoy Your Benefits",
    description: "Start using your selected items and enjoy exclusive benefits designed for you.",
    icon: "🎉",
  },
];

const HowItWorks = () => {
  return (
    <div className="w-11/12 mx-auto mt-16">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white/80">How It Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white dark:bg-neutral-700 shadow-xl rounded-lg p-6 text-center hover:shadow-2xl transform transition-all duration-300 ease-in-out"
          >
            <div className="text-6xl text-blue-500 mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white/80">{step.title}</h3>
            <p className="text-gray-600 dark:text-white/60">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
