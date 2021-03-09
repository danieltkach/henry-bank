import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import RegisterThirdView from './RegisterThirdView';
import { Background } from '../../../components';
import { updateUserFetch } from '../../../controllers/user';
import { createAccountFetch } from '../../../controllers/account';
import styles from './../styles';


export default function RegisterThirdContainer({ navigation, route }) {
  const { userId } = route.params;

  const validateAge = (date) => {
    let birthdate = new Date(date.split('/')[2], date.split('/')[1], date.split('/')[0]);
    let today = new Date();
    let before = new Date().setFullYear(today.getFullYear() - 122);
    let limit = new Date().setFullYear(today.getFullYear() - 18);

    if(birthdate > today) return { state: false, message: 'Fecha invalida' };
    if(birthdate < before) return { state: false, message: 'Fecha invalida' };

    if(birthdate < limit) return { state: true };
    else return { state: false,  message: 'Menor de 18 años' };
  }

  const handleFinalSubmit = inputs => {
    const dataForm = {
      ...route.params.inputsBefore,
      ...inputs
    }
    const { params } = route.params;
    const { userId } = route.params

    updateUserFetch(userId, dataForm)
    .then(res => {
      navigation.navigate('Login');
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterThirdView handleFinalSubmit={handleFinalSubmit} navigation={navigation} validateAge={validateAge}/>
      </View>
    </SafeAreaView>
  );
};
