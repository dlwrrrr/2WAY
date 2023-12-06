import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/LoginScreen'
import PersonalProfile from './Personal/PersonalProfile';
import CompanyProfile from './Company/CompanyProfile';
import SignUp from './Login/SignUp/SignUp'
import PersonalHome from './Personal/PersonalHome';
import CompanyHome from './Company/CompanyHome';
import CompanyInfoSetup from './Company/CompanyInfoSetup';
import CompanyInfoSetup2 from './Company/CompanyInfoSetup2';
import SetupComplete from './Company/SetupComplete';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="CompanyInfoSetup" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="PersonalProfile" component={PersonalProfile} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name= "SignUp" component={SignUp} />
      <Stack.Screen name= "PersonalHome" component={PersonalHome} />
      <Stack.Screen name= "CompanyHome" component={CompanyHome} />
      <Stack.Screen name= "CompanyInfoSetup" component={CompanyInfoSetup}/>
      <Stack.Screen name= "CompanyInfoSetup2" component={CompanyInfoSetup2}/>
      <Stack.Screen name= "SetupComplete" component={SetupComplete}/>
    </Stack.Navigator>
  );
}
