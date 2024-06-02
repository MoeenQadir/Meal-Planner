import React, { useRef } from 'react';
import MealCard from './MealCard';
import EmptyCard from './EmptyCard';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { reorderMeals, openSidebar } from '../../features/mealPlan/mealPlanSlice';
import predefinedRecipes from "../../data/predefineRecipe";


const mealsSelector = (state) => state.mealPlan.meals;

const Main = () => {
    const dispatch = useDispatch();
    const meals = useSelector(mealsSelector);
    const containerRef = useRef(null);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const mealType = result.source.droppableId;
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

    const handleScroll = (e) => {
        if (containerRef.current) {
            const { scrollLeft } = e.target;
            Array.from(containerRef.current.children).forEach(child => {
                child.scrollLeft = scrollLeft;
            });
        }
    };

    return (
        <div className="w-11/12 px-4 mx-auto mt-20 flex-1">
            <div className={"w-full lg:w-11/12 lg:shadow-2xl rounded-md lg:px-4 my-10"}>
                <div className="flex w-11/12 mx-auto mb-24 justify-between flex-col space-y-10 lg:space-y-0 text-center lg:text-start lg:flex-row items-center bg-white">
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
                <div className="overflow-x-auto w-full " ref={containerRef} onScroll={handleScroll}>
                    <div className="min-w-[1000px]">
                        <div className="flex justify-between -ms-10 lg:ms-0">
                            <div className="w-1/12"></div> {/* Empty cell for alignment */}
                            {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6'].map((day, index) => (
                                <div key={index} className="text-center font-bold w-1/6">{day}</div>
                            ))}
                        </div>
                        {['breakfast', 'lunch', 'dinner'].map((mealType) => {
                            const capitalizedMealType = mealType.charAt(0).toUpperCase() + mealType.slice(1);
                            return (
                                <div key={mealType} className="flex items-center mt-4">
                                    <div className="w-[2rem] lg:w-1/12 flex flex-row-reverse justify-center items-center -rotate-90">
                                        <div className="text-center font-bold">{capitalizedMealType}</div>
                                        {mealType === 'breakfast' && <span className="text-2xl ">🍳</span>}
                                        {mealType === 'lunch' && <span className="text-2xl ">🥗</span>}
                                        {mealType === 'dinner' && <span className="text-2xl ">🍲</span>}
                                    </div>
                                    <DragDropContext onDragEnd={handleDragEnd}>
                                        <Droppable droppableId={mealType} direction="horizontal">
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.droppableProps} className="flex w-full mb-10 -me-10 lg:me-0 space-x-2">
                                                    {meals[mealType].map((meal, index) => (
                                                        <Draggable key={index} draggableId={`${mealType}-${index}`} index={index}>
                                                            {(provided, snapshot) => (
                                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="w-1/6">
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
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
