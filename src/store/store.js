import { configureStore } from '@reduxjs/toolkit';
import counterState from './counterState';

const store = configureStore({
    reducer: {
        counter: counterState,
    },

    middleware: [],
    devTools: process.env.NODE_ENV !== 'production'
    
});

export default store;