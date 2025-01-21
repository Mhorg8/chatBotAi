import {LuMessageCircleMore} from "react-icons/lu";

const SidebarChatList = ({searchHistory}: { searchHistory: string[] }) => {
    return (
        <div className="flex flex-col items-start flex-1 mt-5 border-b-2 border-black/10 w-full mb-1 ">
            <h3 className="font-semibold text-xl">Recent chats</h3>
            {/* chat list*/}
            <ul className="flex flex-col gap-3.5 mt-3 w-full ">
                
                {searchHistory.map((item) =>
                    <li key={item} className="sidebar__item pb-1 group">
                        <LuMessageCircleMore className="w-4 h-4"/>
                        <p className="capitalize text-sm font-medium">{item}</p>
                    </li>)}

            </ul>
        </div>
    );
};

export default SidebarChatList;