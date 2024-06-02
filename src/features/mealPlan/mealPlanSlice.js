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
            const mealList = state.meals[mealType];
            const [removed] = mealList.splice(sourceIndex, 1);
            mealList.splice(destinationIndex, 0, removed);
        },
        openSidebar: (state, action) => {
            const { recipes, mealType, index, isCardSelected } = action.payload;
            state.sidebar.isOpen = true;
            state.sidebar.recipeList = recipes;
            state.sidebar.mealType = mealType;
            state.sidebar.index = index;
            state.sidebar.isCardSelected = isCardSelected;
        },
        closeSidebar: (state) => {
            state.sidebar.isOpen = false;
            state.sidebar.recipeList = [];
            state.sidebar.mealType = null;
            state.sidebar.index = null;
            state.sidebar.isCardSelected = false;
        },
    },
});

export const { addMeal, removeMeal, reorderMeals, openSidebar, closeSidebar } = mealPlanSlice.actions;

export default mealPlanSlice.reducer;
