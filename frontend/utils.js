import AsyncStorage from '@react-native-async-storage/async-storage';
import SharedPreferences from 'react-native-shared-preferences'


export const checkLoggedIn = async (navigator) => {
    const id = await AsyncStorage.getItem("id")
    const username = await AsyncStorage.getItem("username")
    if(!id || !username)
    {
        console.log("nope")
        navigator.navigate("login")
    }
}