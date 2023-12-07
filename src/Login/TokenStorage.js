import AsyncStorage from '@react-native-async-storage/async-storage';

// 토큰 저장
const storeToken = async (value) => {
  try {
    await AsyncStorage.setItem('@token', value);
  } catch (e) {
    // 저장 에러
    console.error(e);
  }
};

// 토큰 읽기
const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token');
    if (value !== null) {
      // 값이 정상적으로 읽혀짐
      return value;
    }
  } catch (e) {
    // 읽기 에러
    console.error(e);
  }
};
