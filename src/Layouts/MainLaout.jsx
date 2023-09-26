import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLaout = () => {
    return (
        <div className="md:mx-5 lg:mx-3 xl:max-w-6xl xl:mx-auto">
            <Navbar />
            <Outlet />          
        </div>
    );
};

export default MainLaout;