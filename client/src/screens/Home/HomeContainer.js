import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeView from './HomeView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { statisticsFetch } from '../../controllers/transaction';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


export default function HomeContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const dispatch = useDispatch();
  const account = useSelector((state) => state.accountReducer.account);
  const [statistics, setStatistics] = useState('');

  useEffect(() => {
    statisticsFetch(account._id)
    .then(transactionResponse => {
      setStatistics(transactionResponse);
    })
    .catch(err => console.log(err));
  }, [])

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
      {statistics ?
        (
          <HomeView navigation={navigation} account={account} statistics={statistics} />
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
