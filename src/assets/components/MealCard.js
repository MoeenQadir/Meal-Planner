import React from 'react';
import { useDispatch } from 'react-redux';
import {openSidebar, removeMeal, addMeal, closeSidebar} from '../../features/mealPlan/mealPlanSlice';
import {MdOutlineDeleteOutline} from "react-icons/md";
import predefinedRecipes from "../../data/predefineRecipe";

const MealCard = ({ meal, mealType, index, showViewRecipeButton = true, showRemoveButton = false }) => {
    const dispatch = useDispatch();

    if (!meal) {
        return null; // or some fallback UI
    }

    const handleViewRecipe = () => {

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
        <div className="relative border rounded-xl  shadow pb-4">
            <img src={meal.image} alt={meal.title} className="w-full h-24 object-cover rounded mb-2" />
            <div className="lg:font-bold text-sm px-2 lg:px-4">{meal.title}</div>
            <div className="text-sm text-gray-600 px-2 lg:px-4">{meal.duration} mins</div>
           <div className={"px-4"}>
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
                       className="absolute top-2 right-2 w-7 h-7 flex justify-center items-center bg-red-500 text-white rounded-full p-1"
                       onClick={handleRemoveRecipe}
                   >
                       <MdOutlineDeleteOutline />

                   </button>
               )}
               {!showViewRecipeButton && (
                   <>
                       <button
                           className="mt-2 bg-transparent w-full mt-2 border border-red-500 text-red-500 py-1 md:px-3 rounded hover:bg-red-500 hover:text-white transition-colors duration-300"
                           onClick={handleAddToPlanner}
                       >
                           Add to Planner +
                       </button>
                   </>
               )}
           </div>
        </div>
    );
};

export default MealCard;
