import React, {useState} from 'react'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import images from '../images'
import { View, Image } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'

export default function Login() {
  const [ID, setID] = useState("")
  const [passwd, setPasswd] = useState("")
  const handleLogin = () => {
        //navigate to dashboard after logging in and checking whether farmer or dealer
        if(ID != "" && passwd != "")
        {
            //login and navigate accordingly 
        }
  }
  return (
    <View style={globalStyles.container}>
        <Image source={images['logo']} style={imageStyles.logo}/>
        <View style={{justifyContent : "space-around", width : "100%", alignItems : "center"}}>
            <Text variant='headlineMedium'>Log in to your account</Text>
            <TextInput style={{width : "80%", backgroundColor : "#ffff"}} value={ID} onChangeText={(txt) => setID(txt) } placeholder='Kisaan ID/Aadhar Number'></TextInput>
            <TextInput style={{width : "80%", backgroundColor : "#ffff"}} value={passwd} onChangeText={(txt) => setPasswd(txt)} placeholder='Password'></TextInput>
            <Button style={{marginTop : 12}} mode='contained' onPress={handleLogin}>Login</Button>
        </View> 
    </View>
  )
}


