import { FaChartBar, FaUser, FaCog, FaLink, FaClipboard, FaHome, FaPlus } from "react-icons/fa";
import logo from "../assets/logo.svg";
import icon from "../assets/icon.jpg"; // Profile icons
import dog from "../assets/dog.jpg";
import cat from "../assets/cat.jpeg";

const Sidebar = () => {
  const activeItem = "Analytics"; // Active menu item

  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex flex-row bg-black text-white border-r border-[#1D1D1D] h-screen fixed top-0 left-0 w-[240px]">
        
        {/* Left Sidebar - Logo & Profile Icons */}
        <div className="w-[50px] flex flex-col items-center border-r border-[#1D1D1D]">
          
          {/* Logo (Separated with Border) */}
          <div className="w-full flex items-center justify-center h-[50px] border-b border-[#1D1D1D]">
            <img src={logo} alt="Logo" className="w-[30px] h-[30px] rounded-full" />
          </div>

          {/* Profile Icons (Placed Just Below the Logo) */}
          <div className="flex flex-col items-center w-full border-b border-[#1D1D1D]">
            {[icon, dog, cat].map((profile, index) => (
              <div key={index} className={`relative w-full flex justify-center py-2 border-[#1D1D1D] border-t ${index === 0 || index === 1 ? "" : "border-b border-[#1D1D1D]"} ${index === 0 ? "bg-[#1D1D1D]" : ""}`}>
                <img 
                  src={profile} 
                  alt={`Profile ${index + 1}`} 
                  className={`w-[32px] h-[32px] rounded-full border border-[#1D1D1D]`}
                />
                {/* Dots for Profiles */}
                {index === 1 && (
                  <div className="absolute bottom-2 right-2 w-[8px] h-[8px] bg-red-500 rounded-full border-2 border-black"></div> // Red dot for second profile
                )}
                {index !== 1 && (
                  <div className="absolute bottom-2 right-2 w-[8px] h-[8px] bg-green-500 rounded-full border-2 border-black"></div> // Green dot for others
                )}
              </div>
            ))}
          </div>

          {/* Bottom "+" Button */}
          <div className="mt-auto h-[50px] w-full border-t-1 border-[#1D1D1D]">
            <div className="w-full flex items-center justify-center py-3">
              <button className="w-[24px] h-[24px] bg-black rounded flex items-center justify-center text-white">
                <FaPlus size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Company Name & Navigation */}
        <div className="flex flex-col w-[190px]">
          
          {/* Section A - Company Name */}
          <div className="flex items-center h-[50px] px-4 border-b pl-10 border-[#1D1D1D]">
            <span className="font-semibold text-[18px] tracking-[-0.04em]">Vertxlabs, Inc</span>
          </div>

          {/* Section B - Navigation Menu (No Icons in Desktop) */}
          <div className="flex flex-col mt-4 space-y-3 ml-10">
            {["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"].map((item, index) => (
              <a
                key={index}
                href="#"
                className={`text-[16px] tracking-[-0.04em] transition 
                  ${item === activeItem ? "text-white" : "text-gray-500"} 
                  hover:text-white`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile - Top Logo */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <img src={icon} alt="Logo" className="w-[25px] h-[25px] rounded-full" />
      </div>

      {/* Mobile - Bottom Navigation (Icons Only) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-black border-t border-[#1D1D1D] flex justify-around py-3 z-50">
        {[  
          { name: "Dashboard", icon: <FaHome /> },
          { name: "Analytics", icon: <FaChartBar /> },
          { name: "Connect", icon: <FaLink /> },
          { name: "Dealroom", icon: <FaClipboard /> },
          { name: "Profile", icon: <FaUser /> },
        ].map((item, index) => (
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
    </>
  );
};

export default Sidebar;
