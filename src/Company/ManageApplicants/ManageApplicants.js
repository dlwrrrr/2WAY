import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function ongoing(){
    return(

        <View><Text>ongoing</Text></View>

    )
}

function closed(){
    return(
        <View><Text>closed</Text></View>
    )
}

export default function ManageJobs(){
    
    return(
        <SafeAreaView style={{flex:1}}>
        <Tab.Navigator>
        <Tab.Screen name="진행중" component={ongoing} />
        <Tab.Screen name="마감" component={closed} />
        </Tab.Navigator>
        </SafeAreaView>
    )
}