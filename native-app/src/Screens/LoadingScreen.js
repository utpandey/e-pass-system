import React, {useEffect} from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import * as RootNavigation from '../Navigation/RootNavigation';

const LoadingScreen = props => {
  const fetchUser = async () => {
    // const auth = useSelector(state => state.auth);
    if (auth.user) {
      props.navigation.replace('home');
      // RootNavigation.navigate('home');
    } else {
      // RootNavigation.navigate('signin');
      props.navigation.replace('signin');
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <View style={styles.loading}>
      <ActivityIndicator
        size="large"
        color="blue"
        onPress={() => props.navigation.replace('signin')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
