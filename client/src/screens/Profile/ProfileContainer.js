import React, {useEffect, useState} from 'react';
import { View, SafeAreaView } from 'react-native';
import ProfileView from './ProfileView';
import { BottomNav, Header, Background } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { updateProfileFetch } from '../../controllers/user';
import { useDispatch } from 'react-redux';


export default function ProfileContainer({ navigation, route }) {
  const { handleIsLogin } = route.params;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);

  const handleFinalSubmit = inputs => {
    dispatch({type: "PUT_PROFILE", payload: inputs});
    updateProfileFetch(user._id, inputs)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Background />
      <Header
        type="settings"
        label='Mi Perfil'
        align="center"
        navigation={navigation}
        handleIsLogin={handleIsLogin}
      />
      <View style={styles.container}>
      {user ?
        (
          <ProfileView user={user} handleFinalSubmit={handleFinalSubmit} />
        )
        :(
          <></>
        )
      }
      </View>
      <BottomNav navigation={navigation} init={3} />
    </SafeAreaView>
  );
}
