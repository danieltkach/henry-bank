import React, { useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import TransferView from './TransferView';
import { Header, Background, Alert } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { newTransferFetch } from '../../controllers/transaction';

export default function TransferContainer({ navigation }) {
  const accountId = useSelector((state) => state.userReducer.user.accounts);
  const [alert, setAlert] = useState({
    message: '',
    state: false,
    type: ''
  });

  const handleAlert = (message, type) => {
    let timer;
    if (alert.state === false) {
      setAlert({ message, state: true, type });
      timer = setTimeout(() => {
        setAlert({ message, state: false, type });
      }, 3000);
    }
  };

  const handleFinalSubmit = (inputs) => {
    console.log('dataForm: ', inputs);
    newTransferFetch(accountId[0], inputs)
      .then((responseTransfer) => {
        console.log('login: ', responseTransfer);
        handleAlert('Transferencia Realizada');
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Alert
        label={alert.message}
        state={alert.state}
        type={alert.type}
        handleAlert={handleAlert}
      />
      <Header label="Transferir Dinero" navigation={navigation} />
      <View style={styles.container}>
        <TransferView
          navigation={navigation}
          handleFinalSubmit={handleFinalSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
