import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { connect } from 'react-redux';
import { setSession } from './src/stores/userStore/userActions';
import {
  Home, Login, Menu, Register, TokenScreen, Register1, Register2, EmailSent, Boilerplate, AccountScreen, Deposit
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
    // this.props.setSession()
    this.setState({ mounted: true });
  }

  render(){
    return (
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
                  name="Register1"
                  component={Register.RegisterFirst}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register2"
                  component={Register.RegisterSecond}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register3"
                  component={Register.RegisterThird}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Register4"
                  component={Register.RegisterFourth}
                />


                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Home"
                  component={Home}
                />

                <Stack.Screen
                  options={{ headerShown: false }}
                  name="EmailSent"
                  component={EmailSent}
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
    setSession: () => dispatch(setSession()),
  };
};

const mapStateToProps = state => {
  return {
    user: state.userStore,
  };
};

// export default App;
export default connect(mapStateToProps, mapActionsToProps)(App);
