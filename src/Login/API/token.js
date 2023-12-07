import AsyncStorage from '@react-native-async-storage/async-storage';

// 토큰 저장
export const storeToken = async (token) => {
  try {
    await AsyncStorage.setItem('@token', token);
    console.log('토큰 저장 성공:', token);
  } catch (e) {
    // 저장 에러
    console.error('토큰 저장 중 오류 발생:', e);
  }
}

// 토큰 불러오기
export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')
    if(value !== null) {
      return value;
    }
  } catch(e) {
    // 읽기 에러
    console.error('토큰 불러오는 중 오류 발생:', e);
  }
}
