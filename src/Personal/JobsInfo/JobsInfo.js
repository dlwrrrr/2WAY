import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, FlatList, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function JobsInfo(){

    const navigation = useNavigation()

    const [favoriteJobs, setFavoriteJobs] = useState(false);
    const toggleFavorite = (id) => {
        setFavoriteJobs({
            ...favoriteJobs,    
            [id]: !favoriteJobs[id]
        });
    };

    const jobs = [
        {
            id: 1,
            logo: 'https://i.ibb.co/ccNpn8D/logo01.jpg',
            companyName: '(주)엠포스',
            title: '백엔드 개발자 경력직 채용',
            dday:'D-6',
            experienceLevel: '신입',
            educationLevel: '대학교졸업(4년)',
        },
        {
            id: 2,
            logo: 'https://i.ibb.co/7tF88JC/logo02.png',
            companyName: '(주)컨트롤에이',
            title: 'JAVA 개발자 모집',
            dday:'D-11',
            experienceLevel: '경력',
            educationLevel: '대학교졸업(4년)',
        },
        {
            id: 3,
            logo: 'https://blog.kakaocdn.net/dn/bgbn4B/btqwQkVHqgl/h1te0fy07UbzgMgt5AUkFK/img.jpg',
            companyName: '현대자동차(주)',
            title: '현대자동차 경력직 채용 IT 부문',
            dday:'D-9',
            experienceLevel: '신입',
            educationLevel: '졸업학력무관',
        },
        {
            id: 4,
            logo: 'https://image.rocketpunch.com/company/14569/mirakomaiaenssi_logo_1615092090.PNG?s=400x400&t=inside',
            companyName: '(주)미라콤아이앤씨',
            title: '2023 하반기 신입사원 채용',
            dday:'D-6',
            experienceLevel: '신입',
            educationLevel: '졸업학력무관',
        },
        {
            id: 5,
            logo: 'https://compphoto.incruit.com/2021/10/%EC%BA%A0%ED%95%91%EC%A0%9C%EA%B5%AD%EB%A1%9C%EA%B3%A0.jpg',
            companyName: '(주)미라콤아이앤씨',
            title: '앱개발(Flutter) / 서비스기획(PO) 각 분야 채용',
            dday:'D-6',
            experienceLevel: '신입',
            educationLevel: '졸업학력무관',
        },


        
    ];

    return(
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            {/* 헤더 */}
            <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>채용정보</Text>
            </View>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10,}} />
            <Text style={{marginLeft:10}}>검색결과 :5 건</Text>
            <View style={{height: 1, backgroundColor: '#ccc', marginVertical: 10}} />
            
            <FlatList
                data={jobs}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('JobsDetail', { job: item, isFavorite: favoriteJobs[item.id] })}>
                        <View style={{ flexDirection:'row', alignItems:'center', justifyContent: 'space-between', marginBottom:20 }}>
                            <View style={{ flexDirection:'row', alignItems:'center', flex: 1 }}>
                                <Image 
                                    source={{uri: item.logo}} 
                                    style={{width: '20%', height: 20, marginLeft:10,}} 
                                    resizeMode="contain"
                                />
                                <View style={{ marginLeft:20,  }}>
                                    <Text style={{fontSize:14, fontWeight:'800', color:'#0075FF'}}>{item.companyName}</Text>
                                    <Text style={{fontSize:14, fontWeight:'800', marginTop:5}}>{item.title}</Text>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={{fontSize:10, color:'gray'}}>{item.dday}</Text>
                                        <Text style={{fontSize:10, color:'gray'}}> | </Text>
                                        <Text style={{fontSize:10, color:'gray'}}>{item.experienceLevel}</Text>
                                        <Text style={{fontSize:10, color:'gray'}}> | </Text>
                                        <Text style={{fontSize:10, color:'gray'}}>{item.educationLevel}</Text>
                                    </View>
                                </View>
                                
                            </View>
                            <TouchableOpacity style={{marginRight:5}}onPress={() => toggleFavorite(item.id)}>
                                {favoriteJobs[item.id] ? (
                                    <Ionicons name="heart" size={20} color="pink" />
                                ) : (
                                    <Ionicons name="heart-outline" size={20} color="black" />
                                )}
                            </TouchableOpacity>
                        </View>
                        <View style={{height: 1, backgroundColor: '#ccc', marginBottom:10}} />
                    </TouchableOpacity>
                    
                )}
                
            />
        </SafeAreaView>
    )
}
