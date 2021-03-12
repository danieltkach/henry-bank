import React from "react";
import { View, SafeAreaView } from "react-native";
import MyDataView from './MyDataView'
import { BottomNav, Header, Background } from '../../components';
import { useSelector } from 'react-redux';
import { updateUserFetch } from '../../controllers/user';
import styles from './styles';

export default function MyDataContainer({ navigation, route }) {

  const user = useSelector(state => state.userReducer.user)

  const handleFinalSubmit = (inputs) => {
    console.log('dataForm: ', inputs);
    console.log('este es el id:', user._id)
    updateUserFetch(user._id, inputs)
    .then(res => {
      navigation.navigate('Home');
    })
    .catch(err => {
      console.log(err);
    })
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
      <BottomNav navigation={navigation} init={3} />
    </SafeAreaView>
  );
};
