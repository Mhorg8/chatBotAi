import Cards from "./Cards.tsx";
import {useAppSelector} from "../../lib/reduxHook.ts";
import Result from "./Result.tsx";
import Loader from "./Loader.tsx";
import UserInfo from "./UserInfo.tsx";

const OverView = () => {
    const {loading, searchResult} = useAppSelector(state => state.search)

    return (
        <div
            className="container flex flex-col items-start justify-start py-10 h-fit md:h-full  max-h-[70dvh] overflow-y-scroll result__view">
            {!loading ? <>

                    {searchResult ?
                        <div>
                            <UserInfo/>
                            <Result/>
                        </div>
                        : <>
                            <h1
                                className="text-3xl md:text-5xl font-bold tracking-wide  py-2"><span
                                className="title">Hello Mohammad,</span>
                                <br/> How can i help you ?
                            </h1>
                            <Cards/>
                        </>
                    }
                </>

                : <Loader/>
            }
        </div>
    )
}


export default OverView;



