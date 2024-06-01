import { configureStore } from '@reduxjs/toolkit';
import mealPlanReducer from '../features/mealPlan/mealPlanSlice';

export const store = configureStore({
    reducer: {
        mealPlan: mealPlanReducer,
    },
});
