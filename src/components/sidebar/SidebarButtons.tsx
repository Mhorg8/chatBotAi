import {Button} from "../ui/button.tsx";
import {LuMenu, LuPlus} from "react-icons/lu";
import {useAppDispatch, useAppSelector} from "../../lib/reduxHook.ts";
import {toggleSidebar} from "../../lib/redux/theme/themeSlice.ts";
import {addNewChat} from "../../lib/redux/search/serchSlice.ts";

const SidebarButtons = () => {
    const dispatch = useAppDispatch()
    const sidebarState = useAppSelector((state) => state.theme.sidebarState)
    return (
        <div className="space-y-5">
            <Button onClick={() => dispatch(toggleSidebar())} size="icon" className="" variant="secondary">
                <LuMenu className="w-4 h-4"/>
            </Button>
            <Button onClick={() => dispatch(addNewChat())} size={!sidebarState ? 'icon' : "default"} variant="secondary"
                    className="flex items-center hover:bg-black hover:text-white hoverEffect">
                <LuPlus className="w-4 h-4"/>
                {sidebarState && <p> Add new Chat</p>}
            </Button>
        </div>
    );
};

export default SidebarButtons;