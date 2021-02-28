import React from "react";
import { View } from "react-native";
import LoginView from './LoginView';
import { loginUserFetch } from '../../src/controllers/user';


const LoginContainer = ({ navigation }) => {

  const handleFinalSubmit = inputs => {
    loginUserFetch(inputs)
    .then((responseLogin) =>  {
      navigation.navigate('Home');
    })
    .catch(err => console.log(err));
  }

  return (
    <View>
      <LoginView handleFinalSubmit={handleFinalSubmit} />
    </View>
  );
};

export default LoginContainer;
