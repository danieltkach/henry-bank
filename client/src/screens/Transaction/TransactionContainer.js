import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import TransactionView from './TransactionView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { listAllTransactions } from '../../stores/accountStore/accountActions';

export default function TransactionContainer({ navigation }) {
  // const [transactions, setTransactions] = useState([]);
  const accountId = useSelector((state) => state.userReducer.user.accounts);
  const transactions = useSelector(
    (state) => state.accountReducer.account.transactions
  );
  console.log(transactions);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   const transactionsFetch = async () => {
  //     const data = await listTransactions(accountId);
  //     setTransactions(data);
  //   };
  //   transactionsFetch();
  // }, []);

  useEffect(() => {
    dispatch(listAllTransactions(accountId));
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header type="settings" label="Transacciones" align="center" />
      <View style={styles.container}>
        <TransactionView transactions={transactions} />
      </View>
      <BottomNav navigation={navigation} />
    </SafeAreaView>
  );
}
