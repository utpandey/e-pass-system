import { createSlice } from '@reduxjs/toolkit';
import * as RootNavigation from '../../Navigation/RootNavigation';
const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            id: null,
            token: null,
            role: null
        },
        isAuthenticated: false,
        isDrawerOpen: false,
        loading: false,
        // needVerification: false,
        // success: ''
    },
    reducers: {
        LOGIN: (state, action) => {
            const { token, employeeId, role } = action.payload;
            state.user = {
                id: employeeId,
                token: token,
                role: role
            }
        },
        LOGOUT: (state) => {
            state.user = {
                    id: null,
                    token: null,
                    role: null
                }
                // RootNavigation.navigate('signin')

        },
        OPENDRAWER: (state) => {
            state.isDrawerOpen = !state.isDrawerOpen;
        },
    }
});

const { actions, reducer } = authSlice;

export const { LOGIN, LOGOUT, OPENDRAWER } = authSlice.actions;

export const selectUser = ({ auth }) => auth;

export default reducer;