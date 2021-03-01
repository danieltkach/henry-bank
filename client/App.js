import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { UserController } from './src/controllers';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import store from './src/stores';
import {
  Home, Login, Menu, RegisterScreen, TokenScreen, Register1, Register2, EmailSent, Boilerplate, AccountScreen, Deposit
} from "./src/screens";
import { Preload } from './src/components';


const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      mounted: false
    }
  }

  componentDidMount(){
    console.log(store)
    // await UserController.getAuthFetch(this.props.getUser);
    this.setState({ mounted: true });
  }

  render(){
    return (
      <StoreProvider store={store}>
        <PaperProvider>
        {this.state.mounted ?
          (
            <NavigationContainer>
              <Stack.Navigator>
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
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="AccountScreen"
                  component={AccountScreen}
                />
              </Stack.Navigator>
            </NavigationContainer>
          )
          :(
            <Preload />
          )
        }
        </PaperProvider>
      </StoreProvider>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapActionsToProps = dispatch => {
  return {
    getUser: (user) => dispatch(getUser(user)),
  };
};

const mapStateToProps = state => {
  return {
    user: state.userStore.user,
  };
};

export default App;
