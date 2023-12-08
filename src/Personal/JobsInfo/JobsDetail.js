import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
import DetailTopNavi from "./DetailTopNavi";
import styles from '../../Company/Style'





export default function JobsDetail({route}){

    

    const { job, isFavorite } = route.params;

    const handleApplyJob =()=>{
        navigation.navigate('ApplyJobs')
    }

    
    const navigation = useNavigation()
    const [favoriteJobs, setFavoriteJobs] = useState(isFavorite);


    const toggleFavorite = () => {
        setFavoriteJobs(!favoriteJobs);
    };

    
  
    return(
        
        <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
            <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
                <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>채용정보</Text>
            </View>
            <View>
            <ScrollView style={{marginTop:20}} >
                <View style={{ borderWidth:0.3, width:'95%', height:170, marginLeft:10, padding:10, borderRadius:7}}>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:'700', fontSize:17, padding:10}}>{job.companyName}</Text>
                    <TouchableOpacity style={{marginTop:9}}onPress={toggleFavorite}>
                    {favoriteJobs ? (
                        <Ionicons name="heart" size={20} color="pink" />
                    ) : (
                        <Ionicons name="heart-outline" size={20} color="black" />
                    )}
                </TouchableOpacity>    
                </View>
                <View>
                    <Text style={{padding:10, fontSize:20, fontWeight:'700'}}>{job.title}</Text></View> 
                    <View style={{height: 1, backgroundColor: '#ccc', }} />
                    <View style={{flexDirection:'row' ,marginTop:10, }}>
                    <Text style={{padding:2, backgroundColor:'#EBEBEB', marginLeft:10, marginRight:10 }}> # {job.educationLevel} </Text>
                    <Text style={{padding:2, backgroundColor:'#EBEBEB'}}> # 정규직 </Text>
                    </View>
                    <View style={{flexDirection:'row' ,marginTop:10}}>
                    <Text style={{padding:2, backgroundColor:'#EBEBEB', marginLeft:10, marginRight:10 }}> # {job.experienceLevel} </Text>
                    <Text style={{padding:2, backgroundColor:'#EBEBEB', marginLeft:10, marginRight:10 }}> # 서울 </Text>
                    {/*<Text># {job.jobType}</Text>
                    <Text># {job.location}</Text>*/}
                    </View>
                </View>
            </ScrollView>
            </View>

            <DetailTopNavi/>    
            <View>
            <TouchableOpacity style={{backgroundColor: '#0075FF', padding: 10, alignItems: 'center',justifyContent:'center', height: 50}}
             onPress={handleApplyJob}>
    <Text style={styles.NextText}>지원하기</Text>
</TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}