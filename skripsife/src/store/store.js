import { configureStore } from '@reduxjs/toolkit';
import apiStore from '../reducers/api-store';

const store = configureStore({
    reducer: {
        api: apiStore,
    },
});

export default store;
