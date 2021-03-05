import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { profileAuthFetch } from './src/controllers/user';
import { addSession } from './src/stores/userStore/userActions';
import { getData } from './src/controllers/storage';
import { connect } from 'react-redux';
import {
  Login,
  Register,
  Home,
  TokenScreen,
  Boilerplate,
  Account,
  Deposit,
  Transfer,
  Contact
} from './src/screens';
import { Preload } from './src/components';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      isLogin: false
    }
  }

  handleIsLogin(value) {
    console.log('handle', value);
    this.state.setState({ isLogin: value });
  }

  componentDidMount(){
    getData()
    .then(responseToken => {
      // if(!responseToken) return new Error();
      return profileAuthFetch(responseToken);
    })
    .then(responseProfile => {
      if(responseProfile.user.role == "client"){
        this.setState({ isLogin: true });
        this.props.addSession(responseProfile.user);
      }
      
    })
    this.setState({ mounted: true });
  }

  render(){
    console.log(this.state.isLogin)
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {!this.state.mounted ?
              (
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Preload"
                  component={Preload}
                />
              )
              :(
                <>
                  {!this.state.isLogin ?
                    (
                    <>
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Login"
                        component={Contact}
                        initialParams={{ handleIsLogin: (value) => this.setState({ isLogin: value }) }}
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
                    </>
                  )
                  :(
                    <>
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Home"
                        component={Home}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Account"
                        component={Account}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Transfer"
                        component={Transfer}
                      />
                      <Stack.Screen
                        options={{ headerShown: false }}
                        name="Deposit"
                        component={Deposit}
                      />
                    </>
                  )
                }
              </>
              )
            }
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const mapActionsToProps = (dispatch) => {
  return {

    addSession: (user) => dispatch(addSession(user)),

  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userStore
  };
};

// export default App;
export default connect(mapStateToProps, mapActionsToProps)(App);
