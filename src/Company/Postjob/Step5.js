import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Alert,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView, } from "react-native";
import Header from './Header'
import styles from '../Style'
import InfoInput from "../Component/InfoInput";
import { useNavigation } from "@react-navigation/native";

export default function Step5(){
  const [questions, setQuestions] = useState(['']);
  const [documents, setDocuments] = useState(['']);

  const navigation = useNavigation()
  const handleComplete =()=>{
    Alert.alert(
        "등록 완료",
        "등록이 완료되었습니다.",
        [
          {
            text: "확인",
            onPress: () => navigation.navigate('공고관리')
          }
        ]
      );
    }
  

  const handleQuestionChange = (text, index) => {
    const newQuestions = [...questions];
    newQuestions[index] = text;
    setQuestions(newQuestions);
  };

  const handleDocumentChange = (text, index) => {
    const newDocuments = [...documents];
    newDocuments[index] = text;
    setDocuments(newDocuments);
  };

  const addField = (setter) => {
    setter(prev => [...prev, '']);
  };

  return(
    <SafeAreaView style={{flex:1}}>
      <Header/>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{marginTop:20, marginLeft:20,padding:10}}>
              <Text style={styles.InfoTitle}>자기소개서 질문지</Text>
              {questions.map((question, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handleQuestionChange(text, index)}
                  value={question}
                  placeholder={`질문 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={() => addField(setQuestions)}>
                <Text style={{fontSize:16}}> + 질문 항목 추가</Text>
              </TouchableOpacity>

              <Text style={styles.InfoTitle}>서류 제출 항목</Text>
              {documents.map((document, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handleDocumentChange(text, index)}
                  value={document}
                  placeholder={`서류 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={() => addField(setDocuments)}>
                <Text style={{fontSize:16}}> + 서류 항목 추가</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
        <TouchableOpacity style={styles.postnext} onPress={handleComplete}>
            <Text style={styles.NextText}>작성완료</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
