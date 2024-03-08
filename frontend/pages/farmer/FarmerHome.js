import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';


export default function FarmerHome({navigation, route}) {

    return (
        <View style={styles.container}>
            <Text>Welcome, ${route.params.name}</Text>
            <ScrollView style={styles.list}> 
                {
                    //offer data here
                }
                {
                    //deal status here
                }
                {
                    //crop data here
                }
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    list : {
        flex : 1,
        alignItems : "center",
        backgroundColor : "#ffff",
    },
});