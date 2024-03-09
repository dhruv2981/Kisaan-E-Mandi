import { useState } from 'react';
import { TextInput, Text, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';


export default function LoginPage({ navigation, route }) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = () => {
        navigation.navigate('flogin')
    }
    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Register as a Farmer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Kisan ID' value={ID} onChangeText={(newText) => setID(newText)} />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' value={password} onChangeText={(newText) => setPassword(newText)} />
            <TextInput style={{ height: 40 }} placeholder='Re enter your password' value={confirm} onChangeText={(newText) => setConfirm(newText)} />
            <Button
                onPress={handleSubmit}
            >Register</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});