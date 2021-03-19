import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { palette } from '../theme';
import { Drawer, Text } from './index';
import Icon from 'react-native-vector-icons/Feather';
import IconArgSvg from '../media/IconArgSvg.js';
import IconUsdSvg from '../media/IconUsdSvg.js';
import { useSelector } from 'react-redux';


const HomeRoute = () => <Text>Inicio</Text>;
const ContactsRoute = () => <Text>Contactos</Text>;
const AccountRoute = () => <Text>Cuenta</Text>;
const ProfileRoute = () => <Text>You</Text>;

export default function Header({ type = 'default', label, navigation, align, handleIsLogin }) {
  const account = useSelector((state) => state.accountReducer.account);

  const Settings = () => (
    <Drawer label={label} align={align} navigation={navigation} handleIsLogin={handleIsLogin} account={account}/>
  );

  const Default = () => (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={{width: 48, height: 48, justifyContent: 'center', alignItems: 'center'}}
      >
        <Icon
          name="arrow-left"
          size={24}
          color={palette.accent.dark}
        />
      </TouchableOpacity>
      <View style={{ margin: 'auto' }}>
        <Text type="title" text={label} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Account')}
        style={styles.buttonCurrency}
      >
        {account.currency.toUpperCase() === 'ARS' ?
          (
            <IconArgSvg style={{fontSize: 24}} />
          )
          :(
            <IconUsdSvg style={{fontSize: 24}} />
          )
        }
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.nav}>
      {type !== 'default' ? <Settings /> : <Default />}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    zIndex: 9
  },
  header: {
    position: 'relative',
    width: '100%',
    height: '48px',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  buttonCurrency: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 16,
  }
});
