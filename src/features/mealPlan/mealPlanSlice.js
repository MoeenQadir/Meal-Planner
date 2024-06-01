// mealPlanSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    meals: {
        breakfast: Array(6).fill(null),
        lunch: Array(6).fill(null),
        dinner: Array(6).fill(null),
    },
    sidebar: {
        isOpen: false,
        recipeList: [],
        mealType: null,
        index: null,
        isCardSelected: false,
    },
};

const mealPlanSlice = createSlice({
    name: 'mealPlan',
    initialState,
    reducers: {
        openSidebar: (state, action) => {
            state.sidebar.isOpen = true;
            state.sidebar.recipeList = action.payload.recipes;
            state.sidebar.mealType = action.payload.mealType;
            state.sidebar.index = action.payload.index;
            state.sidebar.isCardSelected = action.payload.isCardSelected || false;
        },
        closeSidebar: (state) => {
            state.sidebar.isOpen = false;
        },
        addMeal: (state, action) => {
            const { mealType, index, meal } = action.payload;
            state.meals[mealType][index] = meal;
        },
        removeMeal: (state, action) => {
            const { mealType, index } = action.payload;
            state.meals[mealType][index] = null;
        },
        reorderMeals: (state, action) => {
            const { mealType, sourceIndex, destinationIndex } = action.payload;
            const [movedMeal] = state.meals[mealType].splice(sourceIndex, 1);
            state.meals[mealType].splice(destinationIndex, 0, movedMeal);
        },
    },
});

export const { openSidebar, closeSidebar, addMeal, removeMeal, reorderMeals } = mealPlanSlice.actions;
export default mealPlanSlice.reducer;
