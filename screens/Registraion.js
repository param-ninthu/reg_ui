import { StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react'
import InputField from '../components/inputField'
import ButtonField from '../components/buttonField'

const RegistraionForm = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.headingContainer}> Signup </Text>

        <Image 
        source={require('../assets/images/code.gif')}
        style={styles.imageContainer}
        />

      <InputField
        // value={userName}
        placeholder="Username"
        autoCorrect={false}
        type="user"
      />
      <InputField
        // value={userName}
        placeholder="Password"
        autoCorrect={false}
        type="lock"
        secureTextEntry={true}
      />
      <InputField
        // value={userName}
        placeholder="ConfirmPassword"
        autoCorrect={false}
        type="lock"
        secureTextEntry={true}
      />

      <ButtonField buttonTitle="SignUp" />
    </View>
  )
}

export default RegistraionForm

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    headingContainer:{
        fontSize:30,
        fontWeight:'bold',
        color:'#233E8B',
        marginBottom:10
    },
    imageContainer:{
        height: 290,
        width: 290,
        marginBottom:20
    }
})