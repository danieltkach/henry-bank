import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { BottomNavigation, IconButton, Colors, Text, Surface } from 'react-native-paper';


export default function BottomNav({ navigation, init }) {
  const [indexClick, setIndexClick] = React.useState(init && init || 0);

  const buttons = [
    { index: 0, label: 'Inicio', icon: 'view-grid', route: 'Home'},
    { index: 1, label: 'Contactos', icon: 'book-open-variant', route: 'Contacts'},
    { index: 2, label: 'Cuenta', icon: 'bank', route: 'Account'},
    { index: 3, label: 'Yo', icon: 'account', route: 'Profile'}
  ];

  const disableColor = '#BDBDBD';
  const activeColor = '#3551F2';

  const handleClick = value => {
    console.log(value);
  }

  return(
    <View style={styles.bottomNavigation}>
      <Surface style={styles.surface}>
        {buttons.map((bt, index) => (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => navigation.navigate(bt.route)}
          >
            <IconButton
              style={styles.iconButton}
              icon={bt.icon}
              size={indexClick === index && 20 || 24}
              color={indexClick === index && activeColor || disableColor}
            />
            <Text style={[styles.text, {color: indexClick === index && `${activeColor}` || `${disableColor}`}]} >
              {bt.label}
            </Text>
          </TouchableOpacity>
          ))
        }
      </Surface>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    width: '100%',
    bottom: '0px'
  },
  button          : {
    flexDirection : 'column',
    alignItems    : 'center',
    width         : 48,
    height        : 48,
  },
  iconButton : {
    width    : 24,
    height   : 24,
    margin   : 0,
  },
  text            : {
    justifyContent: 'center',
    alignItems    : 'center',
    height        : 14,
  },
  surface          : {
    flexDirection  : 'row',
    justifyContent : 'space-around',
    height         : '48px',
    borderRadius   : '32px',
    margin         : '8px',
    paddingTop     : '4px',
    paddingBottom  : '4px',
    borderRadius   : '32px',
    shadowColor    : "#000",
    shadowOffset   : {
      width        : 0,
      height       : 4,
    },
    shadowOpacity: 0.30,
    shadowRadius : 4.65,
    elevation    : 8,
  }
})
