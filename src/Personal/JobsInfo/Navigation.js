import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchJobs from './SearchJobs';
import JobsInfo from './JobsInfo';
import JobsDetail from './JobsDetail';
import Analyze from './ApplyJobs/Analyze';
import ApplyJobs from './ApplyJobs/ApplyJobs';
import AiAnalyze from './ApplyJobs/AiAnalyze';


const Stack = createStackNavigator();

export default function JobsNavigation() {
  return (
    <Stack.Navigator initialRouteName="SearchJobs" screenOptions={{headerShown: false}}>
      <Stack.Screen name="SearchJobs" component={SearchJobs} />
      <Stack.Screen name="JobsInfo" component={JobsInfo} />
      <Stack.Screen name='JobsDetail' component={JobsDetail}/>
      <Stack.Screen name='Analyze' component={Analyze}/>
      <Stack.Screen name='ApplyJobs' component={ApplyJobs}/>
      <Stack.Screen name='AiAnalyze' component={AiAnalyze}/>


    </Stack.Navigator>
  );
}
