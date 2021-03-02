import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterThirdView from './RegisterThirdView';
import { Background } from '../../../components';
import styles from './../styles';

export default function RegisterThirdContainer({ navigation }) {

  const handleFinalSubmit = inputs => {
    console.log('dataForm: ', inputs)
    //fetch
    navigation.navigate('Register4');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterThirdView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
