import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, TextInput} from 'react-native-paper';

import {LOGOUT} from '../Redux/reducers/authReducer';

const Home = props => {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  console.log(auth.user);
  return (
    <>
      <Text>Your email is {auth.user}</Text>
      <Button
        mode="contained"
        style={{marginLeft: 18, marginRight: 18, marginTop: 18}}
        onPress={() => dispatch(LOGOUT())}>
        Sign Out
      </Button>
    </>
  );
};

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default Home;
