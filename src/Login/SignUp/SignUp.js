import React, { useState } from "react";
import {View, Text, SafeAreaView, TouchableWithoutFeedback, 
        Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, Alert} from 'react-native'
import SignupHeader from "./SignupHeader"
import InputTitle from "./SignupTitle";
import styles from '../LoginScreenStyle'
import { useNavigation } from "@react-navigation/native";

export default function SignUp ({route}){


    const handleAPI=()=>{
        
    }
    const [isPersonal, setIsPersonal] = useState(route.params.isPersonal);

    const [name, setName] = useState('')
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigation=useNavigation()

    const handleSignUp = () => {
        if(!name) {
            Alert.alert("알림", "이름을 입력해주세요.");
            return;
        }
        if(!email) {
            Alert.alert("알림", "이메일을 입력해주세요.");
            return;
        }
        if(!password) {
            Alert.alert("알림", "비밀번호를 입력해주세요.");
            return;
        }
        if(!passwordConfirm) {
            Alert.alert("알림", "비밀번호 확인을 입력해주세요.");
            return;
        }
        if(password !== passwordConfirm) {
          Alert.alert("비밀번호 불일치", "비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
          return;
        }
        if (isPersonal) {
            navigation.navigate('PersonalProfile');
        } else {
            navigation.navigate('CompanyProfile');
        }
      }

    return (
        <SafeAreaView style={{flex:1}}>
            <SignupHeader/>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style ={{justifyContent:'center', marginTop: 20,}}>
                <InputTitle
                    title = "이름"
                    placeholder={'이름을 입력하세요.'}
                    onChangeText={setName}
                    value={name}
                    keyboardType='default'/>
                    
                <InputTitle
                    title="이메일" 
                    placeholder="이메일을 입력하세요." 
                    onChangeText={setEmail} 
                    value={email} 
                    keyboardType="email-address"/>
                <InputTitle
                    title="비밀번호"
                    placeholder="비밀번호를 입력하세요."
                    onChangeText={setPassword}
                    value={password}
                    keyboardType='visible-password'
                    secureTextEntry/>
                <InputTitle
                    title="비밀번호 확인"
                    placeholder="비밀번호를 다시 한번 입력하세요."
                    onChangeText={setPasswordConfirm}
                    value={passwordConfirm}
                    keyboardType='visible-password'
                    secureTextEntry/> 

                <TouchableOpacity style={styles.signupcomplete} onPress={handleSignUp} >
                <Text style={styles.signupcompleteText}>회원가입</Text>
                </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
              
            </KeyboardAvoidingView>
            
        </SafeAreaView>
    )
}