import React from "react";
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import styles from '../Company/Style'

export default function ResumeSetup (){

    const navigation = useNavigation();

    const handleNew = () =>{
        navigation.navigate('Newcomer');
    }

    const handleExp =()=>{
        navigation.navigate('Experieced')
    }

    return (
      <SafeAreaView>
        <View style={{justifyContent:'center', alignItems:'center', marginTop:70,}}>
          <Text style={{fontSize: 30, marginBottom: 20}}>이력서를 등록해보세요</Text>
          <Text style={{fontSize:32, fontWeight:'700', color: '#0075FF'}}>현재 경력을 알려주세요</Text>
          

          <TouchableOpacity style={[styles.gotoprofileuploadbutton,{marginTop:50}]} onPress={handleNew}>
            <Text style={styles.gotoprofileuploadText }> 신입 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.goHomeButton} onPress={handleExp}>
          <Text style={styles.goHomeText}>경력</Text>
        </TouchableOpacity>
        </View>
        
      </SafeAreaView>
    )
}