import React from 'react';
import Draggable from 'react-draggable';
import MealCard from './MealCard';
import EmptyCard from './EmptyCard';
import { useDispatch, useSelector } from 'react-redux';
import { reorderMeals, openSidebar } from '../../features/mealPlan/mealPlanSlice';

const predefinedRecipes = [
    { id: 1, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 2, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
    { id: 3, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 4, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
    { id: 5, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 6, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
];

const mealsSelector = (state) => state.mealPlan.meals;

const Main = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);

    const handleOpenSidebar = (mealType, index, isCardSelected = false) => {
        const recipes = isCardSelected ? predefinedRecipes : [meals[mealType][index], ...predefinedRecipes];
        dispatch(openSidebar({ recipes, mealType, index, isCardSelected }));
    };

    const handleStop = (e, data, mealType, index) => {
        const newCol = Math.round(data.x / 100); // 160 is the width of a card plus margin
        dispatch(reorderMeals({
            mealType,
            sourceIndex: index,
            destinationIndex: newCol
        }));
    };

    return (
        <div className="w-11/12 shadow-2xl  p-8 mx-4 shadow-md rounded-lg bg-white my-20 flex-1">
            <div className="flex w-11/12 mx-auto mb-24 justify-between items-center bg-white">
                <div>
                    <div className="text-md font-bold text-gray-700 mb-2">New!</div>
                    <div className="text-4xl font-bold text-gray-900 mb-4">WWL Meal Plan for December 5 - 12</div>
                    <div className="text-md text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</div>
                </div>
                <button className="bg-[#d2d82c] hover:bg-[#ff644c] hover:text-white text-[#096059] font-bold py-2 px-4 rounded shadow">
                    <span className="inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M16 4H4a1 1 0 000 2h1l1 9h8l1-9h1a1 1 0 100-2zM6.337 6h7.326l-.822 7H7.159l-.822-7zM7 16a1 1 0 100 2 1 1 0 000-2z" />
                        </svg>
                        Get the Shopping List
                    </span>
                </button>
            </div>
            <div className="grid grid-cols-7 -ms-40 gap-4">
                <div className="col-span-1"></div>
                {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map((day, index) => (
                    <div key={index} className="text-center font-bold col-span-1">{day}</div>
                ))}
            </div>
            {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                <div key={mealType} className="grid grid-cols-7 gap-2 mt-4 -ms-40">
                    <div className="col-span-1 ms-40 flex justify-start items-center font-bold transform -rotate-90 origin-center w-12 capitalize">
                        {mealType === 'breakfast' && <span className={"text-2xl"}>🍳</span>}
                        {mealType === 'lunch' && <span className={"text-2xl"}>🥗</span>}
                        {mealType === 'dinner' && <span className={"text-2xl"}>🍲</span>}
                        <div className="ms-2">{mealType}</div>
                    </div>
                    <div className="col-span-6 grid grid-cols-6 gap-4">
                        {meals[mealType].map((meal, index) => (
                            <Draggable
                                key={`${mealType}-${index}`}
                                axis="x"
                                bounds="parent"
                                onStop={(e, data) => handleStop(e, data, mealType, index)}
                                handle=".draggable-handle"
                            >
                                <div className="col-span-1 cursor-move draggable-handle">
                                    {meal ? (
                                        <MealCard meal={meal} mealType={mealType} index={index} showViewRecipeButton />
                                    ) : (
                                        <EmptyCard onAddRecipe={() => handleOpenSidebar(mealType, index)} />
                                    )}
                                </div>
                            </Draggable>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Main;
