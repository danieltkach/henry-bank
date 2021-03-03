import React from "react";
import { AsyncStorage } from 'react-native';
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView';
import { Background } from '../../components';
import { loginUserFetch } from '../../controllers/user';
import { addSession } from '../../stores/userStore/userActions';
import { useDispatch } from 'react-redux';
import styles from './styles';

export default function LoginContainer({ navigation }) {
  const dispatch = useDispatch();

  const handleFinalSubmit = inputs => {
    var myHeaders = new Headers();
    loginUserFetch(inputs)
    .then((responseLogin) =>  {
      dispatch({ type: 'ADD_SESSION' })
      navigation.navigate('Home');
    })
    .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <LoginView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
