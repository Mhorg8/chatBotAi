import { Link, useNavigate } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useSession } from "../hooks/useSession";
import { Avatar } from "@mui/material";
import { deepPurple, purple } from "@mui/material/colors";
import { useState } from "react";
import { LuLogIn, LuMenu, LuX } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

const Header = () => {
  const { session, setSession } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false);
  const isNavmenuOpen = useSelector(
    (state: RootState) => state.prompt.isNavmenuOpen
  );

  function handleRemoveSession() {
    localStorage.removeItem("token");
    setSession(null);
    setIsDropdownOpen(false);
  }

  return (
    <div className="w-full bg-zinc-900 py-4 px-4 border-b border-white/20 z-50">
      <div className="flex items-center justify-between w-full h-full">
        <Link
          to="/"
          className="text-2xl text-white font-black border border-purple-500 hover:bg-white hover:text-purple-500   transition-all duration-300 rounded-md p-0.5"
        >
          CHAT.AI
        </Link>
        <NavMenu />

        <div className="flex items-center gap-4 relative">
          {isDropdownOpen && (
            <ul className="absolute top-full right-4 bg-white rounded-md min-h-20 w-full mt-3">
              <li
                onClick={handleRemoveSession}
                className="px-3 py-2 bg-purple-100 rounded-t-md hover:bg-purple-300 cursor-pointer hoverEffect"
              >
                Logout
              </li>
              <Link
                className="px-3 py-2 bg-purple-100  hover:bg-purple-300 cursor-pointer w-full block rounded-b-md hoverEffect"
                to="/setting"
              >
                Setting
              </Link>
            </ul>
          )}

          {session ? (
            <div className="flex items-center gap-3 justify-center">
              <p className="text-white">{session.email}</p>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer"
              >
                <Avatar sx={{ background: deepPurple[300] }} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                to="/login"
                className="p-2 rounded-md border border-purple-500 text-white hover:text-purple-500 hover:bg-white hoverEffect"
              >
                <LuLogIn size={24} />
              </Link>

              <button className="p-2 rounded-md border border-purple-500 text-white hover:text-purple-500 hover:bg-white hoverEffect cursor-pointer">
                {isNavmenuOpen ? <LuX size={24} /> : <LuMenu size={24} />}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
