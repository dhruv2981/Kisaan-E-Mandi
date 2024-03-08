import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { useState } from 'react';


export default function LoginPage({navigation, route}) {
    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {

    }
    return (
        <View style={styles.container}>
            <Text>Login as a Dealer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Dealer ID' onChangeText={(newText) => setID(newText)} defaultValue='' />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' onChangeText={(newText) => setPassword(newText)} defaultValue='' />
            <Button onPress={handleLogin} title='Login'/>
            <Button title='New? Register here' onPress={() => navigation.navigate("dregister")} />
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