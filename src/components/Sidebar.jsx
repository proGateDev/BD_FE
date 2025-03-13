import { useState } from "react";
import { FiMenu, FiHome, FiBox, FiLogOut, FiUsers, FiEdit, FiInbox, FiGrid } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-[#1e293b] text-white ${
        isOpen ? "w-72" : "w-20"
      } transition-all duration-300 ease-in-out shadow-lg rounded-l-3xl overflow-hidden flex flex-col justify-between`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex items-center justify-center hover:bg-blue-700 transition rounded-tl-3xl"
      >
        <FiMenu size={28} />
      </button>

      <nav className="mt-10 space-y-4">
        <NavItem icon={<FiHome />} label="Dashboard" isOpen={isOpen} />
        <NavItem icon={<FiGrid />} label="Kanban" isOpen={isOpen} badge="Pro" />
        <NavItem icon={<FiInbox />} label="Inbox" isOpen={isOpen} badge="3" />
        <NavItem icon={<FiUsers />} label="Users" isOpen={isOpen} />
        <NavItem icon={<FiBox />} label="Products" isOpen={isOpen} />
        <NavItem icon={<FiLogOut />} label="Sign In" isOpen={isOpen} />
        <NavItem icon={<FiEdit />} label="Sign Up" isOpen={isOpen} />
      </nav>

      {isOpen ? (
        <div className="m-4 p-4 bg-blue-900 rounded-lg  hidden md:block">
          <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded ">Beta</span>
          <p className="text-sm mb-2">Preview the new dashboard navigation! You can turn the new navigation off for a limited time in your profile.</p>
          <a href="#" className="text-blue-400 hover:underline">Turn new navigation off</a>
        </div>
      ) : (
        <div className="m-4 p-2 bg-blue-700 rounded-full text-xs font-bold text-yellow-300 block">
          New*
        </div>
      )}
    </div>
  );
};

const NavItem = ({ icon, label, isOpen, badge }) => (
  <div
    className="flex items-center space-x-4 px-6 py-3 cursor-pointer rounded-r-full hover:bg-blue-700 transition-transform transform hover:scale-105 relative"
  >
    {icon}
    {isOpen && (
      <div className="flex items-center justify-between w-full">
        <span className="text-lg font-medium">{label}</span>
        {badge && (
          <span
            className={`ml-2 text-xs font-bold px-2 py-0.5 rounded-full ${
              badge === "Pro" ? "bg-gray-600" : "bg-blue-500"
            }`}
          >
            {badge}
          </span>
        )}
      </div>
    )}
  </div>
);

export default Sidebar;