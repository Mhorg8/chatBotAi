import { Link, Links } from "react-router-dom";
import NavMenu from "./NavMenu";
import { useSession } from "../hooks/useSession";
import { Avatar } from "@mui/material";
import { deepPurple, green } from "@mui/material/colors";
import { useState } from "react";
import { LuLogIn, LuMenu, LuX } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { TOOGLE_MOBILE_MENU } from "../store/promptSlice";
import { RootState } from "../store/store";
import Button from "./Button";

const Header = () => {
  const { session, setSession } = useSession();
  const isMobileMenuOpen = useSelector(
    (state: RootState) => state.prompt.isMoblieMenuOpen
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState<Boolean>(false);
  const dispatch = useDispatch();

  function openMobileMenu() {
    dispatch(TOOGLE_MOBILE_MENU());
  }

  function handleRemoveSession() {
    localStorage.removeItem("token");
    setSession(null);
    setIsDropdownOpen(false);
  }

  return (
    <div className="w-full bg-white  py-4 px-4 border-b border-priamry/60 z-50">
      <div className="flex items-center justify-between w-full h-full">
        <Link
          to="/"
          className="text-2xl text-primary font-black border border-light-green hover:bg-light-green hover:text-primary   transition-all duration-300 rounded-md p-0.5"
        >
          CHAT.AI
        </Link>
        <NavMenu />

        <div className="flex items-center gap-4 relative">
          {isDropdownOpen && (
            <ul className="absolute top-full right-4 bg-white rounded-md min-h-20 w-full mt-3">
              <li
                onClick={handleRemoveSession}
                className="px-3 py-2 bg-light-green  rounded-t-md hover:bg-text-primary cursor-pointer hoverEffect"
              >
                Logout
              </li>
              <Link
                className="px-3 py-2 bg-light-green hover:bg-text-primary cursor-pointer w-full block rounded-b-md hoverEffect"
                to="/setting"
              >
                Setting
              </Link>
            </ul>
          )}

          {session ? ( 
            <div className="flex items-center gap-3 justify-center">
              <p className="text-black">{session.email}</p>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="cursor-pointer"
              >
                <Avatar sx={{ background: green[700] }} />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-4">
              <Button link path="/login" Icon={LuLogIn}></Button>

              <Button click={openMobileMenu} Icon={LuMenu}></Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
