import React from 'react';
import { useDispatch } from 'react-redux';
import { openSidebar } from '../../features/mealPlan/mealPlanSlice';

const MealCard = ({ meal, mealType, index, showViewRecipeButton = true }) => {
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
        dispatch(openSidebar({ recipes: [meal, ...predefinedRecipes], mealType, index }));
    };

    return (
        <div className="border rounded shadow p-4">
            <img src={meal.image} alt={meal.title} className="w-full h-24 object-cover rounded mb-2" />
            <div className="font-bold">{meal.title}</div>
            <div className="text-sm text-gray-600">{meal.duration} mins</div>
            {showViewRecipeButton && (
                <button
                    className="mt-2 bg-blue-500 text-white py-1 px-4 rounded"
                    onClick={handleViewRecipe}
                >
                    View Recipe
                </button>
            )}
        </div>
    );
};

export default MealCard;
