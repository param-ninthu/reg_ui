import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { wHeight ,wWidth} from '../utils/dimension';


const ButtonField = ({buttonTitle, ...rest}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}> {buttonTitle} </Text>
    </TouchableOpacity>
  )
}

export default ButtonField

const styles = StyleSheet.create({
    buttonContainer : {
        marginTop:10,
        width: wWidth/1.4,
        height: wHeight/15,
        backgroundColor:'#233E8B',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
    },

    buttonText :{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Lato-Regular'
    }
})