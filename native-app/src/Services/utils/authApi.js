import {
    Alert,
} from 'react-native';
// import jwt from "react-native-pure-jwt";
import * as RootNavigation from '../../Navigation/RootNavigation';
import { store } from '../../Redux/store';
import { LOGIN } from '../../Redux/reducers/authReducer';

export const signIn = async({ email, password }) => {
    // adb -s RZ8MA2DPLTT reverse tcp:3000 tcp:3000 at the native cmd
    fetch('http://localhost:3000/user/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(res => res.json())
        .then(async data => {

            console.log(data)
            store.dispatch(LOGIN(data));
            RootNavigation.navigate('mainstack')
        })
        .catch(e => {
            console.log('error ', e);
            Alert(e);
        });

};

export const signUp = async({ email, password }) => {
    fetch('http://localhost:3000/user/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then(res => res.json())
        .then(async data => {
            try {
                store.dispatch(LOGIN(data.token));
                RootNavigation.navigate('home')
            } catch (e) {
                console.log('error ', e);
                Alert(e);
            }
        });
};