import React from 'react';
import MealCard from './MealCard';
import EmptyCard from './EmptyCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { reorderMeals, openSidebar } from '../../features/mealPlan/mealPlanSlice';

const predefinedRecipes = [
    { id: 1, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 2, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
    { id: 3, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 4, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
    { id: 5, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 15 },
    { id: 6, image: '/assets/img/food.png', title: 'Coffee Coconut Breakfast Cookies', duration: 20 },
    // Add more recipes as needed
];

const mealsSelector = (state) => state.mealPlan.meals;

const Main = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);

    const handleDragEnd = (result, mealType) => {
        if (!result.destination) return;
        dispatch(reorderMeals({
            mealType,
            sourceIndex: result.source.index,
            destinationIndex: result.destination.index,
        }));
    };

    const handleOpenSidebar = (mealType, index, isCardSelected = false) => {
        const recipes = isCardSelected ? [meals[mealType][index], ...predefinedRecipes] : predefinedRecipes;
        dispatch(openSidebar({ recipes, mealType, index, isCardSelected }));
    };

    return (
        <div className="w-11/12 px-4 mx-auto shadow-md mt-20 flex-1">
            <div className="flex w-11/12 mx-auto mb-24 justify-between items-center bg-white">
                <div>
                    <div className="text-md font-bold text-gray-700 mb-2">New!</div>
                    <div className="text-2xl font-bold text-gray-900 mb-4">WWL Meal Plan for December 5 - 12</div>
                    <div className="text-md text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</div>
                </div>
                <button onClick={() => handleOpenSidebar()} className="bg-[#d2d82c] hover:bg-[#ff644c] hover:text-white text-[#096059] font-bold py-2 px-4 rounded shadow">
          <span className="inline-flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M16 4H4a1 1 0 000 2h1l1 9h8l1-9h1a1 1 0 100-2zM6.337 6h7.326l-.822 7H7.159l-.822-7zM7 16a1 1 0 100 2 1 1 0 000-2z" />
            </svg>
            Get the Shopping List
          </span>
                </button>
            </div>
            <div className="grid grid-cols-7 -ms-40 gap-4">
                <div className="col-span-1"></div> {/* Empty cell for alignment */}
                {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map((day, index) => (
                    <div key={index} className="text-center font-bold col-span-1">{day}</div>
                ))}
            </div>
            {['breakfast', 'lunch', 'dinner'].map((mealType) => (
                <div key={mealType} className="grid grid-cols-7 gap-4 mt-4 -ms-40">
                    <div className="col-span-1 ms-16 flex justify-start items-end font-bold transform -rotate-90 origin-center w-12 capitalize">{mealType}</div>
                    <DragDropContext onDragEnd={(result) => handleDragEnd(result, mealType)}>
                        <Droppable droppableId={mealType} direction="horizontal">
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps} className="col-span-6 grid grid-cols-6 gap-4">
                                    {meals[mealType].map((meal, index) => (
                                        <Draggable key={index} draggableId={`${mealType}-${index}`} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="col-span-1">
                                                    {meal ? (
                                                        <MealCard meal={meal} mealType={mealType} index={index} showViewRecipeButton />
                                                    ) : (
                                                        <EmptyCard onAddRecipe={() => handleOpenSidebar(mealType, index)} />
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                </div>
            ))}
        </div>
    );
};

export default Main;
