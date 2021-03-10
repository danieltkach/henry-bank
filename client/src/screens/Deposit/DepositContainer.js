import React from "react";
import { View, SafeAreaView } from "react-native";
import DepositView from './DepositView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { rechargeFetch } from "../../controllers/transaction";
import { useSelector } from 'react-redux';

export default function DepositContainer({navigation}) {
  const cvu = useSelector(state => state.accountReducer.account.cvu);  
  console.log(cvu);
  const handleFinalSubmit = (data) => {
    let dataForm = {
      amount: parseFloat(data.amount),
      cvu: cvu
    };
    console.log(dataForm);
    rechargeFetch(dataForm)
    .then((response) => {
      console.log(response);            
    })
    .catch(error => console.log(error))
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Header label="Recarga de dinero" navigation={navigation} />
      <View style={styles.container}>
        <DepositView handleFinalSubmit={handleFinalSubmit} />
      </View>
    </SafeAreaView>
  );
};
