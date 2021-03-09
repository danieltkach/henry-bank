import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CardsView from './CardsView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

export default function CardsContainer({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header type="settings" label="Contactos" align="center" />
      <View style={styles.container}>
        <CardsView />
      </View>
      <BottomNav navigation={navigation} init={1} />
    </SafeAreaView>
  );
}
