import {useAppSelector} from "../../lib/reduxHook.ts";

const UserInfo = () => {
    const {currentQuery} = useAppSelector(state => state.search)

    return (
        <div className="flex items-center gap-x-2">
            <div className="w-10 h-10 bg-yellow-400 rounded-full"></div>
            <div>
                <p className="capitalize text-[15px] font-semibold tracking-wide leading-none">mohammad</p>
                <p className="text-sm text-gray-600">{currentQuery}</p>
            </div>
        </div>
    );
};

export default UserInfo;