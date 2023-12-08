import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'
import Favorited from './companyFavorited/Favorited';
import PersonalHome from './Home/PersonalHome';
import JobsNavigation from './JobsInfo/Navigation';
import SearchJobs from './JobsInfo/SearchJobs';
import Mypage from './My/mypage';
import Status from './status/status';


const Tab = createBottomTabNavigator(); 

const PersonalNavigation=()=> {
    return(
        
        <Tab.Navigator 
        
        screenOptions={{
            headerShown: false, //스택 내 화면에서 헤더가 안보이도록
            tabBarStyle: { display: 'flex' },
        }}>
                <Tab.Screen name='홈' component={PersonalHome} options={{tabBarIcon : ({focused, color, size})=>(
                        <Ionicons name={focused ? "home" : "home-outline"} color='gray' size={25}/>
                )}}/>
                <Tab.Screen name='채용정보' component={JobsNavigation} options={{tabBarIcon : ({focused, color, size})=>(
                        <MaterialCommunityIcons name={focused ? "pencil" : "pencil-outline"} color='gray' size={25}/>
                )}}/>
                <Tab.Screen name='지원현황' component={Status} options={{tabBarIcon : ({focused, color, size})=>(
                        <FontAwesome name={focused ? "sticky-note" : "sticky-note-o"} color='gray' size={25}/>
                )}}/>
                <Tab.Screen name='관심공고' component={Favorited} options={{tabBarIcon : ({focused, color, size})=>(
                        <Ionicons name={focused ? "heart" : "heart-outline"} color='gray' size={25}/>
                )}}/>
                
                <Tab.Screen name='마이페이지' component={Mypage} options={{tabBarIcon : ({focused, color, size})=>(
                        <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color='gray' size={25}/>
                )}}/>

        </Tab.Navigator>
    )
}


export default PersonalNavigation;