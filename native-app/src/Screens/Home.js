import React from 'react';
import {StyleSheet, Text, SafeAreaView, View} from 'react-native';

import {LOGOUT} from '../Redux/reducers/authReducer';

const Home = () => {
  return (
    <SafeAreaView>
    <View style={styles.sectionContainer}>
       <Text style={styles.text}>Welcome to the app!</Text>
       <Text style={styles.text}>Be patient... New features coming soon!</Text>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  text: {
    fontSize: 20
  }
});

export default Home;
