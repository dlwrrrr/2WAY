import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    gotoprofileuploadbutton: {
        backgroundColor: '#0075FF', 
        width: '60%', 
        height: 50,
        borderRadius: 10,
        padding:10,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,},

    gotoprofileuploadText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 23,
    },
    goHomeButton:{
        backgroundColor: 'white', 
        width: '60%', 
        height: 50,
        borderRadius: 10,
        padding:10,
        justifyContent: 'center',
        alignItems:'center',
        marginTop: 20,
    },
    goHomeText:{
        fontWeight: '700',
        fontSize: 23,
    },
    InfoInputBox: {
        borderColor: '#8F8F8F', 
        borderWidth: 1, 
        width: '90%', 
        height: 50,
        borderRadius: 10,
        padding:15,
        marginBottom:15,
      },
    InfoTitle:{
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
    },
    ImageInput:{
        borderWidth:1,
        borderColor: '#8F8F8F',
        borderRadius:6,
        width:'55%',
        height: 120,
        padding: 10,
        alignItems: 'center'},
        
    NextButton:{
        backgroundColor: '#0075FF',
        padding: 10,
        marginLeft:19,
        borderRadius: 5, 
        alignItems: 'center',
        justifyContent:'center', 
        width: '90%',
        height: 50},

    NextText:{
        color: 'white', 
        fontSize: 20, 
        fontWeight:'600'},

    SelectedScreen:{
        borderColor: '#8F8F8F', 
        borderWidth: 1, 
        width: '90%', 
        height: 50,
        borderRadius: 10,
        padding:15,
        marginBottom:15
    },
    modalContent: {
        position: 'absolute',
        bottom: 0,
        left: '5%',  // 좌우 여백 추가하여 모달의 너비 조정
        right: '5%',  // 좌우 여백 추가하여 모달의 너비 조정
        backgroundColor: 'ccc',  // 배경 색상 변경
        padding: 20,  // 패딩 추가
        height:'50%',
        borderRadius: 10,  // 모달의 모서리를 둥글게
        justifyContent: 'center',
    },
    removeIcon: {
        color: '#0075FF',
        fontSize: 18,
        marginLeft: 10,
    },
    selectedItemBox: {
        flexDirection: 'row',
        backgroundColor: '#E6F2FF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    selectedItem: {
        backgroundColor: '#0075FF',
        color:'black',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#0075FF',
        borderWidth: 1,
    }
        
    



 
});
