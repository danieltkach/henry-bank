import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterSecondView from './RegisterSecondView';
import { Background } from '../../../components';
import styles from './../styles';

export default function RegisterSecondContainer({ navigation }) {

  const handleFinalSubmit = inputs => {
    console.log('dataForm: ', inputs)
    //fetch
    navigation.navigate('Register3');
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
