import Header from "../Header.tsx";
import OverView from "./OverView.tsx";
import SearchBar from "./SearchBar.tsx";

const MainContent = () => {
    return (
        <div className="flex-1 h-screen flex flex-col">
            <Header/>
            <OverView/>
            <div className="px-4">
            <SearchBar/>
            </div>
        </div>
    );
};

export default MainContent;