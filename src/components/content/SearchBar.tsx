import {LuArrowRight, LuMic} from "react-icons/lu";
import {ChangeEvent, FormEvent} from "react";
import {useAppDispatch, useAppSelector} from "../../lib/reduxHook.ts";
import {onSearch, setLoading, setSearchQuery} from "../../lib/redux/search/serchSlice.ts";
import toast from "react-hot-toast";
import {run} from "../../lib/gemini.ts";

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const {searchQuery, loading} = useAppSelector(state => state.search);


    const handleSearch = async () => {
        if (searchQuery.length < 3) {
            toast.error('Please Fill the field !');
        }
        dispatch(setLoading())
        const response = await run(searchQuery)

        dispatch(onSearch(response));
    }

    return (
        <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()}
              className=" container rounded-full max-w-3xl mt-5  w-full bg-zinc-100 py-1.5 px-2.5 flex items-center justify-between shadow-md ">
            <input
                value={searchQuery}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    dispatch(setSearchQuery(e.currentTarget.value));
                }}
                type="text"
                placeholder="Anything..."
                className="searchbar__input"/>
            <div className="flex items-center gap-1">
                <button className="searchbar__button ">
                    <LuMic className="w-5 h-5"/>
                </button>

                <button onClick={handleSearch} disabled={!searchQuery || loading}
                        className="searchbar__button disabled:bg-black/40 disabled:text-black">
                    <LuArrowRight className="w-5 h-5"/>
                </button>

            </div>
        </form>
    );
};

export default SearchBar;