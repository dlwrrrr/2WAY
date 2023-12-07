import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostJobStep1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import ManageJobs from '../ManageJobs/ManageJobs';

const Stack = createStackNavigator();

export default function PostJobNavigation() {
  return (
    <Stack.Navigator initialRouteName="PostJobStep1" screenOptions={{headerShown: false}}>
      <Stack.Screen name="PostJobStep1" component={PostJobStep1} />
      <Stack.Screen name= "Step2" component={Step2}/>
      <Stack.Screen name= "Step3" component={Step3}/>
      <Stack.Screen name= "Step4" component={Step4}/>
      <Stack.Screen name= "Step5" component={Step5}/>
      <Stack.Screen name= "ManageJobs" component={ManageJobs}/>

    </Stack.Navigator>
  );
}
