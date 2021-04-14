import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
// Screens Import
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';

const Stack = createStackNavigator();

function HomeScreenStack() { 

  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenOne" component={ScreenOne} />
      <Stack.Screen name="ScreenTwo" component={ScreenTwo} />
    </Stack.Navigator>
  );

};

export {HomeScreenStack};