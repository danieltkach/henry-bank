import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeView from './HomeView'
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';

export default function HomeContainer({ navigation }) {
  // const user = useSelector((state) => state.userStore);

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Header type='settings' label={`Hola `} align='center'/>
      <View style={styles.container}>
        <HomeView />
      </View>
      <BottomNav navigation={navigation} init={0}/>
    </SafeAreaView>
  );
};
