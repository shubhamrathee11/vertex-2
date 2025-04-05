const DesktopNavigation = () => (
    <div className="hidden md:flex justify-between items-center h-[50px] w-full border-b border-[#1D1D1D] px-4 md:px-6">
      <span className="text-gray-400 cursor-pointer">Profile</span>
      <div className="flex items-center space-x-4">
        <span className="text-gray-400 cursor-pointer border-[#1D1D1D] py-3 pl-10 w-30 border-l-1">Activity</span>
        <button className="border-[#1D1D1D] text-gray-400 border-l-1 w-30 py-3.5 md:text-sm">Log out</button>
      </div>
    </div>
  );
  
  export default DesktopNavigation;
  