import React from "react";
import { AsyncStorage } from 'react-native';
import { View, SafeAreaView } from "react-native";
import LoginView from './LoginView';
import { Background } from '../../components';
import { loginUserFetch } from '../../controllers/user';
import { addSession } from '../../stores/userStore/userActions';
import styles from './styles';
import { connect } from 'react-redux';


function LoginContainer({ navigation }) {
  
  const handleFinalSubmit = inputs => {
    console.log('dataForm: ', inputs)
    loginUserFetch(inputs)
    .then((responseLogin) =>  {
      console.log('login: ', responseLogin);
      // addSession(responseLogin.token);
      navigation.navigate('Home');
    })
    .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Background />
      <View style={styles.container}>
        <LoginView handleFinalSubmit={handleFinalSubmit} navigation={navigation}/>
      </View>
    </SafeAreaView>
  );
};

const mapActionsToProps = dispatch => {
  return {
    addSession: (user) => dispatch(getUser(user)),
  };
};

const mapStateToProps = state => {
  return {
    user: state.userStore,
  };
};

export default connect(mapStateToProps, mapActionsToProps)(LoginContainer);
