import React from 'react';
import { View, SafeAreaView } from 'react-native';
import TransferView from './TransferView';
import { Header, Background } from '../../components';
import styles from './styles';

export default function TransferContainer({ navigation }) {
  const handleFinalSubmit = (inputs) => {
    console.log('dataForm: ', inputs);
    //  loginUserFetch(inputs)
    //    .then((responseLogin) => {
    //      console.log('login: ', responseLogin);
    //      addSession(responseLogin.token);
    //      navigation.navigate('Home');
    //    })
    //    .catch((err) => console.log(err));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header label="Transferir Dinero" />
      <View style={styles.container}>
        <TransferView
          navigation={navigation}
          handleFinalSubmit={handleFinalSubmit}
        />
      </View>
    </SafeAreaView>
  );
}
