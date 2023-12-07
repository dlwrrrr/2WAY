import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreenStyle'
import { storeToken } from './API/token'
import axios from 'axios'

export default function LoginScreen() {
  const [isPersonal, setIsPersonal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();


  const handleLogin = async () => {
    if(!email){
      Alert.alert('알림','이메일을 입력해주세요.');
      return;
    }
    if(!password){
      Alert.alert('알림', '비밀번호를 입력해주세요.');
      return;
    }
  
    // isPersonal의 값에 따라 URL 선택
    const url = isPersonal ? 'https://3c3uqw-ip-219-251-96-151.tunnelmole.net/applicants' : 'https://3c3uqw-ip-219-251-96-151.tunnelmole.net/companies';
  
    // 서버에 로그인 요청을 보냄
    try {
      let response = await axios.post(url, {
        email: email,
        password: password,
      });
  
      if (response.status === 200) { // 로그인 성공
        let token = response.data.token;
        await storeToken(token)
  
        if (isPersonal) {
          navigation.navigate('PersonalHome'); 
        } else {
          navigation.navigate('CompanyTabNavigation', {
            screen: '홈',
            params: { screen: 'CompanyHome' },
          });
        }
      } else { // 로그인 실패
        Alert.alert('알림', '이메일이나 비밀번호를 확인해주세요.');
      }
    } catch (error) {
      console.error('로그인 중 오류 발생:', error);
    }
  };
   
  
  const handleSignUp = () => {
      navigation.navigate('SignUp', {isPersonal: isPersonal});
    
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      {/* <View style={styles.logo}>
      </View> */}
      <View style={styles.switchButton}>
        <TouchableOpacity
          style={[styles.switchItem, isPersonal && styles.selected]}
          onPress={() => setIsPersonal(true)}
        >
          <Text style={isPersonal ? styles.selectedText : styles.switchText}>개인</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.switchItem, !isPersonal && styles.selected]}
          onPress={() => setIsPersonal(false)}
        >
          <Text style={!isPersonal ? styles.selectedText : styles.switchText}>기업</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="이메일을 입력하세요."
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        keyboardType="visible-password"
        placeholder="비밀번호를 입력하세요."
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity 
       hitslop={{top: 10, bottom: 10, left: 10, right: 10}}
       style={styles.signupLink}
       onPress={handleSignUp} >
        <Text style={{color:'gray'}}>아직 회원이 아니세요?<Text style={styles.signupbutton}>  회원가입</Text></Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

