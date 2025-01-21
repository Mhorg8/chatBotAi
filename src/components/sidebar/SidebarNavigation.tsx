import {Link} from "react-router-dom";
import {LuLockKeyhole, LuLogIn, LuSettings} from "react-icons/lu";
import {useAppSelector} from "../../lib/reduxHook.ts";

const SidebarNavigation = () => {
    const sidebarState = useAppSelector((state) => state.theme.sidebarState);

    return (
        <nav className="flex flex-col gap-3 ">
            <Link to='/' className="sidebar__item border-0">
                <LuLogIn className="w-5 h-5"/>
                {sidebarState && <p>Log in</p>}
            </Link>
            <Link to='/' className="sidebar__item border-0">
                <LuSettings className="w-5 h-5"/>
                {sidebarState && <p>Setting</p>}

            </Link>
            <Link to='/' className="sidebar__item">
                <LuLockKeyhole className="w-5 h-5"/>
                {sidebarState && <p>Privacy policy</p>}

            </Link>
        </nav>
    );
};

export default SidebarNavigation;