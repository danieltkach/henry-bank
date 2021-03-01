import React from "react";
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView'
import { Background } from '../../components';
import { loginUserFetch } from '../../controllers/user'
import styles from './styles';

export default function LoginContainer({ navigation }) {

  const handleFinalSubmit = inputs => {
    loginUserFetch(inputs)
    .then((responseLogin) =>  {
      //TODO add to local storage
      console.log('login: ',responseLogin)
      navigation.navigate('Menu');
    })
    .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <LoginView handleFinalSubmit={handleFinalSubmit}/>
      </View>
    </SafeAreaView>
  );
};
