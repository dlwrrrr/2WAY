import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

{/***회사 진행 중인 공고 조회: `GET /companies/jobs/ongoing`**

- **Job 테이블 조회**
- **입력:**
    - **URL 매개변수 : `GET /companies/jobs/ongoing?page=1&pageSize=10`**
        - **`page`: 현재 페이지 번호.**
        - **`pageSize`: 페이지 당 표시할 항목 수.**
- **반환:**
    - **기업 ID (companyId | token)**
    - **jobs:**
        - **회사 명 (companyName) / CompanyInfo 테이블 참조 /**
        - **공고 제목(title)**
        - **시작 날짜 (startDate | 마감 Date 표현 | JS Date)**
        - **종료 날짜 (endDate | 마감 Date 표현 | JS Date)**
        - **경력 조건 (experienceLevel | enum: Newcomer (신입), Experienced (경력), Unspecified (경력 무관))**
        - **학력 조건 (educationLevel | 최종 학력 | enum: HighSchoolGraduate (고등학교졸업), AssociateDegree (대학졸업(2,3년)), BachelorsDegree (석/박사), EducationNotRequired (졸업학력무관))**
        - **로고 이미지 (logoImage) / CompanyInfo 테이블 참조 /** */}

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