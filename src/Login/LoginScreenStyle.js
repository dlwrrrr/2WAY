import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' },

  // logo: { /* 로고 스타일을 정의하세요 */ },

  switchButton: { 
    flexDirection: 'row', 
    borderRadius: 5, 
    overflow: 'hidden' },

  switchItem: { 
    padding: 10, 
    backgroundColor: '#ffffff' },

  selected: {
     backgroundColor: '#FBBC05' },

  switchText: { 
    color: '#000000' },

  selectedText: { 
    color: '#ffffff' },

  input: { 
    borderColor: '#8F8F8F', 
    borderWidth: 1, 
    width: '80%', 
    height: '6%',
    borderRadius: 10,
    padding: 10, 
    margin: 13 },

  loginButton: { 
    backgroundColor: '#0075FF', 
    width: '80%',
    borderRadius: 10,
    height: '6%',
    padding: 10, 
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center' },

  loginButtonText: { 
    color: '#ffffff',
    fontSize: 23, },

  signupLink: { 
    marginTop: 60, },

  signupbutton: {
    color : 'black',
    fontSize : 15,
    fontWeight: 'bold',
  },

  signupcomplete: {
    backgroundColor: '#0075FF', 
    width: '80%', 
    height: 50,
    borderRadius: 10,
    padding:10,
    justifyContent: 'center',
    alignItems:'center',
    marginLeft:40,
    marginTop: 40,

  },
  
  signupcompleteText: {
    color: 'white',
    fontSize : 23,

  }
});
