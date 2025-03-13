import { useState } from "react";
import { FiMenu, FiHome, FiBox, FiLogOut } from "react-icons/fi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{
      borderRadius: "20px 0px 0px 20px",
      boxShadow: "#727c92d9 -3px 0px 5px 0px"
    }} className={`bg-blue-600 text-white ${isOpen ? "w-64" : "w-20"} transition-all duration-300`}>
      <button style={{
        borderRadius: "20px 0px 0px 0px"
      }} onClick={() => setIsOpen(!isOpen)} className="p-4">
        <FiMenu size={24} />
      </button>

      <nav className="mt-10 space-y-6">
        <NavItem icon={<FiHome />} label="Dashboard" isOpen={isOpen} />
        <NavItem icon={<FiBox />} label="Products" isOpen={isOpen} />
        <NavItem icon={<FiLogOut />} label="Logout" isOpen={isOpen} />
      </nav>
    </div>
  );
};

const NavItem = ({ icon, label, isOpen }) => (
  <div className="flex items-center space-x-4 px-4 py-2 hover:bg-blue-500 cursor-pointer">
    {icon}
    {isOpen && <span>{label}</span>}
  </div>
);

export default Sidebar;
