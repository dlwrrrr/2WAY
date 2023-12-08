import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function Applicant(){
    return(

        <View><Text> applicant</Text></View>

    )
}

function Preferred(){
    return(
        <View><Text>Preferred</Text></View>
    )
}

function Success(){
    return(
        <View><Text>sucecess</Text></View>
    )
}

function Failed(){
    return(
        <View><Text>failed</Text></View>
    )
}

export default function ManageApplicants(){
    
    return(
        <SafeAreaView style={{flex:1}}>
        <Tab.Navigator>
        <Tab.Screen name="지원자" component= {Applicant} />
        <Tab.Screen name="선호지원자" component={Preferred} />
        <Tab.Screen name="최종합격" component={Success} />
        <Tab.Screen name="최종불합격" component={Failed} />
        </Tab.Navigator>
        </SafeAreaView>
    )
}