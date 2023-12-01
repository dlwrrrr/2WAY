import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


const InputTitle = ({ title, placeholder, onChangeText, value, keyboardType, secureTextEntry }) => {
  return (
    <View style={{justifyContent: 'center', padding:10, marginLeft:35, }}>
      <Text style={styles.title}>{title}</Text>
      <TextInput 
        style={styles.input} 
        placeholder={placeholder} 
        onChangeText={onChangeText} 
        value={value} 
        keyboardType={keyboardType} 
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 19,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    marginLeft: 5,

 
  },
  input: {
    
    borderColor: '#8F8F8F', 
    borderWidth: 1, 
    width: '90%', 
    height: 50,
    borderRadius: 10,
    padding:15,
  },
});

export default InputTitle;
