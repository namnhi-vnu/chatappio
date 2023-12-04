import { Link } from "react-router-dom";
import { FaFacebookMessenger } from "react-icons/fa6";
const Navbar = () => {
    return (
        <>
            <nav className="py-4 bg-gray-700 text-white">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl">
                                <Link to="/">NTechs Chat</Link>
                            </h2>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="relative">
                                <span className="cursor-pointer text-2xl">
                                    <FaFacebookMessenger />
                                </span>
                                <span className="flex items-center justify-center w-4 h-4 rounded-full bg-red-600 text-xs absolute -right-2 -top-2">
                                    2
                                </span>
                            </div>
                            <ul className="flex items-center gap-4">
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>
                                <li>
                                    <Link to="/register">Register</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
