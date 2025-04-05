import { FiMoreVertical } from "react-icons/fi";
import logo from "../assets/logo.svg";

const MobileHeader = ({ showMenu, setShowMenu }) => (
  <div className="md:hidden flex items-center justify-center pt-3 relative">
    <img src={logo} alt="Logo" className="w-[30px] h-[30px]" />
    <button onClick={() => setShowMenu(!showMenu)} className="absolute right-4">
      <FiMoreVertical className="text-white text-2xl" />
    </button>
  </div>
);

export default MobileHeader;
