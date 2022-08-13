import { StyleSheet, Text, View , TextInput} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';

import React from 'react'

import { wHeight ,wWidth} from '../utils/dimension';

const InputField = ({type , labelValue,Username , ...rest}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.iconStyle}>
            <AntDesign name={type} size={25} color="#1EAE98"/>
      </View>
      <TextInput
      style={styles.input}
        value={labelValue}
        numberOfLines={1}
        placeholder={Username}
        placeholderTextColor="#1EAE98"
        {...rest}
      />
    </View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputContainer:{
        marginTop:5,
        marginBottom:10,
        width: wWidth/1.4,
        borderRadius:5,
        borderWidth:1,
        borderColor:'#1EAE98',
        height: wHeight/15,
        flexDirection:'row',
        backgroundColor:'#fff',
        alignItems:'center'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
      },
      input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
      },
      inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: wWidth / 1.5,
        height: wHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
      },
})