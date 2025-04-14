import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="w-full bg-zinc-600 py-4 px-4 shadow-white  z-50">
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="text-2xl text-dar font-black">
          CHAT.AI
        </Link>
        <NavMenu />

        <div className="flex items-center gap-4">
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
