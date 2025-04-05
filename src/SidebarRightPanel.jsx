const SidebarRightPanel = () => {
    const activeItem = "Analytics";
  
    const menuItems = [
      "Dashboard",
      "Analytics",
      "Connect",
      "Dealroom",
      "Profile",
      "Settings",
    ];
  
    return (
      <div className="flex flex-col w-[190px]">
        <div className="flex items-center h-[50px] px-4 border-b pl-10 border-[#1D1D1D]">
          <span className="font-semibold text-[18px] tracking-[-0.04em]">Vertxlabs, Inc</span>
        </div>
        <div className="flex flex-col mt-4 space-y-3 ml-10">
          {menuItems.map((item, index) => (
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
    );
  };
  
  export default SidebarRightPanel;
  