import React from 'react';
import { View, SafeAreaView } from 'react-native';
import TransactionView from './TransactionView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

export default function TransactionContainer({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header type="settings" label="Transacciones" align="center" />
      <View style={styles.container}>
        <TransactionView />
      </View>
      <BottomNav navigation={navigation} init={1} />
    </SafeAreaView>
  );
}
