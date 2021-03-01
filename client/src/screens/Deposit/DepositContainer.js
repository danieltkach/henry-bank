import React from "react";
import { View, SafeAreaView } from "react-native";
import DepositView from './DepositView'
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

export default function DepositContainer() {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Header />
      <View style={styles.container}>
        <DepositView />
      </View>

    </SafeAreaView>
  );
};
