    import React,{useState} from "react";
    import {View,Text, SafeAreaView, Image,TouchableWithoutFeedback,Keyboard, 
        KeyboardAvoidingView, Platform , TextInput, TouchableOpacity, ScrollView} from 'react-native'
    import { useNavigation } from "@react-navigation/native";


    export default function Analyze(){


        const [text, setText] = useState('');
        const navigation = useNavigation()


        const handleAianalyze = () => {
            navigation.navigate('AiAnalyze', { text });
        }

        const handleChangeText = (input) => {
            setText(input);
        }
    

    


        return(
            <SafeAreaView style={{backgroundColor:'white', flex:1}}>
            
                <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
                    <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>Ai 자기소개서</Text>
                </View>
                <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
                    <ScrollView>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                <View style={{ flexDirection:'row' , marginTop:20}}>
                <Image 
                source={{uri: 'https://blog.kakaocdn.net/dn/bgbn4B/btqwQkVHqgl/h1te0fy07UbzgMgt5AUkFK/img.jpg'}} 
                style={{width: '20%', height: 20, marginLeft:10,}} 
                resizeMode="contain"/>
                <Text style={{fontSize:14, fontWeight:'800', marginLeft:10}}>현대자동차(주)</Text>
                </View>
                <View style={{height: 1, backgroundColor: '#ccc', marginTop:10}}/>
                <View style={{borderWidth:0.5, marginTop:15,width:'90%', marginLeft:20, height:90,
                padding:10,paddingLeft:10,justifyContent:'center', borderRadius:10, borderColor:'#ccc', flexDirection:'row',paddingTop:30 }}>
                    <Text style={{fontSize:15,color:'#FBBC05', fontWeight:'700'}}>Q.</Text>
                    <Text style={{ width:'80%', fontSize:15}}>가장 열정/도전적으로 임했던 일과 그 일을 통해서 이룬 것에 대해 상세히 기재하여 주십시오.</Text>
                </View>

                <View style={{padding:10,marginTop:15,marginLeft:15,}}>
                <Text style={{  fontSize:20, fontWeight:'800', marginBottom:10 }}>자기소개서 입력</Text>
                <TextInput style={{borderWidth:0.5, borderColor:'#ccc', borderRadius:5,width:'96%', height:400, padding:10}}placeholder="최소 200자 이상 최대 1000자"
                multiline={true}
                numberOfLines={4}
                onChangeText={handleChangeText}
                value={text}
                >

                </TextInput>
                </View>
                
            

                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
                <TouchableOpacity style={{backgroundColor: '#0075FF', padding: 10, alignItems: 'center',justifyContent:'center', height: 50}}
                onPress={handleAianalyze}>
                        <Text style={{color: 'white', 
                            fontSize: 20, 
                            fontWeight:'600'}}>AI 분석하기</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
    }