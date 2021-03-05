import React, { useState } from "react";
import { View, SafeAreaView } from "react-native";
import RegisterThirdView from './RegisterThirdView';
import { Background } from '../../../components';
import styles from './../styles';

export default function RegisterThirdContainer({ navigation, route }) {
  const { userId } = route.params;

  const handleFinalSubmit = inputs => {
    navigation.navigate('Register4', {inputsBefore: inputs, userId: userId});
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
