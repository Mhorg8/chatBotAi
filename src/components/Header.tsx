import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="w-full bg-zinc-900 py-4 px-4 border-b border-white/20 z-50">
      <div className="flex items-center justify-between w-full h-full">
        <Link to="/" className="text-2xl text-white font-black">
          CHAT.AI
        </Link>
        <NavMenu />

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-white font-medium cursor-pointer text-base"
          >
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
