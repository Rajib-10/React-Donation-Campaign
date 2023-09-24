import { Link, NavLink } from "react-router-dom";
import Logo from "../../../assets/Logo.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center py-5">
            <div>
                <Link>
                <img src={Logo} alt="" />
                </Link>
            </div>
            <ul className="flex gap-6">
                <li>
                <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Home
                    </NavLink>
                </li>

                <li>
                <NavLink
                        to="/donation"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                        }
                        >
                        Donation
                    </NavLink>
                </li>

                <li>
                <NavLink
                        to="/statistics"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
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