import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import TransactionView from './TransactionView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { allTransactionFetch } from '../../controllers/transaction';
import { GET_TRANSACTIONS } from '../../constants/api';
import axios from 'axios';

export default function TransactionContainer({ navigation }) {
  // const [transactions, setTransactions] = useState([]);
  const accountId = useSelector((state) => state.userReducer.user.accounts);
  const transactions = [];
  useEffect(() => {
    const allTransactions = async () => {
      const { data } = await axios.get(`${GET_TRANSACTIONS}/${accountId[0]}`);
      console.log(data);
      if (data[0]) {
        data.map((array) => {
          transactions.push(array[0][0]);
          // setTransactions(transactions, array[0][0]);
        });
      }
    };
    allTransactions();
  }, []);
  console.log(transactions);

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
