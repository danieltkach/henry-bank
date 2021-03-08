import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView';
import { Background, Alert } from '../../components';
import { loginUserFetch, profileAuthFetch } from '../../controllers/user';
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
    loginUserFetch(inputs)
    .then(responseLogin =>  {
      token = responseLogin.token;
      return profileAuthFetch(responseLogin.token);
    })
    .then(responseUser => {
      if (responseUser.user.role === 'guest') {
        if (responseUser.user.codeSecurity === 'active') {
          navigation.navigate('Register3', { userId: responseUser._id });
        } else {
          navigation.navigate('Register2', {email: responseUser.user.email});
        }

      } else if(responseUser.user.role === "client"){
        storeData(token);
        dispatch({type: "ADD_SESSION", payload: responseUser.user});
        handleIsLogin('sessionOn');
      }
    })
    .catch(err => {
      handleAlert('Usuario no identificado', 'error');
    });
  }

  console.log(alert)

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
