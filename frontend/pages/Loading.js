import React from 'react'
import images from '../images'
import imageStyles from '../imagestyles'
import { View, StyleSheet, Image } from 'react-native'

export default function Loading({ navigation }) {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.navigate('register')
        }
            , 3000)
    }, [])
    return (
        <View style={imageStyles.background}>
            <Image source={images["logo"]} style={imageStyles.logo} />
            <Image source={images['farmer']} style={imageStyles.farmer} />
            <Image source={images['barn']} style={imageStyles.barn} />
            <Image source={images['mound']} style={imageStyles.mound} />
            <Image source={images['stackshort']} style={imageStyles.stackshort} />
            <Image source={images['stacktall']} style={imageStyles.stacktall} />
        </View>
    )
}