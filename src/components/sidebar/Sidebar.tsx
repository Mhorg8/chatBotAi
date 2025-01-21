import SidebarButtons from "./SidebarButtons.tsx";
import SidebarChatList from "./SidebarChatList.tsx";
import {useAppSelector} from "../../lib/reduxHook.ts";
import SidebarNavigation from "./SidebarNavigation.tsx";
import {motion} from 'motion/react'

const Sidebar = () => {
    const sidebarState = useAppSelector((state) => state.theme.sidebarState);
    const {searchHistory} = useAppSelector(state => state.search)
    const animationVariants = {
        hidden: {
            opacity: 0,
            display: 'none'
        },
        animate: {
            opacity: 1,
            display: 'flex'
        }
    }

    return (
        <div
            className="h-full bg-gray-200 w-fit py-7 px-5 flex flex-col justify-between">
            {/* add new chat button */}
            <SidebarButtons/>
            {sidebarState && (
                <motion.div className="w-full flex-1 flex flex-col items-start justify-between"
                            variants={animationVariants}
                            initial="hidden"
                            animate='animate'
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}>
                    <SidebarChatList searchHistory={searchHistory} />
                    {/*  navigation  */}
                    <SidebarNavigation/>
                </motion.div>
            )}
        </div>
    );
};

export default Sidebar;