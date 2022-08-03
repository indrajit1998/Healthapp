import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../screens/Landing';
import SignEmail from '../screens/SignEmail';
import SignWeb3 from '../screens/SignWeb3';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="SignEmail" component={SignEmail} />
      <Stack.Screen name="SignWeb3" component={SignWeb3} />
    </Stack.Navigator>
  );
};

export default AuthStack;
