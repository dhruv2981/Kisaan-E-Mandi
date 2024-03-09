import React, { useState } from 'react'
import images from '../images'
import imageStyles from '../imagestyles'
import globalStyles from '../globals'
import { Image, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'


export default function WorkInfo({ navigation, route }) {
    const [info, setInfo] = useState("")
    const handleSubmit = () => {
        //post here
        navigation.navigate('login')
    }
    return (
        <View style={{ ...globalStyles.container, maxHeight : 937}}>
            <Image source={images['logo']} style={imageStyles.logo} />
            <View style={{ alignItems: "center", width : "100%" }}>
                <Text variant='headlineMedium'>Work Information</Text>
                <View style={globalStyles.formField}>
                    <Text style={globalStyles.formLabels}>{route.params.user.role === "farmer" ? "Preference" : "Available Storage"}</Text>
                    <TextInput style={globalStyles.textInput} mode='outlined' value={info} onChangeText={(txt) => setInfo(txt)} />
                </View>
                <Button onPress={handleSubmit} style={{ width: "80%" }} mode='contained'>Done</Button>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ padding: 12, fontSize: 12 }}>Already have an account? </Text>
                    <Button style={{ height: 10, fontSize: 10 }} compact onPress={() => navigation.navigate('login')}>Login</Button>
                </View>
            </View>
            <Image source={images['barn']} style={bottomStyles.barn} />
            <Image source={images['mound']} style={bottomStyles.mound} />
            <Image source={images['tractor']} style={bottomStyles.tractor} />
        </View>
    )
}

const bottomStyles = {
    barn: {
        zIndex: 0,
        position: "absolute",
        width: 216,
        height: 181,
        top: 668,
        left: -11
    },
    mound: {
        height: 150,
        width: 1087,
        zIndex: -1,
        position: "absolute",
        top: 830,
        left: -379,
    },
    tractor: {
        height: 216,
        width: 274,
        zIndex: 1,
        position: "absolute",
        top: 681,
        left: 156
    }
}