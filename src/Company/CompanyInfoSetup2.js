import React,{useState} from "react";
import {View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
  KeyboardAvoidingView, Platform , TextInput, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import InfoHeader from "./Component/InfoHeader";
import InfoInput from "./Component/InfoInput";
import { Checkbox } from 'react-native-paper';
import DatePickerModal from "../Component/DatePicker";
import styles from './Style'


export default function CompanyInfoSetup2(){
const navigation=useNavigation();
const [modalVisible, setModalVisible] = useState(false);
const [CompanyIndustry, setCompanyIndustry] = useState([]);
const [CompanyClassification, setCompanyClassification] = useState('')
const [EmployeeNum, setEmployeeNum] = useState('');
const [CompanyEquity, setCompanyEquity] = useState('');
const [CompanyAnniversary, setCompanyAnniversary] = useState(null);
const [CompanyMainBusiness, setCompanyMainBusiness] = useState([])
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

const showDatePicker = () => {
  setDatePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};

const handleConfirm = (date) => {
  setCompanyAnniversary(date);
  console.log("선택한 날짜: ", date);
  hideDatePicker();
};

const industryItems = ['SI·시스템통합', 'ERP', 'CRM', 'DRM', 'DW', 'KMS', 'NI·네트워크통합', 'DataMining', 
'OLAP', 'SCM', 'DBMS', '시스템관리', 'BPR', 'BSC', '솔루션업체', 'ASP', '소프트웨어개발', 'SEM', 'SM'];

const Classification = ['중소기업', '중견기업', '대기업'];

const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleSelection = (item) => {
    const index = CompanyIndustry.indexOf(item);
    if (index < 0) {
      setCompanyIndustry([...CompanyIndustry, item]);
    } else {
      setCompanyIndustry(CompanyIndustry.filter((_, i) => i !== index));
    }
  };

  const handleBusinessChange = (text) => {
    const businessArray = text.split(',').map(item => item.trim());
    CompanyMainBusiness(businessArray);
  };


const handleComplete =()=>{
    navigation.navigate('SetupComplete');
}

const selectCompany = (item) => {
  setCompanyClassification(item);
}

return(
  <SafeAreaView style={{flex:1}}>
  <InfoHeader />
  <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}} >
  <ScrollView contentContainerStyle={{flexGrow: 1}}>
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
  <View style={{ marginTop: 20, marginLeft: 35 }}>
    <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>산업</Text>
    <TouchableOpacity style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
      onPress={toggleModal} >
      <Text>{CompanyIndustry.join(', ')}</Text>
    </TouchableOpacity>
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
          {industryItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => toggleSelection(item)}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Checkbox status={CompanyIndustry.includes(item) ? 'checked' : 'unchecked'} onPress={() => toggleSelection(item)} />
                <Text>{item}</Text>
              </View>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={toggleModal}>
            <Text style={{ marginTop: 10 }}>완료</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
    <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>기업구분</Text>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      {Classification.map((item, index) => (
        <TouchableOpacity key={index} style={{ borderColor: CompanyClassification === item ? 'blue' : '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '30%' }}
          onPress={() => selectCompany(item)} >
          <Text style={{ textAlign: 'center' }}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
    <View>
      <InfoInput
      title='사원수'
      placeholder='인원'
      onChangeText={setEmployeeNum}
      value={EmployeeNum}
      keyboardType='number-pad'/>

      <InfoInput
      title='자본금'
      placeholder='ex)10억3,000만원'
      onChangeText={setCompanyEquity}
      value={CompanyEquity}
      keyboardType='default'/>

      <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>설립일</Text>
      <TouchableOpacity style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
        onPress={showDatePicker} >
          <Text>{CompanyAnniversary ? CompanyAnniversary.toLocaleDateString('ko', { year: 'numeric', month: '2-digit', day: '2-digit' }) : '날짜선택'}</Text>
          <DatePickerModal
            isVisible={isDatePickerVisible}
            handleConfirm={handleConfirm}
            hideDatePicker={hideDatePicker}
          />
      </TouchableOpacity>
      <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>주요사업</Text>
      <TextInput 
        style={{flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15}} 
        placeholder="주요 사업을 입력해주세요"
        onChangeText={handleBusinessChange}
      />
    </View>

  </View>
  </TouchableWithoutFeedback>
  </ScrollView>
  </KeyboardAvoidingView>
  <View style={{height: 1, backgroundColor: 'gray', marginVertical: 20}} />

<TouchableOpacity style={styles.NextButton} onPress={handleComplete}>
    <Text style={styles.NextText}>저장</Text>
</TouchableOpacity>
  
</SafeAreaView>
)}