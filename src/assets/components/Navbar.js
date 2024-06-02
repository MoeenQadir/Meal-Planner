import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <nav className="bg-[#ff644c] px-4 py-1 flex justify-between items-center">
                <div className="flex items-center">
                    <div className="text-white font-bold text-2xl mr-4">
                        <img className="w-24 h-16" src="/assets/img/logo.png" alt="logo" />
                    </div>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleSidebar} className="text-white">
                        <FontAwesomeIcon icon={faBars} size="lg" />
                    </button>
                </div>
                <div className="hidden lg:flex items-center flex-grow">
                    <div className="relative flex-grow max-w-md ms-20 ">
                        <input
                            type="text"
                            placeholder="Search by recipe name, food type, etc."
                            className="p-2 pl-10 rounded-md text-white placeholder-white w-full sm:w-[30rem] focus:outline-none focus:ring-2 focus:ring-white"
                            style={{ backgroundColor: '#FF6F61' }} // Custom color to match the navbar
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-2.5 text-white text-lg"
                        />
                    </div>
                    <a href="/" className="text-white underline ms-20 decoration-dotted underline-offset-4">
                        Browse All Categories
                    </a>
                    <div className="flex justify-end items-end w-4/12 space-x-4">
                        <a href="https://www.facebook.com" className="text-white">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" className="text-white">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
            </nav>

            {isSidebarOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleSidebar}></div>
            )}
            <div className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4 transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
                <button onClick={toggleSidebar} className="text-left font-bold absolute top-4 right-4 text-gray-600 hover:text-gray-800">
                    <FontAwesomeIcon icon={faTimes} size="lg" />
                </button>
                <div className="mt-8">
                    <div className="relative mb-4">
                        <input
                            type="text"
                            placeholder="Search by recipe name, food type, etc."
                            className="p-2 pl-10 rounded-md text-white placeholder-white w-full focus:outline-none focus:ring-2 focus:ring-gray-600"
                            style={{ backgroundColor: '#FF6F61' }} // Custom color to match the navbar
                        />
                        <FontAwesomeIcon
                            icon={faSearch}
                            className="absolute left-3 top-2.5 text-white text-lg"
                        />
                    </div>
                    <a href="/" className="block text-black underline decoration-dotted underline-offset-4 mb-4">
                        Browse All Categories
                    </a>
                    <div className="flex justify-center items-center lg:justify-end lg:items-end space-x-4">
                        <a href="https://www.facebook.com" className="text-black">
                            <FontAwesomeIcon icon={faFacebook} size="lg" />
                        </a>
                        <a href="https://www.instagram.com" className="text-black">
                            <FontAwesomeIcon icon={faInstagram} size="lg" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
