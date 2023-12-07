import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView } from "react-native";
import Header from './Header'
import styles from '../Style'
import InfoInput from "../Component/InfoInput";
import DatePickerModal from "../../Component/DatePicker";
import { Checkbox } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";


export default function PostJobStep1 (){

    const JobPosition=['백엔드개발자','프론트엔드개발자','웹개발자','앱개발자','시스템엔지니어','네트워크엔지니어','DBA','데이터엔지니어','데이터분석가',
    '보안엔지니어','보안관제','보안컨설팅','소프트웨어개발자','게임개발자','하드웨어개발자','머신러닝엔지니어','블록체인개발자','클라우드엔지니어','웹퍼블리셔','IT컨설팅',
    'QA/테스터','기술지원','유지보수','정보보안','CISO','CPO','FAE','게임운영','ICT컨설팅','SI개발','SQA']

    const skill=['Java','Python','JavaScript','TypeScript','Kotlin','C','C++','C#','Swift','Go','PHP','Ruby',
    'SQL','HTML','CSS','ReactJS','VueJS','Angular','NodeJS','Django','Spring','ASP.NET','Flutter','React Native',
    'Docker','Kubernetes','AWS','Google Cloud Platform','Azure']
    
    const [title, setTitle] = useState('');
    const [selectedJobPosition, setSelectedJobPosition] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState([]);
    const [modalVisibleJob, setModalVisibleJob] = useState(false);
    const [modalVisibleSkill, setModalVisibleSkill] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startDatePickerVisible, setStartDatePickerVisible] = useState(false);
    const [endDatePickerVisible, setEndDatePickerVisible] = useState(false);
    const [numberOfVacancies,setNumberOfVacancies] = useState('');

    const navigation = useNavigation()

    const handleStep2 =()=>{
        navigation.navigate('Step2');
    }


    const toggleModalJob = () => {
        setModalVisibleJob(!modalVisibleJob);
      };
    
      const toggleJobPosition = (item) => {
        const index = selectedJobPosition.indexOf(item);
        if (index < 0) {
          setSelectedJobPosition([...selectedJobPosition, item]);
        } else {
          setSelectedJobPosition(selectedJobPosition.filter((_, i) => i !== index));
        }
      };

      const toggleModalSkill = () => {
        setModalVisibleSkill(!modalVisibleSkill);
      };
    
      const toggleSkill = (item) => {
        const index = selectedSkill.indexOf(item);
        if (index < 0) {
          setSelectedSkill([...selectedSkill, item]);
        } else {
          setSelectedSkill(selectedSkill.filter((_, i) => i !== index));
        }
      };

      const showStartDatePicker = () => {
        setStartDatePickerVisible(true);
      };
    
      const hideStartDatePicker = () => {
        setStartDatePickerVisible(false);
      };
    
      const showEndDatePicker = () => {
        setEndDatePickerVisible(true);
      };
    
      const hideEndDatePicker = () => {
        setEndDatePickerVisible(false);
      };
    
      const handleStartDateConfirm = (date) => {
        setStartDate(date);
        console.log("선택한 시작 날짜: ", date);
        hideStartDatePicker();
      };
    
      const handleEndDateConfirm = (date) => {
        setEndDate(date);
        console.log("선택한 마감 날짜: ", date);
        hideEndDatePicker();
      };
      

    return(
        <SafeAreaView style={{flex:1}}>
            <Header/>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{marginTop:20, marginLeft:20,padding:10}}>
            
            <InfoInput
            title='제목'
            placeholder='ex) 웹/앱개발 프론트엔드 개발자 모집'
            onChangeText={setTitle}
            value={title}
            keyboardType='default'
            />

             {/* 직무 선택 부분 */}
             <Text style={styles.InfoTitle}>직무</Text>
             <TouchableOpacity 
          style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
          onPress={toggleModalJob}
        >
          <Text>{selectedJobPosition.join(', ')}</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisibleJob}>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
    <View style={{ width: '100%', maxHeight: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
      <ScrollView>
        {JobPosition.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => toggleJobPosition(item)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Checkbox status={selectedJobPosition.includes(item) ? 'checked' : 'unchecked'} onPress={() => toggleJobPosition(item)} />
              <Text>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={toggleModalJob}>
        <Text style={{ marginTop: 10, fontWeight:'bold' }}>완료</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>
            {/* 선호 언어 선택 부분 */}
        <Text style={styles.InfoTitle}>선호 언어</Text>
        <TouchableOpacity 
          style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
          onPress={toggleModalSkill}
        >
          <Text>{selectedSkill.join(', ')}</Text>
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisibleSkill}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
            <View style={{ width: '100%', maxHeight: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
              <ScrollView>
                {skill.map((item, index) => (
                  <TouchableOpacity key={index} onPress={() => toggleSkill(item)}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Checkbox status={selectedSkill.includes(item) ? 'checked' : 'unchecked'} onPress={() => toggleSkill(item)} />
                      <Text>{item}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <TouchableOpacity onPress={toggleModalSkill}>
                <Text style={{ marginTop: 10, fontWeight:'bold' }}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

            {/* 마감일 선택 부분 */}
        <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>접수 기간</Text>
        <View style={{flexDirection:'row'}}>
      <TouchableOpacity
        style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '40%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15
        , alignItems:'center', justifyContent:'center' }}
        onPress={showStartDatePicker}
      >
        <Text>{startDate ? startDate.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '시작일'}</Text>
        <DatePickerModal
          isVisible={startDatePickerVisible}
          handleConfirm={handleStartDateConfirm}
          hideDatePicker={hideStartDatePicker}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '40%', height: 50, borderRadius: 10, padding: 10, marginBottom: 15
    , alignItems:'center', justifyContent:'center', marginLeft:30, }}
        onPress={showEndDatePicker}
      >
        <Text>{endDate ? endDate.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '마감일'}</Text>
        <DatePickerModal
          isVisible={endDatePickerVisible}
          handleConfirm={handleEndDateConfirm}
          hideDatePicker={hideEndDatePicker}
        />
      </TouchableOpacity>
      </View>
      <InfoInput
      title='모집 인원'
      placeholder='0'
      keyboardType='number-pad'
      onChangeText={setNumberOfVacancies}
      value={numberOfVacancies}
      />

</View>
</TouchableWithoutFeedback>
</ScrollView>
</KeyboardAvoidingView>
<View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
<TouchableOpacity style={styles.postnext} onPress={handleStep2}>
    <Text style={styles.NextText}>NEXT</Text>
</TouchableOpacity>
        </SafeAreaView>
    )
}