import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeView from './HomeView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function HomeContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const dispatch = useDispatch();
  const account = useSelector((state) => state.accountReducer.account);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header
        type="settings"
        label='Inicio'
        align="center"
        navigation={navigation}
        handleIsLogin={handleIsLogin}
      />
      <View style={styles.container}>
      {account ?
        (
          <HomeView navigation={navigation} account={account} />
        )
        :(
          <></>
        )
      }
      </View>
      <BottomNav navigation={navigation} init={0} />
    </SafeAreaView>
  );
}
