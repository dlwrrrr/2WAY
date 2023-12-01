import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const SignupHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>회원가입</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0075FF',
    height: Dimensions.get('window').height * 0.09,
    justifyContent: 'center',  
    alignItems: 'center',  
  },
  text: {
    color: 'white',  
    fontSize: 25,
    fontWeight: '900',  
  },
});

export default SignupHeader;
