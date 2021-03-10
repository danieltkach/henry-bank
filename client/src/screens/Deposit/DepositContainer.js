import React from "react";
import { View, SafeAreaView } from "react-native";
import DepositView from './DepositView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { rechargeFetch } from "../../controllers/transaction";
import { useSelector, useDispatch } from 'react-redux';

export default function DepositContainer({navigation}) {
  const dispatch = useDispatch();

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
      console.log('response: ', response);
      dispatch({type: "UPDATE_BALANCE", payload: response.trans.amount})       
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
