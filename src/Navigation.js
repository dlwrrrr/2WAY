import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Login/LoginScreen'
import CompanyProfile from './Company/CompanyProfile';
import SignUp from './Login/SignUp/SignUp'
import PersonalHome from './Personal/Home/PersonalHome'
import CompanyHome from './Company/CompanyHome';
import CompanyInfoSetup from './Company/CompanyInfoSetup';
import CompanyInfoSetup2 from './Company/CompanyInfoSetup2';
import SetupComplete from './Company/SetupComplete';
import CompanyTabNavigation from './Company/Component/CompanyTabBar';
import PersonalNavigation from './Personal/PersonalTabBar';
import ResumeSetup from './Personal/resumesetup';
import Newcomer from './Personal/Newcomer';
import Experienced from './Personal/Experienced';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="ResumeSetup" screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CompanyProfile" component={CompanyProfile} />
      <Stack.Screen name= "SignUp" component={SignUp} />
      <Stack.Screen name= "PersonalHome" component={PersonalHome} />
      <Stack.Screen name= "CompanyHome" component={CompanyHome} />
      <Stack.Screen name= "CompanyInfoSetup" component={CompanyInfoSetup}/>
      <Stack.Screen name= "CompanyInfoSetup2" component={CompanyInfoSetup2}/>
      <Stack.Screen name= "SetupComplete" component={SetupComplete}/>
      <Stack.Screen name= "CompanyTabNavigation" component={CompanyTabNavigation}/>
      <Stack.Screen name= "PersonalTabNavigation" component={PersonalNavigation}/>
      <Stack.Screen name= "ResumeSetup" component={ResumeSetup}/>
      <Stack.Screen name= "Experienced" component={Experienced}/>
      <Stack.Screen name= "Newcomer" component={Newcomer}/>

    </Stack.Navigator>
  );
}
