import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, IconButton, Text, Surface } from 'react-native-paper';
import Drawer from './Drawer';

const HomeRoute = () => <Text>Inicio</Text>;
const ContactsRoute = () => <Text>Contactos</Text>;
const AccountRoute = () => <Text>Cuenta</Text>;
const ProfileRoute = () => <Text>You</Text>;

export default function Header({ type = 'default', label, navigation }) {

  const color = '#1B263D';

  const Settings = () => (
    <Drawer />
  );

  const Default = (label) => (
    <View style={styles.header}>
      <IconButton
        icon="arrow-left"
        size={24}
        color={color}
        onPress={() => navigation.goBack()}
      />
      <View style={{margin: 'auto'}}>
        <Text style={styles.text}>{label}</Text>
      </View>

    </View>
  );

  return(
    <View style={styles.nav}>
      {type !== 'default' ? (
          <Settings />
        ):
        (
          <Default />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    zIndex: 9
  },
  header           : {
    position       : 'sticky',
    width          : '100%',
    height         : '48px',
    alignItems     : 'center',
    flexDirection  : 'row',
  },
  text           : {
    fontSize     : '20px',
    letterSpacing: '0.15 px',
    fontWeight   : 500,
    lineHeight   : 23
  }
})
