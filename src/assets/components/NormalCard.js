import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';

const NormalCard = ({ meal }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg bg-gray-100">
            <div className="relative">
                <div className="w-full h-24 bg-gray-300"></div>
                <div className="absolute top-16 left-2 bg-[#24264d] rounded-full w-8 h-8 flex justify-center items-center shadow">
                    <FontAwesomeIcon icon={faUtensils} className="text-white" />
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-semibold text-sm text-gray-700 mb-2">{meal.title}</div>
                <p className="text-gray-500 text-base">{meal.duration} mins</p>
            </div>
            <div className="px-2 pb-2">
                <button className="bg-transparent w-full hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1.5 px-4 border border-red-500 hover:border-transparent rounded">
                    View Recipe →
                </button>
            </div>
        </div>
    );
};

export default NormalCard;
