import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput, Text, Button  } from 'react-native-paper';


export default function LoginPage({ navigation, route }) {

    const [ID, setID] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = () => {
        navigation.navigate('dlogin')
    }

    return (
        <View style={styles.container}>
            <Text variant='displayMedium'>Register as a Farmer</Text>
            <TextInput style={{ height: 40 }} placeholder='Enter your Dealer ID' onChangeText={(newText) => setID(newText)} value={ID} />
            <TextInput style={{ height: 40 }} placeholder='Enter your password' onChangeText={(newText) => setPassword(newText)} value={password} />
            <TextInput style={{ height: 40 }} placeholder='Re enter your password' onChangeText={(newText) => setConfirm(newText)} value={confirm} />
            <Button
                onPress={handleSubmit}
                mode='contained'
            >
                Register
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