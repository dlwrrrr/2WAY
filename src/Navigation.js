import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/LoginScreen'
import PersonalProfile from './Personal/PersonalProfile';
import CompanyProfile from './Company/CompanyProfile';
import CompanySignUp from './Login/CompanySignUp';
import PersonalSignUp from './Login/PersonalSignUp';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name="PersonalSignUp" component={PersonalSignUp} />
      <Stack.Screen name="CompanySignUp" component={CompanySignUp} />
    </Stack.Navigator>
  );
}
