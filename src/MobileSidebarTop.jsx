import icon from "../assets/icon.jpg";

const MobileSidebarTop = () => (
  <div className="md:hidden fixed top-4 left-4 z-50">
    <img src={icon} alt="Logo" className="w-[25px] h-[25px] rounded-full" />
  </div>
);

export default MobileSidebarTop;
