import { FaLinkedin, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import ceo from "../assets/ceo.png";
import twitter from "../assets/twitter.jpg";

const OverviewSection = () => (
  <div className="p-4 md:p-6 h-[338px] md:h-[225px]">
    <h2 className="text-lg md:text-xl font-semibold">Overview</h2>
    <div className="border-[#1D1D1D] bg-black border-1 p-4 md:p-6 rounded-md mt-3">
      <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
        <img className="w-30 h-30 rounded-full" src={ceo} />
        <div className="text-center md:text-left mt-3 md:mt-0 w-full">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="text-[24px] font-semibold">Mr A</span>
            <FaCheckCircle className="text-blue-500 text-lg" />
          </div>
          <p className="text-gray-400 text-xs mb-3 md:text-sm">Co-Founder & CEO @Vertx</p>
          <div className="flex justify-center md:justify-start">
            <p className="text-gray-500 text-xs bg-white pb-1 inline-block px-2 rounded mt-1">Entrepreneur</p>
          </div>
          <div className="flex flex-row md:flex-row justify-center md:justify-start space-x-2 mt-2">
            <FaLinkedin className="text-blue-500 text-xl" />
            <img src={twitter} className="rounded-full h-5 w-5" />
            <FaEnvelope className="text-red-500 text-xl" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverviewSection;
