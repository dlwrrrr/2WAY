import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


//Splash 자동으로 사라지는 것 방지
SplashScreen.preventAutoHideAsync();
//Splash screen 2초
useEffect(()=>{
  setTimeout(()=>{
    SplashScreen.hideAsync()
  },2000)
},[])

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Splash test</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
      justifyContent: 'center',
  },
});
