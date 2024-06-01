import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSidebar, addMeal, removeMeal } from '../../features/mealPlan/mealPlanSlice';
import MealCard from './MealCard';

const Sidebar = () => {
    const dispatch = useDispatch();
    const { isOpen, recipeList, mealType, index } = useSelector((state) => state.mealPlan.sidebar);

    const handleAddToPlanner = (meal) => {
        dispatch(addMeal({ mealType, index, meal }));
        dispatch(closeSidebar());
    };

    const handleRemoveFromPlanner = () => {
        dispatch(removeMeal({ mealType, index }));
        dispatch(closeSidebar());
    };

    if (!isOpen) return null;

    const isCardSelected = recipeList[0] && recipeList[0].id; // Check if a specific card is selected

    return (
        <div className="fixed top-0 right-0 w-5/12 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <button className="text-left font-bold" onClick={() => dispatch(closeSidebar())}>Close</button>
            <h2 className="text-xl font-bold mb-4">Recipes</h2>
            {isCardSelected && (
                <div className="mb-4">
                    <MealCard meal={recipeList[0]} mealType={mealType} index={index} showViewRecipeButton={false} />
                    <button
                        className="mt-2 bg-red-500 text-white py-1 px-4 rounded"
                        onClick={handleRemoveFromPlanner}
                    >
                        Remove from Planner
                    </button>
                </div>
            )}
            <div className="grid grid-cols-3 gap-4">
                {recipeList.slice(isCardSelected ? 1 : 0).map((recipe, i) => (
                    <div key={i} className="mb-4">
                        <MealCard meal={recipe} mealType={mealType} index={index} showViewRecipeButton={false} />
                        <button
                            className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                            onClick={() => handleAddToPlanner(recipe)}
                        >
                            Add to Planner
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
