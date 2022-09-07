import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './type';

const auth = true;

import Auth from '../screens/Auth';
import Tab from './TabContainer';
import UserProfile from '../screens/UserProfile';
import WandDProfile from '../screens/WandDProfile';
import ChatPage from '../screens/ChatPage';
import DietPage from '../screens/DietPage';
import WorkoutPage from '../screens/WorkoutPage';
import FoodInformation from '../screens/FoodInformation';
import VideoCall from '../screens/VideoCall';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={auth ? Tab : Auth}>
        {auth ? (
          <>
            <Stack.Screen name="Tab" component={Tab} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="WandDProfile" component={WandDProfile} />
            <Stack.Screen name="ChatPage" component={ChatPage} />
            <Stack.Screen name="DietPage" component={DietPage} />
            <Stack.Screen name="WorkoutPage" component={WorkoutPage} />
            <Stack.Screen name="FoodInformation" component={FoodInformation} />
            <Stack.Screen name="VideoCall" component={VideoCall} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
