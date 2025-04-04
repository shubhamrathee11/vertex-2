import { FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi"; // Three Dots Icon
import logo from "../assets/logo.svg";
import ceo from "../assets/ceo.png";
import twitter from "../assets/twitter.jpg";
import vertexLogo from "../assets/logo.svg"; // Replace with actual image
import company1Logo from "../assets/ceo.png"; // Replace with actual image

const MainContent = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="md:ml-[240px] bg-black text-white min-h-screen w-full mb-10">
      
      {/* Mobile Header - Centered Logo with Three Dots Menu */}
      <div className="md:hidden flex items-center justify-center pt-3 relative">
        <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
        <button onClick={() => setShowMenu(!showMenu)} className="absolute right-4">
          <FiMoreVertical className="text-white text-2xl" />
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-between items-center h-[50px] w-full border-b border-[#1D1D1D] px-4 md:px-6">
        <span className="text-gray-400 cursor-pointer">Profile</span>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400 cursor-pointer border-[#1D1D1D] py-3 pl-10 w-30 border-l-1">Activity</span>
          <button className="border-[#1D1D1D] text-gray-400 border-l-1 w-30 py-3.5 md:text-sm">Log out</button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center md:justify-start items-center h-[50px] w-[100%] md:w-full border-b border-[#1D1D1D] px-4 md:px-6 text-sm md:text-base space-x-4">
        {["Overview", "Portfolio", "Experience", "Media"].map((tab, index) => (
          <span key={index} className={`cursor-pointer px-2 py-2 ${tab === "Overview" ? "border-b-2 border-white text-white" : "text-gray-400"}`}>
            {tab}
          </span>
        ))}
      </div>

      {/* Overview Section */}
      <div className="p-4 md:p-6 h-[338px] md:h-[225px]">
        <h2 className="text-lg md:text-xl font-semibold">Overview</h2>
        <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md mt-3">
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
            
            {/* Profile Image */}
            <img className="w-30 h-30 rounded-full" src={ceo} />

            {/* Profile Details */}
            <div className="text-center md:text-left mt-3 md:mt-0 w-full">
              
              {/* Name and Verification Badge */}
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <span className="text-[24px] font-semibold">Mr A</span>
                <FaCheckCircle className="text-blue-500 text-lg" />
              </div>

              {/* Title */}
              <p className="text-gray-400 text-xs mb-3 md:text-sm">Co-Founder & CEO @Vertx</p>

              {/* Entrepreneur Tag */}
              <div className="flex justify-center md:justify-start">
                <p className="text-gray-500 text-xs bg-white pb-1 inline-block px-2 rounded mt-1">Entrepreneur</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex flex-row md:flex-row justify-center md:justify-start space-x-2 mt-2">
                <FaLinkedin className="text-blue-500 text-xl" />
                <img src={twitter} className="rounded-full h-5 w-5" />
                <FaEnvelope className="text-red-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founded Companies & Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-6">
        
        {/* Founded Companies */}
        <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md">
          <h3 className="text-xl font-semibold">Founded Companies</h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">02</h1>

          <div className="mt-4 space-y-4">
            {[
              { name: "Vertx", year: "2025", industry: "Fintech", role: "CEO", logo: vertexLogo, bgColor: "bg-green-600" },
              { name: "Company", year: "2023", industry: "QuickCommerce", role: "PROPRIETOR", logo: company1Logo, bgColor: "bg-purple-600" },
            ].map((company, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <img src={company.logo} alt={company.name} className="w-[30px] h-[30px] rounded-md border" />
                  <div>
                    <p className="text-sm font-semibold flex items-center">
                      {company.name}
                      <span className={`text-xs font-semibold text-white px-2 ml-3 rounded ${company.bgColor}`}>
                        {company.role}
                      </span>
                    </p>
                    <div className="flex space-x-1">
                    <p className="text-xs text-gray-400">Founded in {company.year} in</p>
                    <p className="text-xs font-semibold">{company.industry}</p>
                    </div>
                  </div>
                </div>
                <span className="text-gray-400 text-xs md:text-sm cursor-pointer">View Profile</span>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md">
          <h3 className="text-xl font-semibold">Experience</h3>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">03</h1>

          <div className="mt-4 space-y-3">
            {["Company A", "Company B", "Company C"].map((company, index) => (
              <div key={index} className="flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  <div className="w-7 h-7 bg-gray-300 rounded-md"></div>
                  <p className="text-sm font-semibold">{company}</p>
                </div>
                <span className="text-gray-400 text-xs md:text-sm cursor-pointer">View Profile</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default MainContent;
