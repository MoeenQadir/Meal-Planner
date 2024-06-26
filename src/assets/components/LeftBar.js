import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faClipboardList, faBookmark, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const LeftBar = () => {
    return (
        <>
            <div className="w-[6rem] bg-white shadow-md z-10 hidden lg:block h-[35rem] justify-center bg-white flex flex-col items-center py-4">
                <a href="/" className="mb-4 flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl text-gray-700 mb-2" />
                    <p className="text-gray-700 ">Explore Recipes</p>
                </a>
                <a href="/" className="mb-4 text-center bg-yellow-100 py-2 w-full flex flex-col items-center">
                    <FontAwesomeIcon icon={faClipboardList} className="text-2xl text-yellow-600 mb-2" />
                    <p className="text-yellow-600 ">Meal Planning</p>
                </a>
                <a href="/" className="mb-4 text-center flex flex-col items-center">
                    <FontAwesomeIcon icon={faBookmark} className="text-2xl text-gray-700 mb-2" />
                    <p className="text-gray-700 ">My Saved Recipes</p>
                </a>
                <a href="/" className="mt-40 text-center cursor-pointer flex flex-col items-center mb-4">
                    <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-teal-700 mb-2" />
                </a>
            </div>

            <div className="w-full bg-white shadow-md lg:hidden z-10 fixed bottom-0 flex justify-around items-center py-4">
                <a href="/" className="flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={faGlobe} className="text-2xl text-gray-700 mb-2" />
                    <p className="text-gray-700 text-xs">Explore</p>
                </a>
                <a href="/" className="flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={faClipboardList} className="text-2xl text-yellow-600 mb-2" />
                    <p className="text-yellow-600 text-xs">Planning</p>
                </a>
                <a href="/" className="flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={faBookmark} className="text-2xl text-gray-700 mb-2" />
                    <p className="text-gray-700 text-xs">Saved</p>
                </a>
                <a href="/" className="flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={faUserCircle} className="text-3xl text-teal-700 mb-2" />
                </a>
            </div>
        </>
    );
};

export default LeftBar;
