import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const EmptyCard = ({ onAddRecipe }) => {
    return (
        <div className="max-w-xs hover:scale-105 rounded overflow-hidden rounded-xl  bg-white flex flex-col items-center justify-center p-4" style={{ boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px', transition: 'transform 0.3s ease-in-out' }}>
            <div className="bg-blue-100 p-4 animate-pulse rounded-full ">
                <FontAwesomeIcon icon={faSadTear} className="text-blue-500 text-4xl" />
            </div>
            <div className="my-4">
                <p className="font-bold text-gray-700">Empty!</p>
                <p className="text-black text-sm">Click button below to add recipe.</p>
            </div>
            <button
                className="bg-[#ff644c] w-full hover:bg-orange-600 text-white font-bold py-1 px-4 rounded-md flex items-center justify-center"
                onClick={onAddRecipe}
            >
               +
            </button>
        </div>
    );
};

export default EmptyCard;
