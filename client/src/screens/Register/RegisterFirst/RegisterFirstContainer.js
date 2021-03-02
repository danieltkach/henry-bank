import React from "react";
import { View, SafeAreaView } from "react-native";
import RegisterFirstView from './RegisterFirstView';
import { Background } from '../../../components';
import styles from './../styles';

export default function RegisterFirstContainer({ navigation }) {

  const handleFinalSubmit = inputs => {
    console.log('dataForm: ', inputs)
    //fetch
    navigation.navigate('Register2');
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <RegisterFirstView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};
