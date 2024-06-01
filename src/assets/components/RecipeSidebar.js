import React from 'react';

const RecipeSidebar = ({ recipe, onAddToPlanner }) => {
    return (
        <div className="fixed top-0 right-0 w-1/4 h-full bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold mb-4">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded mb-4" />
            <p className="text-gray-700">{recipe.duration}</p>
            <button
                className="bg-brand-color text-white p-2 mt-4"
                onClick={() => onAddToPlanner(recipe)}
            >
                Add to Planner
            </button>
        </div>
    );
};

export default RecipeSidebar;
