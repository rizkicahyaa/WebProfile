import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-white/90 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-gray-800 font-['Inter']">
                        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">Rizki</span>
                        <span className="text-gray-700">Cahya</span>
                    </div>

                     {/* desktop menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                            <span className="relative z-10">Home</span>
                            <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </Link>

                        <a
                            href="https://medium.com/@rizki.cahya03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']"
                        >
                            <span className="relative z-10">Blog</span>
                            <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </a>

                        <Link to="/projects" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                            <span className="relative z-10">Project</span>
                            <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </Link>

                        <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition-all duration-300 font-medium relative group font-['Inter']">
                            <span className="relative z-10">Contact</span>
                            <div className="absolute inset-0 bg-purple-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                        </Link>
                    </div>

                    {/* mobile toggle */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
                            {isMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Menu mobile */}
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col items-center mt-6 space-y-4 pb-4">
                        <Link to="/" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Home</Link>

                        <a
                            href="https://medium.com/@rizki.cahya03"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']"
                            onClick={toggleMenu}
                        >
                            Blog
                        </a>

                        <Link to="/projects" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Project</Link>

                        <Link to="/contact" className="text-gray-600 hover:text-purple-600 transition duration-300 font-medium font-['Inter']" onClick={toggleMenu}>Contact</Link>
                    </div>
                )}
            </div>
        </nav>
    );
};