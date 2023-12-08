import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from './style'

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();



const RecruitmentInfo = () => {

  return (
    <ScrollView style={{backgroundColor:'white'}} >
        <View style={{ }}>
      <Image source={{uri: 'https://www.hyundai.co.kr/image/upload/asset_library/MDA00000000000043797/5d3880e94bb1483baab23990d6afb663.jpg'}}
       style={{ width: '100%', height: 300   }}
      resizeMode="contain" />
      </View>

      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',}}>
        <Text style={styles.subtitle}>직무</Text>
        <Text style={styles.component}>앱개발자</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>직무소개</Text>
        <Text style={styles.component}>모바일기기에서 사용되는 소프트웨어인 모바일 애플리케이션을 개발하고 수정하는 일</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>담당 업무</Text>
        <Text style={styles.component}>앱 유지보수</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>선호언어</Text>
        <Text style={styles.component}>Java, JavaScript,C#</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>공고 마감일</Text>
        <Text style={styles.component}>2023-11-21</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>모집인원</Text>
        <Text style={styles.component}>2 명</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>경력 조건</Text>
        <Text style={styles.component}>신입</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>학력 조건</Text>
        <Text style={styles.component}>졸업학력무관</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>고용 형태</Text>
        <Text style={styles.component}>정규직</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>급여</Text>
        <Text style={styles.component}>회사내규에 따름</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>근무 지역</Text>
        <Text style={styles.component}>서울</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>우대 사항</Text>
        <Text style={styles.component}>국가 공인 기술 자격증명서, TOEIC 800 이상</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:15, justifyContent:'center'}}>
        <Text style={styles.subtitle}>채용절차</Text>
        <Text style={styles.component}>서류>코딩테스트>면접>합격</Text>
      </View>

     

      
      
    </ScrollView>
  );
}

const ResumeInfo = () => {
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10,}} />
            <Text style={{marginLeft:10}}>자기소개서 항목</Text>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
            <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
            <Text style={{width:'80%', fontSize:17, marginTop:20}}>1. 가장 열정/도전적으로 임했던 일과 그 일을 통해서 이룬 것에 대해 상세히 기재하여 주십시오.</Text>
            </View>
    </ScrollView>
  );
}

const CompanyInfo = () => {
  return (
    <ScrollView style={{marginTop:10, padding:10, backgroundColor:'white'}}>
        <View style={{ flexDirection:'row', alignItems:'center', flex: 1, }}>
      <Image 
      source={{uri: 'https://blog.kakaocdn.net/dn/bgbn4B/btqwQkVHqgl/h1te0fy07UbzgMgt5AUkFK/img.jpg'}} 
      style={{width: '20%', height: 20, marginLeft:10,}} 
      resizeMode="contain"/>
       <Text style={{fontSize:14, fontWeight:'800', marginLeft:10}}>현대자동차(주)</Text>
      </View>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10, }} />
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>산업</Text>
        <Text style={styles.component}>시스템관리</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>사원수</Text>
        <Text style={styles.component}>68,458 명</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>기업구분</Text>
        <Text style={styles.component}>대기업</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>자본금</Text>
        <Text style={styles.component}>1조 4,889억</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>설립일</Text>
        <Text style={styles.component}>1967-12-29</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>대표자</Text>
        <Text style={styles.component}>정의선</Text>
      </View>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'center',marginLeft:10}}>
        <Text style={styles.subtitle}>주요사업</Text>
        <Text style={styles.component}>IT 중심 모빌리티</Text>
      </View>

      
    </ScrollView>
  );
}
const DetailTopNavi = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="상세요강" component={RecruitmentInfo} />
        <Tab.Screen name="자소서 항목" component={ResumeInfo} />
        <Tab.Screen name="기업정보" component={CompanyInfo} />
      </Tab.Navigator>
    );
  }

export default DetailTopNavi;
