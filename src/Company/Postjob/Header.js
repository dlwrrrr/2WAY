import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#0075FF', padding: 10, alignItems: 'center', height: 60 }}>
      <Text style={{ fontSize: 20, color: 'white', marginLeft: 10, fontWeight:'700' }}>포지션 등록</Text>
    </View>
  )
}

export default Header;
