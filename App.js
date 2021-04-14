import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// This is where Navigation will be 
import {NavigationContainer} from '@react-navigation/native';

// My Navigational Flow
import {HomeScreenStack} from './Navigation/MainNav';


const App = props =>  {
  return (
    <NavigationContainer>

      <HomeScreenStack />

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;