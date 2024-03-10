import { StyleSheet, Text, View } from 'react-native';
import { AppState } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, Loading, Register, WorkInfo, Login, FarmerDashboard, DealerDashboard } from './pages';
import { SWRConfig } from 'swr'
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

    <SWRConfig
      value={{
        provider: () => new Map(),
        isVisible: () => { return true },
        initFocus(callback) {
          let appState = AppState.currentState

          const onAppStateChange = (nextAppState) => {
            /* If it's resuming from background or inactive mode to active one */
            if (appState.match(/inactive|background/) && nextAppState === 'active') {
              callback()
            }
            appState = nextAppState
          }

          // Subscribe to the app state change events
          const subscription = AppState.addEventListener('change', onAppStateChange)

          return () => {
            subscription.remove()
          }
        }
      }}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="loading" component={Loading} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="fdashboard" component={FarmerDashboard} />
            <Stack.Screen name="ddashboard" component={DealerDashboard} />
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="switch" component={Splash} />
            <Stack.Screen name="workinfo" component={WorkInfo} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SWRConfig >


  );
}


