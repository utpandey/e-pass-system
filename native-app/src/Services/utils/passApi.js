import { Alert } from 'react-native';
import * as RootNavigation from '../../Navigation/RootNavigation';
import { store } from '../../Redux/store';
import { LOGIN } from '../../Redux/reducers/authReducer';

export const submitPass = async({ employeeId, purpose, vaccinated, address, inTime, phone }) => {
    // adb -s RZ8MA2DPLTT reverse tcp:3000 tcp:3000 at the native cmd
    fetch('http://localhost:3000/employee/epass/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                employeeId: employeeId,
                purpose: purpose,
                vaccinated: vaccinated,
                address: address,
                inTime: inTime,
                phone: phone
            })
        })
        .then((res) => res.json())
        .then(async(data) => {
            console.log(data);
            console.log('data received from epass')
            return fetch('http://localhost:3000/employee/send/epassId', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ePassId: data,
                        employeeId: employeeId
                    })
                })
                .then((res) => res.json())
                .then(async(value) => {
                    console.log(value);
                })
                .catch((e) => {
                    console.log('error ', e);
                    Alert(e);
                });
        })
        .catch((e) => {
            console.log('error ', e);
            Alert(e);
        });
};