import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Loading, Register, WorkInfo, Login, FarmerDashboard } from './pages';

const Stack = createNativeStackNavigator();


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgba(18, 129, 0, 1)',
    secondary: 'yellow',
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='loading' component={Loading} />
          <Stack.Screen name='register' component={Register} />
          <Stack.Screen name="switch" component={Splash} />
          <Stack.Screen name='workinfo' component={WorkInfo} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='fdashboard' component={FarmerDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}


