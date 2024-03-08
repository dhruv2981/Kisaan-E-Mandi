import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FarmerLogin, DealerLogin, Splash, DealerRegister, FarmerRegister, FarmerHome } from './pages';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="switch" component={Splash} />
        <Stack.Screen name="flogin" component={FarmerLogin} />
        <Stack.Screen name="fhome" component={FarmerHome} />
        <Stack.Screen name="dlogin" component={DealerLogin} />
        <Stack.Screen name="dregister" component={DealerRegister} />
        <Stack.Screen name="fregister" component={FarmerRegister} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


