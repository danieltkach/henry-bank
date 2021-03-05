import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import RegisterFirstView from './RegisterFirstView';
import { Background } from '../../../components';
import { registerUserFetch } from '../../../controllers/user';
import styles from './../styles';

export default function RegisterFirstContainer({ navigation }) {
  const [errorHandle, setErrorHandle] = useState('');

  const handleFinalSubmit = (e, inputs) => {
    // e.preventDefault()
    console.log(inputs)
    setErrorHandle('');

    if (inputs.password !== inputs.confirmPassword) {
      setErrorHandle('Contraseñas diferentes');
    }else {
      registerUserFetch(inputs)
      .then(responseUser => {
        navigation.navigate('Register2', {email: responseUser.user.email});
      })
      .catch(err => {
        console.log(err);
      });
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterFirstView handleFinalSubmit={handleFinalSubmit} navigation={navigation} errorHandle={errorHandle}/>
      </View>
    </SafeAreaView>
  );
};
