import {  Link} from "react-router-dom";
const Navbar = () => {
    const navList = (
        <>
            <li>
                <Link to='/'>Featured</Link>
            </li>
            
            <li>
                <Link to='/aboutus'>About Us</Link>
            </li>
            <li>
                <Link to='/fasilities'>Fasilities</Link>
            </li>
            <li>
                <Link to='/finddoctor' >Find Doctor</Link>
            </li>
            <li>
                <Link to='/contact'>Contact</Link>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start mr-2">
                    <div className="dropdown">
                        <label tabIndex={0} className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-sky-500 text-white rounded-box w-52"
                        >
                            {navList}
                        </ul>
                    </div>
                    <a className="text-5xl font-bold text-sky-500">weCare</a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 ">
                        {navList}
                    </ul>
                </div>
                <div className="navbar-end">
                <a
                    href="#_"
                    className="relative bg-sky-500 text-white inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium transition duration-300 ease-out border-2  rounded-full shadow-md group"
                >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full  duration-300 -translate-x-full text-white group-hover:translate-x-0 ease">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            ></path>
                        </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                        Book Now
                    </span>
                    <span className="relative invisible">Button Text</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
