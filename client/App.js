import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './Redux/Store';
import Menu from './screens/Menu';
import RegisterScreen from './screens/RegisterScreen';
import TokenScreen from './screens/TokenScreen';
import Register1 from './screens/Register1';
import Register2 from './screens/Register2';
import EmailSent from './screens/EmailSent';
import AccountScreen from './screens/AccountScreen';

const Stack = createStackNavigator();
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#00AACF',
    dark: 'blue',
    secondary: '#E52B2B',
  },
};


export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Menu"
              component={Menu}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register"
              component={RegisterScreen}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="EmailSent"
              component={EmailSent}
            />
            <Stack.Screen
              options={{ headerShown: true }}
              name="Register1"
              component={Register1}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Register2"
              component={Register2}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="AccountScreen"
              component={AccountScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#1954C2',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});
