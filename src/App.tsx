import MainContent from "./components/content/MainContent.tsx";
import Sidebar from "./components/sidebar/Sidebar.tsx";

const App = () => {
    return (
        <div className="h-screen w-full flex">
            <Sidebar/>
            <MainContent/>
        </div>
    );
};

export default App;