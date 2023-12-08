import React,{useState} from "react";
import {View,Text, SafeAreaView, Image, ScrollView, Alert} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from 'expo-image-picker';
import styles from '../style'

export default function ApplyJobs({route}){

    const navigation = useNavigation()

    const { revisedText } = route.params || {};
   const [inputText, setInputText] = useState(revisedText || '');
    
    const [image, setImage] = useState(null);

    const handleAnalyze = () => {
        navigation.navigate('Analyze');
    }

    const handleStatus=()=>{
        Alert.alert(
            "지원 완료",
            "지원이 완료되었습니다.",
            [
                { text: "OK", onPress: () => navigation.navigate('지원현황') }
            ],
            { cancelable: false }
        );
    }

    const handleAnalyzed = () => {
        setInputText(revisedText);
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

      


    return(
        <SafeAreaView style={{backgroundColor:'white', flex:1}}>

               <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>지원하기</Text>
            </View>

            <View style={{ flexDirection:'row' , marginTop:20}}>
            <Image 
            source={{uri: 'https://blog.kakaocdn.net/dn/bgbn4B/btqwQkVHqgl/h1te0fy07UbzgMgt5AUkFK/img.jpg'}} 
            style={{width: '20%', height: 20, marginLeft:10,}} 
            resizeMode="contain"/>
            <Text style={{fontSize:14, fontWeight:'800', marginLeft:10}}>현대자동차(주)</Text>
            </View>
            <View style={{height: 1, backgroundColor: '#ccc', marginTop:10}}/>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
            <Text style={{marginLeft:10}}>자기소개서 항목</Text>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
            <ScrollView>

            <View style={{justifyContent:'center', alignItems:'center', marginTop:20}}>
            <Text style={{width:'80%', fontSize:17, marginTop:20}}>1. 가장 열정/도전적으로 임했던 일과 그 일을 통해서 이룬 것에 대해 상세히 기재하여 주십시오.</Text>
            </View>
            {inputText ? (
    <View style={{ borderWidth:0.5, borderColor:'#ccc', borderRadius:5, width:'96%', height:300, padding:10, overflow:'scroll' }}>
        <Text>{inputText}</Text>
    </View>
) : (
    <TouchableOpacity style={{backgroundColor: '#0075FF', padding: 10, alignItems: 'center',justifyContent:'center', height: 50, width:'80%', marginLeft:40, borderRadius:20, marginTop:15}} onPress={handleAnalyze}>
        <Text style={{color: 'white', fontSize: 20, fontWeight:'600'}}>자기소개서 작성하러 가기 ></Text>
    </TouchableOpacity>
)}
           
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10, marginTop:20}} />
            <Text style={{marginLeft:10}}>제출 서류</Text>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
            

            <Text style={{fontSize:17, marginTop:20, marginLeft:20, marginBottom:20}}>1. 국가 공인 기술 자격증명서</Text>

            <TouchableOpacity 
        style={{ width: '80%', height: 50, borderColor: '#8F8F8F', borderWidth: 1, borderRadius: 10,
         marginLeft:40, marginBottom: 15, justifyContent: 'center', alignItems: 'center' }}
        onPress={selectImage}
      >
          {image ? <Text style={{ fontSize: 15, justifyContent:'center',alignItems:'center' }}>업로드완료</Text> : <Text style={{ fontSize: 20 , color:'#0075FF', fontWeight:'700'}}>등록하기</Text>}
        </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity style={{backgroundColor: '#0075FF', padding: 10, alignItems: 'center',justifyContent:'center', height: 50}}
             onPress={handleStatus}>
    <Text style={styles.NextText}>지원하기</Text></TouchableOpacity>
            
        </SafeAreaView>
    )
}