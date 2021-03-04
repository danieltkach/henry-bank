import React from "react";
import { View, SafeAreaView } from "react-native";
import MyDataView from './MyDataView'
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

export default function MyDataContainer({ navigation }) {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Header type='settings' label='Contactos' align='center'/>
      <View style={styles.container}>
        <MyDataView />
      </View>
      <BottomNav navigation={navigation} init={1}/>
    </SafeAreaView>
  );
};
