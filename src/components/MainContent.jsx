import { useState } from "react";
import MobileHeader from "./MobileHeader";
import DesktopNavigation from "./DesktopNavigation";
import OverviewSection from "./OverviewSection";
import CompaniesExperience from "./CompaniesExperience";

const MainContent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:ml-[240px] bg-black text-white min-h-screen w-full mb-10">
      <MobileHeader showMenu={showMenu} setShowMenu={setShowMenu} />
      <DesktopNavigation />
      <div className="flex justify-center md:justify-start items-center h-[50px] w-[100%] md:w-full border-b border-[#1D1D1D] px-4 md:px-6 text-sm md:text-base space-x-4">
        {["Overview", "Portfolio", "Experience", "Media"].map((tab, index) => (
          <span key={index} className={`cursor-pointer px-2 py-2 ${tab === "Overview" ? "border-b-2 md:border-b-0 border-white text-white" : "text-gray-400"}`}>
            {tab}
          </span>
        ))}
      </div>
      <OverviewSection />
      <CompaniesExperience />
    </div>
  );
};

export default MainContent;
