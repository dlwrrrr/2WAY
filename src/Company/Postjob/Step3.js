import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView, Image, Button } from "react-native";
import Header from './Header'
import styles from '../Style'
import InfoInput from "../Component/InfoInput";
import { useNavigation } from "@react-navigation/native";

export default function Step3(){
  const [jobDescription, setJobDescription] = useState('');//직무소개
  const [tasks, setTasks] = useState(['']);//담당업무
  const [qualifications, setQualifications] = useState(['']);//자격요건
  const [preferences, setPreferences] = useState(['']);//우대사항

  const navigation = useNavigation()
  const handleStep4 =()=>{
    navigation.navigate('Step4');
}

  const handleTaskChange = (text, index) => {
    const newTasks = [...tasks];
    newTasks[index] = text;
    setTasks(newTasks);
  };

  const handleQualificationChange = (text, index) => {
    const newQualifications = [...qualifications];
    newQualifications[index] = text;
    setQualifications(newQualifications);
  };

  const handlePreferenceChange = (text, index) => {
    const newPreferences = [...preferences];
    newPreferences[index] = text;
    setPreferences(newPreferences);
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
              <Text style={styles.InfoTitle}>직무 소개</Text>
              <TextInput
                style={{ borderWidth: 1, width: '90%', height: 70, borderRadius: 10, padding: 10, marginBottom: 15 }}
                onChangeText={setJobDescription}
                value={jobDescription}
              />

              <Text style={styles.InfoTitle}>담당업무</Text>
              {tasks.map((task, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handleTaskChange(text, index)}
                  value={task}
                  placeholder={`업무 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={() => addField(setTasks)}>
                <Text style={{fontSize:16}}> + 담당업무 항목 추가</Text>
              </TouchableOpacity>

              <Text style={styles.InfoTitle}>자격 요건</Text>
              {qualifications.map((qualification, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handleQualificationChange(text, index)}
                  value={qualification}
                  placeholder={`자격 요건 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={() => addField(setQualifications)}>
                <Text style={{fontSize:16}}> + 자격 요건 항목 추가</Text>
              </TouchableOpacity>

              <Text style={styles.InfoTitle}>우대 사항</Text>
              {preferences.map((preference, index) => (
                <TextInput
                  key={index}
                  style={{ borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15 }}
                  onChangeText={(text) => handlePreferenceChange(text, index)}
                  value={preference}
                  placeholder={`우대 사항 ${index + 1}`}
                />
              ))}
              <TouchableOpacity style={{borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 10, alignItems:'center', justifyContent:'center'}} onPress={() => addField(setPreferences)}>
                <Text style={{fontSize:16}}> + 우대 사항 항목 추가</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
        <TouchableOpacity style={styles.postnext} onPress={handleStep4}>
            <Text style={styles.NextText}>NEXT</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}
