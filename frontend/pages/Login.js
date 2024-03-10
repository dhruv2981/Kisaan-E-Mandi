import React, { useState } from 'react'
import globalStyles from '../globals'
import imageStyles from '../imagestyles'
import images from '../images'
import { View, Image } from 'react-native'
import { Text, TextInput, Button } from 'react-native-paper'
import { authURL } from '../urls'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
    const [ID, setID] = useState("")
    const [passwd, setPasswd] = useState("")
    const handleLogin = async () => {
        //navigate to dashboard after logging in and checking whether farmer or dealer
        await AsyncStorage.clear();
        if (ID != "" && passwd != "") {
            //login and navigate accordingly 
            const response = (await axios.post(authURL, JSON.stringify({ id: ID, password: passwd }), { headers: { "Content-type": "application/json" } })).data
            setID("")
            setPasswd("")
            await AsyncStorage.setItem("id", response.id)
            await AsyncStorage.setItem("username", response.username)
            await AsyncStorage.setItem("city", response.city)
            await AsyncStorage.setItem("state", response.state)
            await AsyncStorage.setItem("dealer_type", response.dealer_type)
            await AsyncStorage.setItem("role", response.role)
            navigation.navigate(response.role === "dealer" ? "ddashboard" : "fdashboard", {id : response.id, name : response.username, city : response.city, dealer_type : response.dealer_type})
        }
    }
    return (
        <View style={globalStyles.container}>
            <Image source={images['logo']} style={imageStyles.logo} />
            <View style={{ justifyContent: "space-around", width: "100%", alignItems: "center" }}>
                <Text variant='headlineMedium'>Log in to your account</Text>
                <TextInput style={{ width: "80%", backgroundColor: "#ffff" }} value={ID} onChangeText={(txt) => setID(txt)} placeholder='Kisaan ID/Dealer ID'></TextInput>
                <TextInput style={{ width: "80%", backgroundColor: "#ffff" }} value={passwd} onChangeText={(txt) => setPasswd(txt)} placeholder='Password'></TextInput>
                <Button style={{ marginTop: 12 }} mode='contained' onPress={handleLogin}>Login</Button>
            </View>
        </View>
    )
}


