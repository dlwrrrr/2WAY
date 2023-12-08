    import React from "react";
    import { View, Text, SafeAreaView, Image } from "react-native";
    import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
    import styles from "./style";
    import icon from '../../../assets/icon.png'

    const Tab = createMaterialTopTabNavigator();

    function IntroductionScreen() {
        // const imageuri =''
    return (
        
        <View style={{marginTop:20, padding:10, marginLeft:20}}>
            <View style={{flexDirection:'row'}}>
        {/*<Image style={{width:100, height:50}} source={{uri:imageuri}}/> */}
        <Text style={styles.companyname}>회사명{/*Companyinfo.companyName*/ }</Text>
        </View>
        <Text style={styles.title}>회사소개</Text>
        <View style={{height: 1, backgroundColor: 'gray', marginVertical: 20}} />
        <Text style={styles.title}>기업소개</Text>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>산업</Text>
            <Text style={styles.component}>SI</Text>
        </View> 

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>사원수</Text>
            <Text style={styles.component}>30</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>기업구분</Text>
            <Text style={styles.component}>대기업</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>자본금</Text>
            <Text style={styles.component}>얼마</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>설립일</Text>
            <Text style={styles.component}>언제</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>대표명</Text>
            <Text style={styles.component}>누구</Text>
        </View>

        <View style={{flexDirection:'row', marginTop:30,}}>
            <Text style={styles.subtitle}>주요사업</Text>
            <Text style={styles.component}>이거</Text>
        </View>
        </View>
    );
    }

    function HiringScreen() {
        // const notices=[
        // 받아온 데이터
        // ]
    return (
        <View>
        <View style={{marginTop:20, padding:10, marginLeft:20}}>
        <Text style={styles.title}>진행중 공고</Text>
        <View style={{marginTop:20, flexDirection:'row'}}>
            {/* notices.map((notice, index)=>(
                <View key={index}>
            )) */}
            <Image source={icon} style={{width:90, height:50}}/>
            <View style={{ marginLeft:20,}}>
            <Text style={{fontSize:15, fontWeight:'600', color:'#0075FF'}}>회사명</Text>
            <Text style={{fontSize:18, fontWeight:'800', marginTop:5}}>공고명</Text>
            <Text style={{fontSize:10, color:'gray'}}>디데이|경력|학력</Text>
            </View>
        </View>
        </View>
        <View style={{height: 1, backgroundColor: '#8f8f8f', marginVertical: 20}} />
        <View style={{marginTop:20, padding:10, marginLeft:20}}>
        <Text style={styles.title}>마감된 공고</Text>
        </View>
        </View>
        
        

    );
    }

    export default function CompanyMy() {
    return (
        <SafeAreaView style={{flex:1}}>
        <Tab.Navigator>
        <Tab.Screen name="소개" component={IntroductionScreen} />
        <Tab.Screen name="채용" component={HiringScreen} />
        </Tab.Navigator>
        </SafeAreaView>
    );
    }