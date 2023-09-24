import { Outlet } from "react-router-dom";
import Navbar from "../Components/Header/Navbar/Navbar";


const MainLaout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <Outlet />          
        </div>
    );
};

export default MainLaout;