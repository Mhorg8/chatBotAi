import UserInfo from "./UserInfo.tsx";
import {Loader2} from "lucide-react";

const Loader = () => {

    return (
        <>
            <UserInfo/>
            <div className="w-full flex items-center justify-center h-full">
                <Loader2 className="w-24 h-24 animate-spin text-blue-600"/>
            </div>
        </>
    );
};

export default Loader;