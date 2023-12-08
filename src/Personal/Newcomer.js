import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView } from "react-native";
import InfoInput from "../Company/Component/InfoInput";
import styles from '../Company/Style'
import DatePickerModal from "../Component/DatePicker";
import { useNavigation } from "@react-navigation/native";


export default function Newcomer(){

    const educationLevel=['고등학교졸업','대학졸업(2,3년)','대학교졸업(4년)','석/박사','졸업학력무관' ]
    const selcectSex=['남자', '여자']
    const navigation = useNavigation();
    

    const [baekjoonId, setBaekjoonId] = useState('');
    const [githubid, setGithubid] = useState('');
    const [schoolname, setSchoolname] = useState('');
    const [major, setMajor] = useState('');
    const [address, setaddress] = useState('');
    const [sex, setsex] = useState('');
    const [DatePickerVisible, setDatePickerVisible] = useState(false);
    const [birth, setBirth] = useState(null);



    const [selectedEducation, setSelectedEducation] = useState('');
    const [modalVisibleEducation, setModalVisibleEducation] = useState(false);


    const handlecomplete =()=>{
        navigation.navigate('PersonalTabNavigation', {
            screen: 'Home',
            params: { screen: 'PersonalHome' },
          });
    }

    const selectSex = (item) => {
        setsex(item);
      }

    const selectEducation = (item) => {
        setSelectedEducation(item);
        toggleModalEducation();
      };

    const toggleModalEducation = () => {
        setModalVisibleEducation(!modalVisibleEducation);
      };

      const DatePicker = () => {
        setDatePickerVisible(true);
      };
      const hideDatePicker = () => {
        setDatePickerVisible(false);
      };
      const handleConfirm = (date) => {
        setBirth(date);
        console.log("선택한 시작 날짜: ", date);
        hideDatePicker();
      };
    

    return(
        <SafeAreaView style={{flex:1}}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}} >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ marginTop: 20, marginLeft: 35 }}>
            <InfoInput
            title='GitHub ID'
            placeholder='Github'
            onChangeText={setGithubid}
            value={githubid}/>
            <InfoInput
            title='BaekJoon ID'
            placeholder='Github'
            onChangeText={setBaekjoonId}
            value={baekjoonId}/>

      <Text style={styles.InfoTitle}>최종 학력</Text>
      <TouchableOpacity 
        style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '90%' }}
        onPress={toggleModalEducation}
      >
        <Text>{selectedEducation || '학력 선택'}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisibleEducation}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <View style={{ width: '100%', maxHeight: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            {educationLevel.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => selectEducation(item)}>
          <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10 }}>{item}</Text>
        </TouchableOpacity>
      ))}
          </View>
        </View>
      </Modal>

      <InfoInput
      title='학교명'
      placeholder='학교명 입력'
      onChangeText={setSchoolname}
      value={schoolname}/>

      <InfoInput
      title='전공'
      placeholder='전공'
      onChangeText={setMajor}
      value={major}/>
      
      <Text style={styles.InfoTitle}>성별</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        {selcectSex.map((item, index) => (
          <TouchableOpacity key={index} style={{ borderColor: sex === item ? 'blue' : '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '30%' }}
            onPress={() => selectSex(item)} >
            <Text style={{ textAlign: 'center' }}>{item}</Text>
          </TouchableOpacity>
          
        ))}</View>
        <Text style={styles.InfoTitle}>생년월일</Text>
        <View style={{flexDirection:'row'}}>
        <TouchableOpacity
            style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '50%', height: 50, borderRadius: 10, padding: 10, marginLeft:32
            , alignItems:'center', justifyContent:'center' }}
            onPress={DatePicker}
        >
            <Text>{birth ? birth.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' }) : 'YYYY.MM.DD'}</Text>
            <DatePickerModal
            isVisible={DatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
            />
            </TouchableOpacity></View>

            <InfoInput
            title='주소'
            placeholder='주소입력'
            onChangeText={setaddress}
            value={address}/>
        

      

      



            </View>
    </TouchableWithoutFeedback>
  </ScrollView>
  </KeyboardAvoidingView>

  <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
<TouchableOpacity style={styles.postnext} onPress={handlecomplete}>
    <Text style={styles.NextText}>완료</Text>
</TouchableOpacity>

        </SafeAreaView>
    )
}