import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, IconButton, Surface } from 'react-native-paper';
import { palette } from '../theme';
import { Drawer, Text } from './index';

const HomeRoute = () => <Text>Inicio</Text>;
const ContactsRoute = () => <Text>Contactos</Text>;
const AccountRoute = () => <Text>Cuenta</Text>;
const ProfileRoute = () => <Text>You</Text>;

export default function Header({ type = 'default', label, navigation }) {
  const Settings = () => <Drawer label={label} />;

  const Default = () => (
    <View style={styles.header}>
      <IconButton
        icon="arrow-left"
        size={24}
        color={palette.accent.dark}
        onPress={() => navigation.goBack()}
      />
      <View style={{ margin: 'auto' }}>
        <Text type="title" text={label} />
      </View>
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
    flexDirection: 'row'
  }
});
