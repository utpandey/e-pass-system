import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './Navigation/RootNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {store, persistor} from './Redux/store';
import {useSelector} from 'react-redux';

import { selectUser } from './Redux/reducers/authReducer';

import Signin from './Screens/Signin';
import LoadingScreen from './Screens/LoadingScreen';
import {MainStackNavigator} from './Navigation/MainStackNavigator';

const RootStack = createStackNavigator();

const App = () => {
  const auth = useSelector(selectUser);
  // const isDarkMode = useColorScheme() === 'dark';
  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  function renderScreens() {
    if (auth.loading) {
      return <RootStack.Screen name={'loadingscreen'} component={LoadingScreen} />;
    }
    return auth.user.token !== null ? (
      <RootStack.Screen name={'mainstack'}>
        {() => (
          <>
            <MainStackNavigator />
          </>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={'signin'} component={Signin} />
    );
  }

  return (
    
        <NavigationContainer ref={navigationRef}>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              animationEnabled: false,
            }}>
            {renderScreens()}
          </RootStack.Navigator> 
        </NavigationContainer>
  );
};

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
      </Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default AppWrapper;
