import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, Image } from 'react-native';


const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();



const Waiting = () => {

  return (
    <View><Text>RecruitmentInfo</Text></View>

  );    
}

const Preferred =() =>{
    return(
        <View><Text>preferred</Text></View>
    )
}

const Success = () => {
  return (
<View><Text>Success</Text></View>
  );
}

const Failed = () => {
  return (
   
      <View><Text>Failed</Text></View>
   
  );
}
const StatusTopNavi = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="지원 대기" component={Waiting} />
        <Tab.Screen name="선호 지원자" component={Preferred} />
        <Tab.Screen name="지원 합격" component={Success} />
        <Tab.Screen name="지원 불합격" component={Failed} />
      </Tab.Navigator>
    );
  }

export default StatusTopNavi;
