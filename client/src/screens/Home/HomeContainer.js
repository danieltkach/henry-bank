import React, {useEffect, useState} from 'react';
import { View, SafeAreaView } from 'react-native';
import HomeView from './HomeView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { readAccountsByIdFetch } from '../../controllers/account';


export default function HomeContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const [account, setAccount] = useState();
  const user = useSelector((state) => state.userReducer.user);

  const handleAccount = (idAccount) => {
    readAccountsByIdFetch(idAccount)
    .then(responseAccount => {
      console.log(responseAccount);
      setAccount(responseAccount);
    })
  }


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
      {user ?
        (
          <HomeView user={user} handleAccount={handleAccount} account={account}/>
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
