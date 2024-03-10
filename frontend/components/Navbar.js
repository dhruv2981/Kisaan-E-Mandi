import React, { useState } from 'react'
import images from '../images'
import { Appbar, List, Menu, Button } from 'react-native-paper'
import { View, StyleSheet, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Navbar({ navigatior, setSelected }) {
    const [ham, setHam] = useState(false)
    const handleHamburger = () => {
        setHam(!ham)
    }
    const handleLogout = async () => {
        await AsyncStorage.clear()
        navigatior.navigate("login")
    }
    return (
        <Appbar.Header mode='small' style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#66A96B" }}>
            <>
                <Menu
                    visible={ham}
                    onDismiss={() => setHam(false)}
                    anchor={<Appbar.Action icon="hamburger" onPress={() => setHam(true)} />}
                    anchorPosition='bottom'
                >
                    <Menu.Item style={navStyles.menu} onPress={() => { setSelected("Dashboard") }} title="Dashboard" />
                    <Menu.Item style={navStyles.menu} onPress={() => { setSelected("Your crops") }} title="Your crops" />
                    <Menu.Item style={navStyles.menu} onPress={() => { setSelected("New/Pending Offers") }} title="New/Pending offers" />
                    <Menu.Item style={navStyles.menu} onPress={() => { setSelected("Your deals") }} title="Your deals" />
                    <Menu.Item style={navStyles.menu} onPress={handleLogout} title="Logout" />
                </Menu>
                <Appbar.Action icon="hamburger" onPress={handleHamburger} />
                <Image source={images['logo']} style={navStyles.logo} />
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
    profile: {
        position: "absolute",
        width: 40,
        height: 40,
        top: 7,
        left: 374,
    },
    menu: {
        backgroundColor: "#66A96B",
    },
})