import { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';


export default function LoginPage({ navigation, route }) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = () => {
        navigation.navigate('flogin')
    }
    return (
        <View style={styles.container}>
            <Text>Register as a Farmer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Kisan ID' onChangeText={(newText) => setID(newText)} defaultValue='' />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' onChangeText={(newText) => setPassword(newText)} defaultValue='' />
            <TextInput style={{ height: 40 }} placeholder='Re enter your password' onChangeText={(newText) => setConfirm(newText)} defaultValue='' />
            <Button
                title='register'
                onPress={handleSubmit}
            />
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