import logo from '../../../../public/Bdcalling Black logo.png'

const Navbar = () => {
    return (
        <div>
            <header className="bg-white shadow">
                <div className="container mx-auto flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="logo-area">
                        <img src={logo} alt="Logo" className="w-32" />
                    </div>

                    {/* Menu and Button Section */}
                    <nav className="menu-area flex items-center space-x-10"> {/* Ensure button and menu are in the same flex container */}
                        <ul className="flex space-x-10">
                            <li><a href="#" className="text-gray-800 hover:text-red-500 uppercase text-xs">HOME</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500 uppercase text-xs">PORTFOLIO</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500 uppercase text-xs">RESUME</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500 uppercase text-xs">BLOG</a></li>
                            <li><a href="#" className="text-gray-800 hover:text-red-500 uppercase text-xs">CONTACT</a></li>

                            {/* Cart Section */}
                            <div className="cart flex items-center">
                                <i className="fa-solid fa-cart-shopping text-lg"></i>
                                <p className="ml-1 text-red-500">0</p>
                            </div>
                        </ul>

                        {/* Button */}
                        <button className="bg-gradient-to-r from-gray-200 to-white shadow-md px-6 py-2 text-red-500 font-semibold rounded">
                            Buy Now
                        </button>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
