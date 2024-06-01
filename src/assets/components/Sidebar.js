import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar } from '../../features/mealPlan/mealPlanSlice';
import MealCard from './MealCard';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isOpen, recipeList, mealType, index, isCardSelected } = useSelector((state) => state.mealPlan.sidebar);

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 right-0 w-5/12 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <button className="text-left font-bold" onClick={() => dispatch(closeSidebar())}>Close</button>
            <h2 className="text-xl font-bold mb-4">{isCardSelected ? 'Selected Recipes' : 'Select a Recipe'}</h2>
            {isCardSelected && (
                <div className="mb-4 w-4/12 mx-auto ">
                    <MealCard meal={recipeList[0]} mealType={mealType} index={index} showViewRecipeButton={false} showRemoveButton />
                </div>
            )}
            <h2 className="text-xl font-bold mb-4">{isCardSelected ? 'Recipes List' : ''}</h2>
            <div className="grid grid-cols-3 gap-2">
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
