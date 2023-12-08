import React from "react";
import {View, Text, SafeAreaView, Image} from 'react-native'
import styles from '../../Company/Style'

export default function PersonalHome (){

    return (
        <SafeAreaView>
{/* 헤더 */}
        <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
            <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>TWOWAY</Text>
            </View>

            {/*리스트*/}

            <View style={{margin:25}}>
                <Text style={styles.InfoTitle}> 추천공고 </Text>

                <View style={{borderWidth:0.2, height:100, borderRadius:5, backgroundColor:'white', justifyContent:'center', }}>

                    <View style={{ flexDirection:'row', alignItems:'center',}}>
                    <Image 
                        source={{uri: 'https://i.ibb.co/ccNpn8D/logo01.jpg'}} 
                        style={{width: '20%', height: 20, marginLeft:10,}} 
                    />
                     <View style={{ marginLeft:20,  }}>
                    <Text style={{fontSize:14, fontWeight:'800', color:'#0075FF'}}>(주)엠포스</Text>
                    <Text style={{fontSize:14, fontWeight:'800', marginTop:5}}>이메일마케팅과 온라인 마케팅 대행 등</Text>
                    <Text style={{fontSize:10, color:'gray'}}>디데이|경력|학력|지역</Text>
                    </View>
                    </View>
                   
              
                     
                </View>
            </View>
        </SafeAreaView>
    )
}