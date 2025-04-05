import SidebarLeftPanel from "./SidebarLeftPanel";
import SidebarRightPanel from "./SidebarRightPanel";

const SidebarContainer = () => (
  <div className="hidden md:flex flex-row bg-black text-white border-r border-[#1D1D1D] h-screen fixed top-0 left-0 w-[240px]">
    <SidebarLeftPanel />
    <SidebarRightPanel />
  </div>
);

export default SidebarContainer;
