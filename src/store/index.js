import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './reducer/tab';

const store = configureStore({
    reducer: {
        tab: tabReducer,
    },
});

export default store;