import React, { useEffect, useState } from "react";
import {View, Text, SafeAreaView, TouchableWithoutFeedback, 
    Keyboard, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity, Image, } from 'react-native'
import InfoHeader from "./Component/InfoHeader";
import InfoInput from "./Component/InfoInput";
import * as ImagePicker from 'expo-image-picker'
import styles from './Style'
import { useNavigation } from "@react-navigation/native";



export default function CompanyInfoSetup(){

    const [CompanyName, setCompanyName] = useState('');
    const [CompanyNum, setCompanyNum] = useState('');
    const [CEOname, setCEOname] = useState('');
    const [CompanyIntroduction, setCompanyIntroduction] = useState('');
    const [CompanyLogo, setCompanyLogo] = useState(null);

    
    const navigation=useNavigation();

    useEffect(()=>{
        (async () => {
            if (Platform.OS !== 'web') {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status !== 'granted') {
                    alert('권한이 필요합니다.');
                }
            }
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (result.assets && !result.assets[0].cancelled) {
            setCompanyLogo(result.assets[0].uri);
        }
    };

    const handleNext = () =>{
        navigation.navigate('CompanyInfoSetup2')

    }



    return(
        <SafeAreaView>
          <InfoHeader/>
          <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"} 
                style={{flex: 1}}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <View style={{marginTop:20, marginLeft: 35}}>

                <InfoInput
                title='사업자등록번호'
                placeholder='사업자 등록번호를 입력하세요.'
                onChangeText={setCompanyNum}
                keyboardType='number-pad'
                value={CompanyNum}
                />

                <InfoInput
                title='대표자 이름'
                placeholder='이름을 입력하세요.'
                onChangeText={setCEOname}
                keyboardType='default'
                value={CEOname}/>

                <InfoInput
                title='회사명'
                placeholder='회사명을 입력하세요'
                onChangeText={setCompanyName}
                keyboardType='default'
                value={CompanyName}/>
{/* 소개칸바꿀것 */}
                <InfoInput
                title='회사소개'
                placeholder='내용을 입력하세요.'
                onChangeText={setCompanyIntroduction}
                keyboardType='default'
                value={CompanyIntroduction}/>

                <Text style={styles.InfoTitle}>회사 로고</Text>
                <TouchableOpacity onPress={pickImage} style={[styles.ImageInput, {justifyContent: 'center', alignItems: 'center'}]}>
                    {CompanyLogo && <Image source={{ uri: CompanyLogo }} style={{ width: '110%', height: '120%', borderRadius:5, }} />}
                    {!CompanyLogo && (<Text style={{fontSize: 40}}> + </Text>)}
                    {!CompanyLogo && (
                        <View>
                            <Text style={{fontSize: 16}}> - 사이즈: 148*148px 이상</Text>
                            <Text style={{fontSize: 16}}> -  파일 용량: 10MB 이하</Text>
                        </View>
                    )}
                </TouchableOpacity>
            </View>
            </TouchableWithoutFeedback>
            <View style={{height: 1, backgroundColor: '#8f8f8f', marginVertical: 20}} />

            <TouchableOpacity style={styles.NextButton} onPress={handleNext}>
                <Text style={styles.NextText}>NEXT</Text>
            </TouchableOpacity>
            
          </KeyboardAvoidingView>
          
        </SafeAreaView>
    )
}