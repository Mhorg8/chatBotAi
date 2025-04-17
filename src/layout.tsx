import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Siderbar from "./components/Siderbar";
import Provider from "react-redux";
import { store } from "./store/store";
const Layout = () => {
  return (
    <div className=" font-roboto-bold h-[calc(100dvh)] overflow-hidden">
      <Header />
      <main className="grid grid-cols-12 h-full ">
        <Siderbar />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
