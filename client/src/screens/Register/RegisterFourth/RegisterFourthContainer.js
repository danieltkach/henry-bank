import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterFourthView from './RegisterFourthView';
import { Background } from '../../../components';
import styles from './../styles';

export default function RegisterFirstContainer({ navigation }) {

  const handleFinalSubmit = inputs => {
    console.log('dataForm: ', inputs)
    //fetch
    navigation.navigate('Login');
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
