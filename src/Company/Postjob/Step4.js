import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView, Image, Button } from "react-native";
import Header from './Header'
import styles from '../Style'
import InfoInput from "../Component/InfoInput";
import { useNavigation } from "@react-navigation/native";

export default function Step4(){
  const [procedures, setProcedures] = useState(['']);

  const navigation = useNavigation()
  const handleStep5 =()=>{
    navigation.navigate('Step5');
  }

  const handleProcedureChange = (text, index) => {
    const newProcedures = [...procedures];
    newProcedures[index] = text;
    setProcedures(newProcedures);
  };

  const addProcedure = () => {
    setProcedures([...procedures, '']);
  };

  return(
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{marginTop:20, marginLeft:20,padding:10}}>
              <Text style={styles.InfoTitle}>채용 절차</Text>
              {procedures.map((procedure, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handleProcedureChange(text, index)}
                  value={procedure}
                  placeholder={`절차 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={addProcedure}>
                <Text style={{fontSize:16}}> + 채용 절차 항목 추가</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
        <TouchableOpacity style={styles.postnext} onPress={handleStep5}>
            <Text style={styles.NextText}>NEXT</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
