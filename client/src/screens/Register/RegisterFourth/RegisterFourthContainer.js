import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterFourthView from './RegisterFourthView';
import { Background } from '../../../components';
import { updateUserFetch } from '../../../controllers/user';
import styles from './../styles';

export default function RegisterFirstContainer({ navigation, route }) {



  const handleFinalSubmit = inputs => {
    const dataForm = {
      ...route.params.inputsBefore,
      ...inputs
    }
    const { params } = route.params;
    const { userId } = route.params

    console.log('dataForm: ', userId, dataForm)
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
        <RegisterFourthView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
