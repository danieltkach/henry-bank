import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/stores';
import theme from './theme';
import {
  Home, Login, Menu, RegisterScreen, TokenScreen, Register1, Register2, EmailSent, LoginScreen, Boilerplate
} from "./src/screens";


const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer theme={theme}>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Boilerplate"
              component={Boilerplate}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Login"
              component={Login}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
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
