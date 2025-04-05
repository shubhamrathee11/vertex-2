import { FaChartBar, FaUser, FaLink, FaClipboard, FaHome } from "react-icons/fa";

const MobileSidebarBottom = () => {
  const activeItem = "Analytics";

  const navItems = [
    { name: "Dashboard", icon: <FaHome /> },
    { name: "Analytics", icon: <FaChartBar /> },
    { name: "Connect", icon: <FaLink /> },
    { name: "Dealroom", icon: <FaClipboard /> },
    { name: "Profile", icon: <FaUser /> },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-[#1D1D1D] flex justify-around py-3 z-50">
      {navItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`text-[24px] transition transform hover:scale-110 
            ${item.name === activeItem ? "text-white" : "text-gray-500"} 
            hover:text-white`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default MobileSidebarBottom;
