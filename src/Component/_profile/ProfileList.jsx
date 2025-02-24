import { FaUserCog, FaEnvelope, FaChartLine } from "react-icons/fa";

export default function ProfileList() {
  const menuItems = [
    {
      id: 1,
      icon: <FaUserCog className="w-6 h-6 text-black" />,
      title: "My Profile",
      description: "Account Setting Profile",
    },
    {
      id: 2,
      icon: <FaEnvelope className="w-6 h-6 text-black" />,
      title: "My Message",
      description: "Inbox & Drafts",
    },
    {
      id: 3,
      icon: <FaChartLine className="w-6 h-6 text-black" />,
      title: "My Activity",
      description: "Logs & Notification",
    },
  ];

  return (
    <div className="space-y-4">
      {menuItems.map((item) => (
        <div key={item.id} className="flex items-center p-3 border rounded-lg shadow-sm border-black bg-white dark:bg-neutral-700">
          {/* Icon Section */}
          <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full bg-white dark:bg-neutral-400">
            {item.icon}
          </div>
          {/* Text Section */}
          <div className="ml-4 cursor-pointer">
            <h3 className="text-base font-semibold text-black dark:text-white/80">{item.title}</h3>
            <p className="text-gray-500 text-sm dark:text-white/80">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

;
