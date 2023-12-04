import React from "react";
import {View, Text, TextInput} from 'react-native'
import styles from '../Style'

const InfoInput = ({ title, placeholder, onChangeText, keyboardType, value })=>{
    return(
        <View>
        <Text style={styles.InfoTitle}>{title}</Text>
            <TextInput
            style={styles.InfoInputBox}
            placeholder={placeholder}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            value={value}
            />
        </View>
    )
}

export default InfoInput;