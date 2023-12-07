import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView, Image } from "react-native";
import Header from './Header'
import styles from '../Style'
import { Checkbox } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';


export default function Step2(){

    const experienceLevel=['신입', '경력', '경력무관']
    const educationLevel=['고등학교졸업','대학졸업(2,3년)','대학교졸업(4년)','석/박사','졸업학력무관' ]
    const jobType=['정규직','인턴','전환형 인턴', '계약직']
    const salary=['면접 후 결정', '회사내규에 따름']
    const location=['서울', '경기','인천','대전','세종','충남','충북','광주','전남','전북',
    '대구', '경북', '부산','울산','경남','강원','제주']
    
    const [selectedExperience, setSelectedExperience] = useState('');
    const [selectedSalary, setSelectedSalary] = useState('');
    const [selectedEducation, setSelectedEducation] = useState('');
    const [selectedJobType, setSelectedJobType] = useState('');
    const [modalVisibleEducation, setModalVisibleEducation] = useState(false);
    const [modalVisibleJobType, setModalVisibleJobType] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState([]);
    const [modalVisibleLocation, setModalVisibleLocation] = useState(false);
    const [image, setImage] = useState(null);
    const [imageName, setImageName] = useState(null);
  
    const navigation = useNavigation()

    const handleStep3 =()=>{
        navigation.navigate('Step3');
    }

    const selectImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: false,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
            setImage(result.assets[0].uri);
        }
      };
    
    const selectExperience = (item) => {
        setSelectedExperience(item);
      }
    
      const selectSalary = (item) => {
        setSelectedSalary(item);
      }

      const toggleModalEducation = () => {
        setModalVisibleEducation(!modalVisibleEducation);
      };
    
      const selectEducation = (item) => {
        setSelectedEducation(item);
        toggleModalEducation();
      };
    
      const toggleModalJobType = () => {
        setModalVisibleJobType(!modalVisibleJobType);
      };
    
      const selectJobType = (item) => {
        setSelectedJobType(item);
        toggleModalJobType();
      };

      const toggleModalLocation = () => {
        setModalVisibleLocation(!modalVisibleLocation);
      };
    
      const toggleLocation = (item) => {
        if (selectedLocation.includes(item)) {
          setSelectedLocation(selectedLocation.filter(location => location !== item));
        } else {
          setSelectedLocation([...selectedLocation, item]);
        }
      };

    
    return(

        <SafeAreaView style={{flex:1}}>
            <Header/>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{marginTop:20, marginLeft:20,padding:10}}>

            {/* 경력 선택 부분 */}
      <Text style={styles.InfoTitle}>경력</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {experienceLevel.map((item, index) => (
          <TouchableOpacity key={index} style={{ borderColor: selectedExperience === item ? 'blue' : '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '30%' }}
            onPress={() => selectExperience(item)} >
            <Text style={{ textAlign: 'center' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

            {/* 최종 학력 선택 부분 */}
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


      {/* 급여 선택 부분 */}
      <Text style={styles.InfoTitle}>급여</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {salary.map((item, index) => (
          <TouchableOpacity key={index} style={{ borderColor: selectedSalary === item ? 'blue' : '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '45%' }}
            onPress={() => selectSalary(item)} >
            <Text style={{ textAlign: 'center' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
       {/* 근무 형태 선택 부분 */}
       <Text style={styles.InfoTitle}>근무 형태</Text>
      <TouchableOpacity 
        style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 1, borderRadius: 10, padding: 15, marginBottom: 15, width: '50%' }}
        onPress={toggleModalJobType}
      >
        <Text>{selectedJobType || '선택'}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisibleJobType}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <View style={{ width: '100%', maxHeight: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            {jobType.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => selectJobType(item)}>
            <Text style={{ textAlign: 'center', fontSize: 18, marginBottom: 10 }}>{item}</Text>
            </TouchableOpacity>
        ))}
          </View>
        </View>
      </Modal>

       {/* 근무 지역 선택 부분 */}
       <Text style={styles.InfoTitle}>근무 지역</Text>
      <TouchableOpacity 
        style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 1, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
        onPress={toggleModalLocation}
      >
        <Text>{selectedLocation.join(', ')}</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisibleLocation}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 20 }}>
          <View style={{ width: '100%', maxHeight: '80%', backgroundColor: 'white', borderRadius: 20, padding: 20, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5 }}>
            <ScrollView>
              {location.map((item, index) => (
                <TouchableOpacity key={index} onPress={() => toggleLocation(item)}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Checkbox status={selectedLocation.includes(item) ? 'checked' : 'unchecked'} onPress={() => toggleLocation(item)} />
                    <Text>{item}</Text>
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity onPress={toggleModalLocation}>
              <Text style={{ marginTop: 10, fontWeight:'bold' }}>완료</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 이미지 업로드 부분 */}
      <Text style={styles.InfoTitle}>모집 요강</Text>
      <TouchableOpacity 
        style={{ width: '90%', height: 40, borderColor: '#8F8F8F', borderWidth: 1, borderRadius: 10,  marginBottom: 15, justifyContent: 'center', alignItems: 'center' }}
        onPress={selectImage}
      >
          {image ? <Text style={{ fontSize: 15, justifyContent:'center',alignItems:'center' }}>업로드완료</Text> : <Text style={{ fontSize: 20 }}>+</Text>}
        </TouchableOpacity>
        </View>

  </TouchableWithoutFeedback>
 </ScrollView>
</KeyboardAvoidingView>

        <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
        <TouchableOpacity style={styles.postnext} onPress={handleStep3}>
            <Text style={styles.NextText}>NEXT</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}