import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './Style'

export default function CompanyProfile (){

    const navigation = useNavigation();

    const handlePost = () =>{
        navigation.navigate('CompanyTabNavigation', {
            screen: '공고등록',
            params: { screen: 'PostJobStep1' },
          });
    }

    const handleHome =()=>{
        navigation.navigate('CompanyTabNavigation', {
            screen: '홈',
            params: { screen: 'CompanyHome' },
          });
    }

    return (
      <SafeAreaView>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:70,}}>
          <Text style={{fontSize:32, fontWeight:'700', color: '#0075FF'}}>기업 정보 작성 완료 !</Text>
          <Text style={{fontSize: 30, marginBottom: 20}}>채용공고 등록하러 가볼까요?</Text>

          <TouchableOpacity style={[styles.gotoprofileuploadbutton,{marginTop:50}]} onPress={handlePost}>
            <Text style={styles.gotoprofileuploadText }> 채용공고 등록하기 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goHomeButton} onPress={handleHome}>
          <Text style={styles.goHomeText}>홈으로 이동하기</Text>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}