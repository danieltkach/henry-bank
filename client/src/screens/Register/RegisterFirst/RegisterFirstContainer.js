import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import RegisterFirstView from './RegisterFirstView';
import { Background } from '../../../components';
import { registerUserFetch } from '../../../controllers/user';
import styles from './../styles';

export default function RegisterFirstContainer({ navigation }) {

  const handleFinalSubmit = async inputs => {
    let error = undefined;
    await registerUserFetch(inputs)
    .then(responseUser => {
      navigation.navigate('Register2', {email: responseUser.user.email});
    })
    .catch(err => {
      error = { email: 'Correo electrónico no disponible' };
      console.log(err);
    });

    return error;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterFirstView handleFinalSubmit={handleFinalSubmit} navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
