import { createSlice } from '@reduxjs/toolkit';
import * as RootNavigation from '../../Navigation/RootNavigation';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isDrawerOpen: false,
        loading: false,
        // needVerification: false,
        // success: ''
    },
    reducers: {
        LOGIN: (state, action) => {
            const id = action.payload;
            // state.isAuthenticated = true;
            state.user = id;
            // state.isDrawerOpen = false;
            console.log('state from LOGIN')
            console.log(state)
        },
        LOGOUT: (state) => {
            // state.isAuthenticated = false;
            RootNavigation.navigate('signin')
            state.user = null;
            // state.isDrawerOpen = false;
        },
        OPENDRAWER: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
    }
});

const { actions, reducer } = authSlice;

export const { LOGIN, LOGOUT, OPENDRAWER } = authSlice.actions;
export default reducer;