import { useState } from 'react';
import { TextInput, Text, Button } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';


export default function LoginPage({ navigation, route }) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        //will fetch corresponding entry
        navigation.navigate("fhome", { name: ID })
    }
    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Login as a Farmer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Kisan ID' onChangeText={(newText) => setID(newText)} value={ID} />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' onChangeText={(newText) => setPassword(newText)} value={password} />
            <Button onPress={handleLogin} mode='contained' >Login</Button>
            <Button mode='contained' onPress={() => navigation.navigate("fregister")} >New? Register here </Button>
        </View>
    )
}

const styles = StyleSheet.create({

});