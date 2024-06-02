import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../features/mealPlan/mealPlanSlice';
import MealCard from './MealCard';
import { FaTimes } from 'react-icons/fa';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isOpen, recipeList, mealType, index, isCardSelected } = useSelector((state) => state.mealPlan.sidebar);
    const sidebarRef = useRef(null);

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            dispatch(closeSidebar());
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            ref={sidebarRef}
            className={`fixed top-0 right-0 lg:w-5/12 w-full md:w-10/12 h-full bg-white shadow-lg p-4 overflow-y-auto transform transition-transform duration-900 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <button
                className="text-left bg-[#ff644c] rounded-full p-1 font-bold absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                onClick={() => dispatch(closeSidebar())}
            >
                <FaTimes size={24} color={"white"} />
            </button>
            <h2 className="text-xl font-bold mb-4">{isCardSelected ? 'Selected Recipes' : 'Select a Recipe'}</h2>
            {isCardSelected && (
                <div className="mb-4 md:w-4/12 w-6/12 mx-auto">
                    <MealCard meal={recipeList[0]} mealType={mealType} index={index} showViewRecipeButton={false} showRemoveButton />
                </div>
            )}
            <h2 className="text-xl font-bold mb-4">{isCardSelected ? 'Recipes List' : ''}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                {recipeList.slice(isCardSelected ? 1 : 0).map((recipe, i) => (
                    <div key={i} className="mb-4">
                        <MealCard meal={recipe} mealType={mealType} index={index} showViewRecipeButton={false} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
