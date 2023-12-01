import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from './Style'
import CompanyInfoSetup from "./CompanyInfoSetup";

export default function CompanyProfile (){

    const navigation = useNavigation();

    const handleInfo = () =>{
        navigation.navigate('CompanyInfoSetup')
    }

    return (
      <SafeAreaView>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:200,}}>
          <Text style={{fontSize:32, fontWeight:'700'}}>회원가입이 완료되었습니다 !</Text>
          <Text style={{marginTop: 80, fontSize: 15}}>채용공고 등록 전 필수사항!</Text>
          <Text style={{fontSize: 20}}>기업 프로필을 작성해주세요</Text>

          <TouchableOpacity style={styles.gotoprofileuploadbutton} onPress={handleInfo}>
            <Text style={styles.gotoprofileuploadText}> 지금 바로 작성하기 </Text>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}