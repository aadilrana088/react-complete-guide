import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import counterSlice from './counterSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        auth: authSlice,
    },
});

export default store;
