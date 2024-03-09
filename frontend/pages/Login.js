import React, { useState } from 'react'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import images from '../images'
import { View, Image } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { authURL } from '../urls'
import axios from 'axios'

export default function Login({navigation}) {
    const [ID, setID] = useState("")
    const [passwd, setPasswd] = useState("")
    const handleLogin = async () => {
        //navigate to dashboard after logging in and checking whether farmer or dealer
        if (ID != "" && passwd != "") {
            //login and navigate accordingly 
            const response = (await axios.post(authURL, JSON.stringify({ id: ID, password: passwd }), { headers: { "Content-type": "application/json" } })).data
            localStorage.setItem("id", response.id)
            localStorage.setItem("username", response.username)
            localStorage.setItem("city", response.city)
            localStorage.setItem("state", response.state)
            localStorage.setItem("dealer_type", response.dealer_type)
            localStorage.setItem("role", response.role)
            navigation.navigate(response.role === "dealer" ? "ddashboard" : "fdashboard", {name : response.username, city : response.city, dealer_type : response.dealer_type})
        }
    }
    return (
        <View style={globalStyles.container}>
            <Image source={images['logo']} style={imageStyles.logo} />
            <View style={{ justifyContent: "space-around", width: "100%", alignItems: "center" }}>
                <Text variant='headlineMedium'>Log in to your account</Text>
                <TextInput style={{ width: "80%", backgroundColor: "#ffff" }} value={ID} onChangeText={(txt) => setID(txt)} placeholder='Kisaan ID/Aadhar Number'></TextInput>
                <TextInput style={{ width: "80%", backgroundColor: "#ffff" }} value={passwd} onChangeText={(txt) => setPasswd(txt)} placeholder='Password'></TextInput>
                <Button style={{ marginTop: 12 }} mode='contained' onPress={handleLogin}>Login</Button>
            </View>
        </View>
    )
}


