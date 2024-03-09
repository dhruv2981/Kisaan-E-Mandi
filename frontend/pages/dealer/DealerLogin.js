import { StyleSheet, View  } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { useState } from 'react';


export default function LoginPage({ navigation, route }) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {

    }
    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Login as a Dealer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Dealer ID' onChangeText={(newText) => setID(newText)} value={ID} />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' onChangeText={(newText) => setPassword(newText)} value={password} />
            <Button onPress={handleLogin} mode='contained'>Login</Button>
            <Button mode='contained' onPress={() => navigation.navigate("dregister")} >
                New? Register here.
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});