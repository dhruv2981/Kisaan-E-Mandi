import React, { useState } from 'react'
import globalStyles from '../globals'
import images from '../images'
import imageStyles from '../imagestyles'
import { View, StyleSheet, Image } from 'react-native'
import { TextInput, Button, Text } from 'react-native-paper'

export default function Register({navigation}) {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [ID, setID] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")

    const handleSubmit = () =>
    {   
        if(fname != "" && lname != "" && ID != "" && city != "" && state != "")
        {
            //forward parameters to next route
            const user = {
                first_name : fname,
                last_name : lname,
                id : ID,
                city : city,
                state : state
            }
            navigation.navigate('switch', {user : user})
        }
    }
    return (
        <View style={globalStyles.container}>
            <Image source={images['logo']} style={imageStyles.logo} />
            <View style={{width : "100%", justifyContent: "space-around", alignItems: "center" }}>
                <Text variant='headlineMedium'>Personal Information</Text>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>First Name</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={fname} onChangeText={(txt) => setFname(txt)} />
                </View>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>Last Name</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={lname} onChangeText={(txt) => setLname(txt)} />
                </View>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>City</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={city} onChangeText={(txt) => setCity(txt)} />
                </View>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>State</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={state} onChangeText={(txt) => setState(txt)} />
                </View>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>Kisaan ID/Aadhar</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={ID} onChangeText={(txt) => setID(txt)} />
                </View>
                <Button style={{width : "80%", marginTop : 16}} onPress={handleSubmit} mode='contained'>Next</Button>
                <View style={{flexDirection : "row"}}>
                    <Text style={{padding : 12, fontSize : 12}}>Already have an account? </Text>
                    <Button style={{height : 10, fontSize : 10}} compact onPress={() => navigation.navigate('login')}>Login</Button>
                </View>
            </View>
        </View>
    )
}



