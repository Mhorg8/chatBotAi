import {useAppSelector} from "../../lib/reduxHook.ts";


const Result = () => {
    const {searchResult} = useAppSelector(state => state.search)
    return (
        <div
            className="h-[60dvh] md:h-[70dch] overflow-y-scroll w-full rounded-lg result__view px-7  py-4 flex flex-col">


            <div className="flex-1  w-full mt-2">
                <p dangerouslySetInnerHTML={{__html: searchResult}}></p>
            </div>
        </div>
    );
};

export default Result;