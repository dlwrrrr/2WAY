import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const InfoHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: '28%' }}>
      <TouchableOpacity onPress={() => navigation.navigate('CompanyHome')}>
        <AntDesign name="home" size={24} color="white" />
      </TouchableOpacity>
      <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>기업정보</Text>
    </View>
  )
}

export default InfoHeader;
