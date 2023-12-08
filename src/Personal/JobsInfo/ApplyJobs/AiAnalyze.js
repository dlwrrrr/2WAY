import React,{useState, useEffect} from "react";
import {View,Text, SafeAreaView, Image,TouchableWithoutFeedback,Keyboard, 
    KeyboardAvoidingView, Platform , TextInput, TouchableOpacity, ScrollView} from 'react-native'
import { useNavigation } from "@react-navigation/native";

export default function AiAnalyze({route}){


    const handleApplyJobs = () => {
        navigation.navigate('ApplyJobs', { revisedText: revisedText });
    }
    
    const navigation = useNavigation()

    const { text } = route.params;
    const [inputText, setInputText] = useState(text);
    const [revisedText, setRevisedText] = useState('');
    const texterror = ["선공적", "협법", ];
    const changeTexts = ["성공적", "협업", ];

    // useEffect(() => {
    //     let newText = inputText;
    
    //     texterror.forEach((error, index) => {
    //         newText = newText.replace(new RegExp(error, 'g'), changeTexts[index]);
    //     });
    
    //     setInputText(newText);
    // }, []);


    
    const HighlightedText = ({ text }) => {
        const words = text.split(' ');
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {words.map((word, index) => {
                    let isChanged = false;
                    texterror.forEach((error, i) => {
                        if (word.includes(error)) {
                            word = word.replace(new RegExp(error, 'g'), changeTexts[i]);
                            isChanged = true;
                        }
                    });
                    return isChanged ?
                        <View key={index} style={{backgroundColor: 'yellow', margin: 2}}>
                            <Text>{word + ' '}</Text>
                        </View> :
                        <Text key={index}>{word + ' '}</Text>
                })}
            </View>
        );
    };
    
    
    
    useEffect(() => {
        let newText = inputText;
    
        texterror.forEach((error, index) => {
            newText = newText.replace(new RegExp(error, 'g'), changeTexts[index]);
        });
    
        setRevisedText(newText);
    }, [inputText]);
    
   


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
                <View style={{ borderWidth:0.5, borderColor:'#ccc', borderRadius:5, width:'96%', height:300, padding:10, overflow:'scroll' }}>
                <ScrollView>
                        <HighlightedText text={inputText} />
                    </ScrollView>
                    </View>
                    <View style={{alignItems:'center', justifyContent:'space-around', borderWidth:0.4, borderRadius:5, padding:10, marginTop:20,  }}>
                        <Text style={{marginTop:10, fontSize:20, fontWeight:'800',color:'red'}}>AI결과 : 맞춤법이 잘못되었습니다.</Text>
                        <View style={{}}>
                            {texterror.map((error, i) => (
                                <View style={{flexDirection:'row', justifyContent:'space-around' , marginTop:10}}key={i}>
                                    <Text>{error + " > "}</Text>
                                    <Text>{changeTexts[i]}</Text>
                                </View>
                            ))}
                        </View>

                   </View>
                    <View>
                        <Text style={{marginTop:10, fontSize:20, fontWeight:'800',color:'#0075FF'}}>이렇게 수정해보세요 ! </Text>

                    </View>

                    
                </View>
                
            

                </View>
                </TouchableWithoutFeedback>
                </ScrollView>
                <TouchableOpacity style={{backgroundColor: '#0075FF', padding: 10, alignItems: 'center',justifyContent:'center', height: 50}}
                onPress={handleApplyJobs}>
                        <Text style={{color: 'white', 
                            fontSize: 20, 
                            fontWeight:'600'}}>작성완료</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </SafeAreaView>
    )
}