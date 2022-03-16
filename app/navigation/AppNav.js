import React from 'react';
import { Button, TouchableOpacity, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import LandingScreen from '../components/LandingScreen';
import Feedbackform from '../components/Feedbackform';
import ProfileView from '../components/ProfileView';
import HistoryList from '../components/HistoryList';
import NotAttended from '../components/NotAttended';

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
        options={({ route, navigation }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: 'blue',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate('LandingScreen')}
            ><Text style={{ color: 'white' }}>{'Next'} </Text>
            </TouchableOpacity>
          ),
        })} />
      <Stack.Screen name='Feedbackform' component={Feedbackform}
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: route.params.status == "Select" ? 'green' : 'red',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center'
        })} />
      <Stack.Screen name='HistoryList' component={HistoryList}
        options={{
          headerShown: false
        }} />

      <Stack.Screen name='NotAttended' component={NotAttended}
        options={({ route }) => ({
          headerShown: true,
          headerStyle: {
            backgroundColor: 'orange',

          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: '600',
          },
          headerTitleAlign: 'center'
        })} />



      { /* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
  <Stack.Screen name="Settings" component={Settings} /> */}
    </Stack.Navigator>
  );
}

export default AppNav;