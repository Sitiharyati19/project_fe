import { createSlice } from '@reduxjs/toolkit';

const token = localStorage.getItem('token');
export const apiStore = createSlice({
    name: 'apiStore',
    initialState: {
        token,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', state.token);
        },
        removeToken: (state, action) => {
            state.token = null;
            localStorage.removeItem('token');
        },
    },
});

export const { setToken, removeToken } = apiStore.actions

export default apiStore.reducer 
