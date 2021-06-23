import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Tabs from './Tabs';

const MainStack = createStackNavigator();

export function MainStackNavigator() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'tabs'}
        component={Tabs}
        options={{
          headerShown: false
        }}

      />

    </MainStack.Navigator>
  );
}