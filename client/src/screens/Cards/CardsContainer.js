import React from 'react';
import { View, SafeAreaView } from 'react-native';
import CardsView from './CardsView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

export default function CardsContainer({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header
        navigation={navigation}
        type="settings"
        label="Mis Tarjetas"
        align="center"
      />
      <View style={styles.container}>
        <CardsView navigation={navigation} />
      </View>

      <BottomNav navigation={navigation} init={1} />
    </SafeAreaView>
  );
}
