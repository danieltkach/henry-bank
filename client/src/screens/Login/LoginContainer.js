import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView';
import { Background, Alert } from '../../components';
import { loginUserFetch, profileAuthFetch } from '../../controllers/user';
import { readAccountByIdFetch } from '../../controllers/account';
import { storeData } from '../../controllers/storage';
import { useDispatch } from 'react-redux';
import styles from './styles';


export default function LoginContainer({ navigation, route }) {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const { handleIsLogin } = route.params;
  const [alert, setAlert] = useState({
    message: '',
    state: false,
    type: ''
  });

  const handleAlert = (message, type) => {
    let timer
    if (alert.state === false) {
      setAlert({ message, state: true, type});
      timer = setTimeout(() => {
        setAlert({ message, state: false, type});
      }, 3000);
    }
  }

  const handleFinalSubmit = inputs => {
    let token;
    let user;

    loginUserFetch(inputs)
    .then(responseLogin =>  {
      token = responseLogin.token;
      return profileAuthFetch(responseLogin.token);
    })
    .then(responseUser => {
      user = responseUser.user;

      if (responseUser.user.role === 'guest') {
        if (responseUser.user.codeSecurity === 'active') {
          navigation.navigate('Register3', { userId: responseUser.user._id });
        } else {
          navigation.navigate('Register2', {email: responseUser.user.email});
        }

      } else if(responseUser.user.role === "client"){
        storeData(token);
        console.log('ACCOUNT', user.accounts[0]);
        dispatch({type: "ADD_SESSION", payload: responseUser.user});
        return readAccountByIdFetch(user.accounts[0]);
      }
    })
    .then((responseAccount) => {
      dispatch({type: "ADD_ACCOUNT", payload: responseAccount.account});
      handleIsLogin('sessionOn');
    })
    .catch(err => {
      handleAlert('Usuario no identificado', 'error');
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Alert label={alert.message} state={alert.state} type={alert.type} handleAlert={handleAlert} />
      <View style={styles.container}>
        <LoginView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
