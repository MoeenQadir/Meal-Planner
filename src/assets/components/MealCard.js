import React from 'react';
import { useDispatch } from 'react-redux';
import {openSidebar, removeMeal, addMeal, closeSidebar} from '../../features/mealPlan/mealPlanSlice';

const MealCard = ({ meal, mealType, index, showViewRecipeButton = true, showRemoveButton = false }) => {
    const dispatch = useDispatch();

    if (!meal) {
        return null; // or some fallback UI
    }

    const handleViewRecipe = () => {
        const predefinedRecipes = [
            { id: 1, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
            { id: 2, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
            { id: 3, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
            { id: 4, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
            { id: 5, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
            { id: 6, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
        ];
        dispatch(openSidebar({ recipes: [meal, ...predefinedRecipes], mealType, index, isCardSelected: true }));
    };

    const handleRemoveRecipe = () => {
        dispatch(removeMeal({ mealType, index }));
        dispatch(closeSidebar());

    };

    const handleAddToPlanner = () => {
        dispatch(addMeal({ mealType, index, meal }));
        dispatch(closeSidebar());
    };

    return (
        <div className="relative border rounded shadow p-4">
            <img src={meal.image} alt={meal.title} className="w-full h-24 object-cover rounded mb-2" />
            <div className="font-bold">{meal.title}</div>
            <div className="text-sm text-gray-600">{meal.duration} mins</div>
            {showViewRecipeButton && (
                <button
                    className="mt-2 bg-transparent w-full mt-2 border border-red-500 text-red-500 py-1 px-4 rounded hover:bg-red-500 hover:text-white transition-colors duration-300"
                    onClick={handleViewRecipe}
                >
                    View Recipe →
                </button>

            )}
            {showRemoveButton && (
                <button
                    className="absolute top-2 right-2 w-6 h-6 flex justify-center items-center bg-red-500 text-white rounded-full p-1"
                    onClick={handleRemoveRecipe}
                >
                    X
                </button>
            )}
            {!showViewRecipeButton && (
                <>
                    <button
                        className="mt-2 bg-transparent w-full mt-2 border border-red-500 text-red-500 py-1 px-4 rounded hover:bg-red-500 hover:text-white transition-colors duration-300"
                        onClick={handleAddToPlanner}
                    >
                        Add to Planner +
                    </button>
                </>
            )}
        </div>
    );
};

export default MealCard;
