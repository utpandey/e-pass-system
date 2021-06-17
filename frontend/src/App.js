import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './Navigation/RootNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './Redux/store';
import {useSelector} from 'react-redux';

import Signup from './Screens/Signup';
import Signin from './Screens/Signin';
import LoadingScreen from './Screens/LoadingScreen';
import Home from './Screens/Home';

const Stack = createStackNavigator();

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  // const [isLoggedIn, setLogggedIn] = useState(null);
  // const fetchUser = async () => {
  //   const auth = useSelector(state => state.auth);
  //   if (auth.user) {
  //     setLogggedIn(true);
  //   } else {
  //     setLogggedIn(false);
  //   }
  // };
  // const auth = useSelector(state => state.auth);
  // useEffect(() => {
  //   fetchUser();
  // }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="home" component={Home} />
            <Stack.Screen name="signup" component={Signup} />
            <Stack.Screen name="signin" component={Signin} />
            <Stack.Screen name="loadingscreen" component={LoadingScreen} />

            {/* {!auth.user ? (
              <>
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="signin" component={Signin} />
              </>
            ) : (
              <>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="signup" component={Signup} />
                <Stack.Screen name="signin" component={Signin} />
                <Stack.Screen name="loadingscreen" component={LoadingScreen} />
              </>
            )} */}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
