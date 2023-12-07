    import React from 'react';
    import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
    import {Ionicons, MaterialCommunityIcons, FontAwesome} from '@expo/vector-icons'
    import ManageApplicants from '../ManageApplicants/ManageApplicants';
    import ManageJobs from '../ManageJobs/ManageJobs';
    import CompanyMy from '../Mypage/CompanyMy';
    import PostJobNavigation from '../Postjob/PostJobNavigation';
    import CompanyHome from '../CompanyHome';

    const Tab = createBottomTabNavigator(); 



    const CompanyTabNavigation=()=> {
        return(
            
            <Tab.Navigator 
            
            screenOptions={{
                headerShown: false, //스택 내 화면에서 헤더가 안보이도록
                tabBarStyle: { display: 'flex' },
            }}>
                    <Tab.Screen name='홈' component={CompanyHome} options={{tabBarIcon : ({focused, color, size})=>(
                            <Ionicons name={focused ? "home" : "home-outline"} color='gray' size={25}/>
                    )}}/>
                    <Tab.Screen name='공고등록' component={PostJobNavigation} options={{tabBarIcon : ({focused, color, size})=>(
                            <MaterialCommunityIcons name={focused ? "pencil" : "pencil-outline"} color='gray' size={25}/>
                    )}}/>
                    <Tab.Screen name='공고관리' component={ManageJobs} options={{tabBarIcon : ({focused, color, size})=>(
                            <FontAwesome name={focused ? "sticky-note" : "sticky-note-o"} color='gray' size={25}/>
                    )}}/>
                    <Tab.Screen name='지원자관리' component={ManageApplicants} options={{tabBarIcon : ({focused, color, size})=>(
                            <Ionicons name={focused ? "heart" : "heart-outline"} color='gray' size={25}/>
                    )}}/>
                    
                    <Tab.Screen name='마이페이지' component={CompanyMy} options={{tabBarIcon : ({focused, color, size})=>(
                            <Ionicons name={focused ? "person-circle" : "person-circle-outline"} color='gray' size={25}/>
                    )}}/>

            </Tab.Navigator>
        )
    }


    export default CompanyTabNavigation

    {/* <Ionicons name="ios-home" size={24} color="black" />
    <Ionicons name="ios-home-outline" size={24} color="black" />
    <MaterialCommunityIcons name="view-list" size={24} color="black" />
    <MaterialCommunityIcons name="view-list-outline" size={24} color="black" />
    <MaterialCommunityIcons name="calendar-month" size={24} color="black" />
    <MaterialCommunityIcons name="calendar-month-outline" size={24} color="black" />
    <Ion        icons name="person" size={24} color="black" />
    <Ionicons name="person-outline" size={24} color="black" /> */}