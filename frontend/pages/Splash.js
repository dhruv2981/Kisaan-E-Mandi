import { Button, StyleSheet, Text, View } from 'react-native';


export default function Splash({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{ flex: 1 }}>Choose how you would use this app</Text>
            <View style={{ flexDirection: "row", width: "100%", justifyContent: "center" }}>
                <Button style={styles.button} title="Login as a farmer"
                    onPress={() => {
                        navigation.navigate('flogin')
                    }}
                />
                <Button style={styles.button} title="Login as a dealer"
                    onPress={() => {
                        navigation.navigate('dlogin')
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: "center"
    },
    button: {
        marginHorizontal : 10,
    }
});
