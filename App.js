import 'react-native-gesture-handler';

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

//Navigations
import AuthStack from './navigation/AuthStack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
    background: '#fff',
  },
};

const App: () => Node = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
