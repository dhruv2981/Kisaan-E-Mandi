import React, {useState} from 'react'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import images from '../images'
import { View, Image } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

export default function Login() {
  const [otpSent, setOtpSent] = useState(false)
  const [ID, setID] = useState("")
  const [otp, setOTP] = useState("")
  const sendOTP = () => {
        //otp logic
        if(ID != "")
        {
            setOtpSent(true)
        }
  }
  const handleLogin = () => {
        //navigate to dashboard after logging in and checking whther farmer or dealer
  }
  return (
    <View style={globalStyles.container}>
        <Image source={images['logo']} style={imageStyles.logo}/>
        <View style={{justifyContent : "space-around", width : "100%", alignItems : "center"}}>
            <Text variant='headlineMedium'>Log in to your account</Text>
            <TextInput style={{width : "80%", backgroundColor : "#ffff"}} value={ID} onChangeText={(txt) => setID(txt) } placeholder='Kisaan ID/Aadhar Number'></TextInput>
            <TextInput style={{width : "80%", backgroundColor : "#ffff"}} value={otp} onChangeText={(txt) => setOTP(txt)} disabled={!otpSent} placeholder='OTP'></TextInput>
            <Button style={{marginTop : 12}} mode='contained' onPress={otpSent ? handleLogin : sendOTP}>{otpSent ? "Login" : "Send OTP"}</Button>
        </View> 
    </View>
  )
}


