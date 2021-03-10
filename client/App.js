import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { addSession } from './src/stores/userStore/userActions';
import { addAccount } from './src/stores/accountStore/accountActions';
import { profileAuthFetch } from './src/controllers/user';
import { readAccountByIdFetch } from './src/controllers/account';
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
  MyData,
  Contact,
  Transaction,
  Cards
} from './src/screens';
import { Preload } from './src/components';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mounted: false,
      isLogin: 'sessionDefault'
    };
  }

  handleIsLogin(value) {
    this.setState({ isLogin: value });
  }

  componentDidMount() {
    this.setState({ isLogin: 'sessionDefault' });

    getData()
      .then((responseToken) => {
        if (!responseToken) {
          // this.setState({ isLogin: 'sessionOff' });
        } else {
          return profileAuthFetch(responseToken);
        }
      })
      .then((responseProfile) => {
        if (responseProfile.user.role) {
          this.props.addSession(responseProfile.user);
          return readAccountByIdFetch(responseProfile.user.accounts[0]);
        }
      })
      .then((responseAccount) => {
        // this.props.addAccount(responseAccount.account);
        this.setState({ isLogin: 'sessionOn' });
      })
      .catch((err) => {
        this.setState({ isLogin: 'sessionOff' });
      });
    this.setState({ mounted: true });
  }

  render() {
    console.log(this.props);
    return (
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {this.state.isLogin === 'sessionOff' && (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Login"
                  component={Login}
                  initialParams={{
                    handleIsLogin: (value) => this.setState({ isLogin: value })
                  }}
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
            )}
            {this.state.isLogin === 'sessionOn' && (
              <>
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Account"
                  component={Account}
                  initialParams={{
                    handleIsLogin: (value) => this.setState({ isLogin: value })
                  }}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Home"
                  component={Home}
                  initialParams={{
                    handleIsLogin: (value) => this.setState({ isLogin: value })
                  }}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Contact"
                  component={Contact}
                  initialParams={{
                    handleIsLogin: (value) => this.setState({ isLogin: value })
                  }}
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
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="MyData"
                  component={MyData}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Cards"
                  component={Cards}
                />
                <Stack.Screen
                  options={{ headerShown: false }}
                  name="Transaction"
                  component={Transaction}
                />
              </>
            )}
            {this.state.isLogin === 'sessionDefault' && (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Preload"
                component={Preload}
              />
            )}
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
    addAccount: (account) => dispatch(addAccount(account)),
    addSession: (user) => dispatch(addSession(user))
  };
};

const mapStateToProps = (state) => {
  return {
    user: state.userStore,
    account: state.accountStore
  };
};

// export default App;
export default connect(mapStateToProps, mapActionsToProps)(App);
