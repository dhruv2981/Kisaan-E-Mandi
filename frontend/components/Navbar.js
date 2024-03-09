import React from 'react'
import images from '../images'
import { Appbar, List } from 'react-native-paper'
import { View, StyleSheet, Image } from 'react-native'


export default function Navbar({navigator}) {
    return (
        <Appbar.Header mode='small' style={{flexDirection : "row", justifyContent : "space-between", backgroundColor : "#66A96B"}}>
            <>
            <Appbar.BackAction onPress={() => {}} />
            <Appbar.Action icon="hamburger"/>
            <Image source={images['logo']} style={navStyles.logo}/>
            </>
            <>
            <Image source={images['profile']} style={navStyles.profile} />
            </>
        </Appbar.Header>
    )
}
const navStyles = StyleSheet.create({
    navbar: {
        position: "sticky",
        width: "100%",
        backgroundColor: "",
    },
    logo: {
        position: "absolute",
        top: 4,
        left: 55,
        width: 128,
        height: 46,
    },
    profile : {
        position : "absolute",
        width : 40,
        height : 40,
        top : 7,
        left : 374,
    }
})