import { Image, StyleSheet, TouchableHighlight, View } from 'react-native';
import images from '../images';
import globalStyles from '../globals'
import imageStyles from '../imagestyles';
import { Text, Button } from 'react-native-paper';
import { useState } from 'react';


export default function Splash({ navigation, route }) {
    const [option, setOption] = useState("")
    return (
        <View style={styles.container}>
            <View style={{ height: imageStyles.logo.height, width: "100%" }}>
                <Image source={images["logo"]} style={imageStyles.logo} />
            </View>
            <View style={{ flexDirection: "column", alignItems: "center", width: "100%", justifyContent: "center" }}>
                <Text variant='headlineMedium'>Who are you?</Text>
                <TouchableHighlight onPress={() => {
                    setOption("farmer")
                }}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ backgroundColor: option == "farmer" ? "rgba(152, 225, 154, 1)" : "rgba(232, 232, 232, 1)", height: 180, width: 180, alignItems: 'center', justifyContent: 'flex-end' }}>
                            <Image source={images['farmer']} style={{ height: 165, width: 87 }} />
                        </View>
                        <Text variant='titleMedium'>Farmer</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => setOption("dealer")}>
                    <View style={{ alignItems: "center" }}>
                        <View style={{ backgroundColor: option == "dealer" ? "rgba(152, 225, 154, 1)" : "rgba(232, 232, 232, 1)", height: 180, width: 180, alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={images['market']} style={{ width: 156, height: 135 }} />
                        </View>
                        <Text variant='titleMedium'>Dealer</Text>
                    </View>
                </TouchableHighlight>
            </View >
            <Button style={{ width: "80%" }} mode='contained' onPress={() => {
                const user = {
                    ...route.params.user,
                    role: option
                }
                navigation.navigate('workinfo', { user: user })
            }}>
                Next
            </Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});
