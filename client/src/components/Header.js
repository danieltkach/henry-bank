import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, IconButton, Colors, Text, Surface, Button } from 'react-native-paper';
import Drawer from './Drawer';

const HomeRoute = () => <Text>Inicio</Text>;
const ContactsRoute = () => <Text>Contactos</Text>;
const AccountRoute = () => <Text>Cuenta</Text>;
const ProfileRoute = () => <Text>You</Text>;

export default function Header({ type = 'default' }) {

  const color = '#1B263D';

  const Settings = () => (
    <View style={styles.header}>
      
      <IconButton
        icon="menu"
        size={24}
        color={color}
        onPress={() => console.log('Pressed')}
      />
      <Text style={styles.text}>Hola Usuario !</Text>
    </View>
  );

  const Default = () => (
    <View style={styles.header}>
      <IconButton
        icon="menu"
        size={24}
        color={color}
        onPress={() => console.log('Pressed')}
      />
      <View style={{margin: 'auto'}}>
        <Text style={styles.text}>Header component</Text>
      </View>

    </View>
  );

  return(
    <View>
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
