import {Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png"


const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center py-5">
            <div>
                
               <Link to="/">
               <img src={Logo} alt="" />
               </Link>
            </div>
            <ul className="flex gap-6">
                <li>
                <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "font-bold text-lg"
                        }
                        >
                        Home
                    </NavLink>
                </li>

                <li>
                <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "font-bold text-lg"
                        }
                        >
                        Donation
                    </NavLink>
                </li>

                <li>
                <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline font-bold text-lg" : "font-bold text-lg"
                        }
                        >
                        Statistics
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;