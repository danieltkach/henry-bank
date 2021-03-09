import React, {useEffect, useState} from 'react';
import { View, SafeAreaView } from 'react-native';
import AccountView from './AccountView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';


export default function AccountContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const account = useSelector((state) => state.accountReducer.account);
  const user = useSelector((state) => state.userReducer.user);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header
        type="settings"
        label='Cuenta'
        align="center"
        navigation={navigation}
        handleIsLogin={handleIsLogin}
      />
      <View style={styles.container}>
      {account ?
        (
          <AccountView user={user} account={account}/>
        )
        :(
          <></>
        )
      }
      </View>
      <BottomNav navigation={navigation} init={2} />
    </SafeAreaView>
  );
}
