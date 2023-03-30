import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';
import uiReducer from './uiSlice';
export const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartSlice
    },
});
