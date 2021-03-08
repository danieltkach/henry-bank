import React from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import TransferView from './TransferView';
import { Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { newTransferFetch } from '../../controllers/transaction';

export default function TransferContainer({ navigation }) {
  const accountId = useSelector((state) => state.userReducer.user.accounts);
  console.log(accountId[0]);
  const handleFinalSubmit = (inputs) => {
    console.log('dataForm: ', inputs);
    newTransferFetch(accountId[0], inputs)
      .then((responseTransfer) => {
        console.log('login: ', responseTransfer);

        navigation.navigate('Home');
      })
      .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header label="Transferir Dinero" navigation={navigation}/>
      <View style={styles.container}>
        <TransferView
          navigation={navigation}
          handleFinalSubmit={handleFinalSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
