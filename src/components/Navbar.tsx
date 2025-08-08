import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CodeXml } from "lucide-react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="flex items-center justify-between px-4 py-4 bg-transparent relative"
            style={{ fontFamily: "Raleway, sans-serif" }}
        >
            {/* Left side - Logo */}
            <div className="flex items-center space-x-8">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-red-900 rounded-full flex items-center justify-center">
                    <CodeXml className="w-12 h-12 p-2 text-white" />
                </div>
            </div>

            {/* Hamburger menu button (mobile) */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
            >
                <span
                    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                        menuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${
                        menuOpen ? "opacity-0" : ""
                    }`}
                ></span>
                <span
                    className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                        menuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                ></span>
            </button>

            {/* Navigation Links */}
            <div
                className={`
                    flex-col md:flex-row md:flex items-center space-y-6 md:space-y-0 md:space-x-8 text-white
                    absolute md:static top-full left-0 w-full md:w-auto  md:bg-transparent z-20
                    transition-all duration-300
                    ${
                        menuOpen
                            ? "flex bg-gradient-to-br from-[#1c1c1c] to-[#1c1c1c] pb-4"
                            : "hidden md:flex"
                    }
                `}
            >
                <Link
                    to="/"
                    className="hover:text-gray-300 transition-colors duration-200 px-4 py-2 block"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </Link>
                <span className="text-gray-400 hidden md:inline">/</span>
                <Link
                    to="/portfolio"
                    className="hover:text-gray-300 transition-colors duration-200 px-4 py-2 block"
                    onClick={() => setMenuOpen(false)}
                >
                    Portfolio
                </Link>
                <span className="text-gray-400 hidden md:inline">/</span>
                <Link
                    to="/blog"
                    className="hover:text-gray-300 transition-colors duration-200 px-4 py-2 block"
                    onClick={() => setMenuOpen(false)}
                >
                    Blog
                </Link>
            </div>

            {/* Right side - Download button */}
            <div className="hidden md:block">
                <button className="bg-gradient-to-r from-[#71808F] to-[#319461] text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 transform hover:scale-105">
                    <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <span>Download Resume</span>
                </button>
            </div>
            {/* Download button for mobile (inside menu) */}
            {menuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-purple-700 to-pink-700 z-10 flex justify-center py-4">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-lg flex items-center space-x-2 transition-all duration-200 transform hover:scale-105">
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                        <span>Download Resume</span>
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
