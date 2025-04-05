import { FaPlus } from "react-icons/fa";
import logo from "../assets/logo.svg";
import icon from "../assets/icon.jpg";
import dog from "../assets/dog.jpg";
import cat from "../assets/cat.jpeg";

const profiles = [icon, dog, cat];

const SidebarLeftPanel = () => (
  <div className="w-[50px] flex flex-col items-center border-r border-[#1D1D1D]">
    <div className="w-full flex items-center justify-center h-[50px] border-b border-[#1D1D1D]">
      <img src={logo} alt="Logo" className="w-[30px] h-[30px] rounded-full" />
    </div>
    <div className="flex flex-col items-center w-full border-b border-[#1D1D1D]">
      {profiles.map((profile, index) => (
        <div
          key={index}
          className={`relative w-full flex justify-center py-2 border-[#1D1D1D] border-t 
            ${index === 0 || index === 1 ? "" : "border-b border-[#1D1D1D]"} 
            ${index === 0 ? "bg-[#1D1D1D]" : ""}`}
        >
          <img src={profile} alt={`Profile ${index + 1}`} className="w-[32px] h-[32px] rounded-full border border-[#1D1D1D]" />
          <div
            className={`absolute bottom-2 right-2 w-[8px] h-[8px] rounded-full border-2 border-black 
              ${index === 1 ? "bg-red-500" : "bg-green-500"}`}
          />
        </div>
      ))}
    </div>
    <div className="mt-auto h-[50px] w-full border-t border-[#1D1D1D]">
      <div className="w-full flex items-center justify-center py-3">
        <button className="w-[24px] h-[24px] bg-black rounded flex items-center justify-center text-white">
          <FaPlus size={12} />
        </button>
      </div>
    </div>
  </div>
);

export default SidebarLeftPanel;
