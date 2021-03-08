import React, { useEffect, useState } from "react";
import { View, SafeAreaView } from "react-native";
import RegisterSecondView from './RegisterSecondView';
import { Background } from '../../../components';
import { verifyUserFetch, emailVerifyFetch } from '../../../controllers/user';
import styles from './../styles';

export default function RegisterSecondContainer({ navigation, route }) {
  const { email } = route.params;
  const [alert, setAlert] = useState({
    message: '',
    state: false,
    type: ''
  });

  const handleFinalSubmit = async inputs => {
    let error = undefined;
    const data = { codeSecurity: inputs.code, email: email };

    await verifyUserFetch(data)
    .then(responseUser => {
      if(responseUser.status < 300) {
        navigation.navigate('Register3', { userId: responseUser.userId })
      };
      if (responseUser.status >= 400) {
        error = { code: responseUser.message };
      }
    })
    .catch(err => {
      console.log(err);
    });

    return error;
  }

  const handleEmailVerify = () => {
    emailVerifyFetch({email})
    .then(response => {
      console.log(response.message);
    })
    .catch(err => console.log(err));
  }

  useEffect(() => {
    handleEmailVerify();
  }, [])

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterSecondView handleFinalSubmit={handleFinalSubmit} navigation={navigation} handleEmailVerify={handleEmailVerify}/>
      </View>
    </SafeAreaView>
  );
};
