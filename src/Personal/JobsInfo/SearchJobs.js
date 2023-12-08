import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, Modal,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from 'react-native-paper';
import styles from '../../Company/Style'


export default function SearchJobs(){

    const experienceLevel=['신입', '경력', '경력무관']

    const JobPosition=['백엔드개발자','프론트엔드개발자','웹개발자','앱개발자','시스템엔지니어','네트워크엔지니어','DBA','데이터엔지니어','데이터분석가',
    '보안엔지니어','보안관제','보안컨설팅','소프트웨어개발자','게임개발자','하드웨어개발자','머신러닝엔지니어','블록체인개발자','클라우드엔지니어','웹퍼블리셔','IT컨설팅',
    'QA/테스터','기술지원','유지보수','정보보안','CISO','CPO','FAE','게임운영','ICT컨설팅','SI개발','SQA']

    const location=['서울', '경기','인천','대전','세종','충남','충북','광주','전남','전북',
    '대구', '경북', '부산','울산','경남','강원','제주']

    const skill=['Java','Python','JavaScript','TypeScript','Kotlin','C','C++','C#','Swift','Go','PHP','Ruby',
    'SQL','HTML','CSS','ReactJS','VueJS','Angular','NodeJS','Django','Spring','ASP.NET','Flutter','React Native',
    'Docker','Kubernetes','AWS','Google Cloud Platform','Azure']

    const educationLevel=['고등학교졸업','대학졸업(2,3년)','대학교졸업(4년)','석/박사','졸업학력무관' ]

    const jobType=['정규직','인턴','전환형 인턴', '계약직']

    const [title,setTitle] = useState('');

    const [selectedSkill, setSelectedSkill] = useState([]);
    const [modalVisibleSkill, setModalVisibleSkill] = useState(false);

    const [selectedJobPosition, setSelectedJobPosition] = useState([])
    const [modalVisibleJob, setModalVisibleJob] = useState(false);

    const [selectedLocation, setSelectedLocation] = useState([]);
    const [modalVisibleLocation, setModalVisibleLocation] = useState(false);

    const [selectedExperience, setSelectedExperience] = useState('');
    const [modalVisibleEducation, setModalVisibleEducation] = useState(false);

    const [selectedEducation, setSelectedEducation] = useState('');

    const [selectedJobType, setSelectedJobType] = useState('');
    const [modalVisibleJobType, setModalVisibleJobType] = useState(false);


    const navigation = useNavigation()
    const handleResult =()=>{
        navigation.navigate('JobsInfo');
    }

    const selectExperience = (item) => {
        setSelectedExperience(item);
      }

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


  
    return(
        <SafeAreaView style={{flex:1}}>
            {/* 헤더 */}
        <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
            <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>채용정보:맞춤정보설정</Text>
            </View>
            
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}} >
            <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ marginTop: 20, marginLeft: 35 }}>
                <View style={{borderWidth:0.4, width:'90%', height:50,padding:10, alignItems:'center', borderRadius:10, justifyContent:'center' }}>
                <TextInput placeholder="공고명을 입력해주세요"
                onChangeText={setTitle}
                value={title}/></View>


            <Text style={styles.InfoTitle}>근무 지역</Text>
            <TouchableOpacity 
                style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 0.4, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
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


            <Text style={styles.InfoTitle}>직무</Text>
                    <TouchableOpacity 
                style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 0.4, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
                onPress={toggleModalJob}
                >
                <Text>{selectedJobPosition.join(', ')||'선택'}</Text>
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

         {/* 경력 선택 부분 */}
      <Text style={styles.InfoTitle}>경력</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {experienceLevel.map((item, index) => (
          <TouchableOpacity key={index} style={{ borderColor: selectedExperience === item ? 'blue' : '#8F8F8F', borderWidth: 0.4, borderRadius: 10, padding: 15, marginBottom: 15, width: '30%' }}
            onPress={() => selectExperience(item)} >
            <Text style={{ textAlign: 'center' }}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

        <Text style={styles.InfoTitle}>근무 형태</Text>
      <TouchableOpacity 
        style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 0.4, borderRadius: 10, padding: 15, marginBottom: 15, width: '50%' }}
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

      <Text style={styles.InfoTitle}>선호 언어</Text>
        <TouchableOpacity 
          style={{ flexDirection:'row',borderColor: '#8F8F8F', borderWidth: 0.4, width: '90%', height: 50, borderRadius: 10, padding: 15, marginBottom: 15 }}
          onPress={toggleModalSkill}
        >
          <Text>{selectedSkill.join(', ')||'선택'}</Text>
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

        <Text style={styles.InfoTitle}>최종 학력</Text>
      <TouchableOpacity 
        style={{ flexDirection:'row', borderColor: '#8F8F8F', borderWidth: 0.4, borderRadius: 10, padding: 15, marginBottom: 15, width: '90%' }}
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


            </View>
    </TouchableWithoutFeedback>
  </ScrollView>
  </KeyboardAvoidingView>

  <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
  <TouchableOpacity style={styles.postnext} onPress={handleResult}>
            <Text style={styles.NextText}>결과보기</Text>
        </TouchableOpacity>


        </SafeAreaView>
    )
}