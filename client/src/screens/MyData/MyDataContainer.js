import React from "react";
import { View, SafeAreaView } from "react-native";
import MyDataView from './MyDataView'
import { Header, Background } from '../../components';
import styles from './styles';

export default function MyDataContainer({ navigation }) {

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
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <Header type='settings' label='Mis Datos' align='center'/>
      <View style={styles.container}>
        <MyDataView 
        navigation={navigation}
        handleFinalSubmit={handleFinalSubmit}/>
      </View>
    </SafeAreaView>
  );
};
