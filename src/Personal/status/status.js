import React from "react";
import { View,Text, SafeAreaView } from "react-native";
import  StatusTopNavi from './statusTab'

export default function Status(){

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>지원하기</Text>
            </View>
            


            <View style={{flex:1}}>
                <StatusTopNavi/>
            </View>

            </SafeAreaView>
    )
}