import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import TransactionView from './TransactionView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { listTransactions } from '../../controllers/transaction';

export default function TransactionContainer({ navigation }) {
  const [transactions, setTransactions] = useState([]);
  const accountId = useSelector((state) => state.userReducer.user.accounts);

  useEffect(() => {
    const transactionsFetch = async () => {
      const data = await listTransactions(accountId);
      setTransactions(data);
    };
    transactionsFetch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header type="settings" label="Transacciones" align="center" />
      <View style={styles.container}>
        <TransactionView transactions={transactions} />
      </View>
      <BottomNav navigation={navigation} init={1} />
    </SafeAreaView>
  );
}
