import React,{useState} from "react";
import {View, Text, SafeAreaView, TouchableOpacity, Modal, CheckBox} from 'react-native'
import { useNavigation } from "@react-navigation/native";
import InfoHeader from "./Component/InfoHeader";
import InfoInput from "./Component/InfoInput";
import { Checkbox } from 'react-native-paper';

export default function CompanyInfoSetup2(){
const navigation=useNavigation();
const [modalVisible, setModalVisible] = useState(false);
const [CompanyIndustry, setCompanyIndustry] = useState([]);
const [CompanyClassification, setCompanyClassification] = useState('')
const [EmployeeNum, setEmployeeNum] = useState('');
const [CompanyEquity, setCompanyEquity] = useState('');
const [CompanyAnniversary, setCompanyAnniversary] = useState('');
const [CompanyMainBusiness, setCompanyMainBusiness] = useState([])

const industryItems = ['SI·시스템통합', 'ERP', 'CRM', 'DRM', 'DW', 'KMS', 'NI·네트워크통합', 'DataMining', 
'OLAP', 'SCM', 'DBMS', '시스템관리', 'BPR', 'BSC', '솔루션업체', 'ASP', '소프트웨어개발', 'SEM', 'SM'];

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

const handleComplete =()=>{
    navigation.navigate('SetupComplete');
}

return(
    <SafeAreaView>
      <InfoHeader />
      <View style={{ marginTop: 20, marginLeft: 35 }}>
        <Text style={{ fontSize: 19, fontWeight: 'bold', marginTop: 10, marginBottom: 10, marginLeft: 5, }}>산업</Text>
        <TouchableOpacity style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
          onPress={toggleModal} >
          {CompanyIndustry.map((industry, index) => (
            <Text key={index}>{industry}, </Text>
          ))}
        </TouchableOpacity>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
              {industryItems.map((item, index) => (
                 <TouchableOpacity key={index} style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => toggleSelection(item)}>
                 <Checkbox status={CompanyIndustry.includes(item) ? 'checked' : 'unchecked'} onPress={() => toggleSelection(item)} />
                 <Text>{item}</Text>
               </TouchableOpacity>
              ))}
              <TouchableOpacity onPress={toggleModal}>
                <Text style={{ marginTop: 10 }}>완료</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaView>
)}