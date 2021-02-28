import React from "react";
import { View, SafeAreaView } from "react-native";
import BoilerplateView from './BoilerplateView'
import { BottomNav, Header, Background, Drawer } from '../../src/components';
import styles from './styles';

export default function BoilerplateContainer() {

  return (
    <View style={{flex: 1}}>
      <Background />
      <Header type='settings'/>
      <Drawer />
      <SafeAreaView style={styles.container}>

      </SafeAreaView>
      <BottomNav />
    </View>
  );
};
