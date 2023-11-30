import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './LoginScreenStyle'

export default function LoginScreen() {
  const [isPersonal, setIsPersonal] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // if(LoginError){
    //     Alert.alert('알림','이메일이나 비밀번호를 확인해주세요.')
    //     return
    // }
    if(!email){
        Alert.alert('알림','이메일을 입력해주세요.');
        return;
    }
    if(!password){
        Alert.alert('알림', '비밀번호를 입력해주세요.');
        return;
    }
    if (isPersonal) {
      navigation.navigate('PersonalProfile');
    } else {
      navigation.navigate('CompanyProfile');
    }
  };

  const handleSignUp = () => {
    if (isPersonal) {
      navigation.navigate('PersonalSignUp');
    } else {
      navigation.navigate('CompanySignUp');
    }
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
        keyboardType="done"
        placeholder="비밀번호를 입력하세요."
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSignUp}>
        <Text style={styles.signupLink}>회원가입</Text>
      </TouchableOpacity>
    </View>
    </TouchableWithoutFeedback>
  );
}

