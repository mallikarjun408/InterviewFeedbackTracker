import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import LandingScreen from '../components/LandingScreen';
import Feedbackform from '../components/Feedbackform';
import ProfileView from '../components/ProfileView';
import HistoryList from '../components/HistoryList';

const Stack = createNativeStackNavigator();

const AppNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen}
        options={{
          headerShown: false
        }} />
      <Stack.Screen name='LandingScreen' component={LandingScreen}
        options={{
          headerShown: false
        }} />
        <Stack.Screen name='ProfileView' component={ProfileView}
        options={{
          headerShown: false
        }} />
        <Stack.Screen name='Feedbackform' component={Feedbackform}
        options={{
          headerShown: false
        }} />
        <Stack.Screen name='HistoryList' component={HistoryList}
        options={{
          headerShown: false
        }} />
      { /* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default AppNav;