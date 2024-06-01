import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <nav className="bg-[#ff644c] px-4 py-1 flex justify-between items-center">
            <div className="flex items-center">
                <div className="text-white font-bold text-2xl mr-8"><img className={"w-24 mx-10 h-16"} src="/assets/img/logo.png" alt="logo"/></div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search by recipe name, food type, etc."
                        className="p-2 pl-10 rounded-md text-white placeholder-white w-[30rem] focus:outline-none focus:ring-2 focus:ring-white"
                        style={{ backgroundColor: '#FF6F61' }} // Custom color to match the navbar
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="absolute left-3 top-2.5 text-white text-lg"
                    />
                </div>
                <a href="#" className="ml-8 text-white underline decoration-dotted underline-offset-4">Browse All Categories</a>
            </div>
            <div className="flex space-x-4 me-20">
                <a href="https://www.facebook.com" className="text-white">
                    <FontAwesomeIcon icon={faFacebook} size="lg" />
                </a>
                <a href="https://www.instagram.com" className="text-white">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
