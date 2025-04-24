import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/store";
import { navLinks } from "./constants";
import { AnimatePresence, motion } from "framer-motion";

import { LuX } from "react-icons/lu";
import Button from "./components/Button";
import { TOOGLE_MOBILE_MENU } from "./store/promptSlice";

const Layout = () => {
  const isMoblieMenuOpen = useSelector(
    (state: RootState) => state.prompt.isMoblieMenuOpen
  );
  const dispatch = useDispatch();

  function closeMobileMenu() {
    dispatch(TOOGLE_MOBILE_MENU());
  }

  return (
    <div className="relative font-roboto-bold h-[calc(100dvh)] overflow-hidden">
      <AnimatePresence>
        {isMoblieMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.4 }}
            className="lg:hiddenq absolute w-[80dvw] h-screen bg-white top-0 right-0 z-10"
          >
            <div className="relative w-full h-full">
              <ul className="flex flex-col w-full h-full items-center justify-center gap-3">
                {navLinks.map((link) => (
                  <Link key={link.id} to={link.path}>
                    {link.title}
                  </Link>
                ))}
              </ul>

              <Button
                click={closeMobileMenu}
                Icon={LuX}
                customStyle="absolute z-20 top-5 right-5"
              ></Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header />
      <main className="grid grid-cols-12 h-full ">
        <Siderbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
