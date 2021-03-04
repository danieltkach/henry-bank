import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterSecondView from './RegisterSecondView';
import { Background } from '../../../components';
import { verifyUserFetch } from '../../../controllers/user';
import styles from './../styles';

export default function RegisterSecondContainer({ navigation, route }) {
  console.log(route)
  const { email } = route.params;

  const handleFinalSubmit = inputs => {
    const data = {
      codeSecurity: inputs,
      email: email
    }
    verifyUserFetch(data)
    .then(responseUser => {
      navigation.navigate('Register3', {userId: responseUser.userId});
    })
    .catch(err => {
      console.log(err);
    });
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterSecondView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
