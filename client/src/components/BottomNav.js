import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Text } from './index';
import { palette, rgba } from '../theme';
import Icon from 'react-native-vector-icons/Feather';


const disableColor = palette.text.disabled;
const activeColor = palette.primary.main;

export default function BottomNav({ navigation, init }) {
  const [indexClick, setIndexClick] = React.useState((init && init) || 0);

  const buttons = [
    { index: 0, label: 'Inicio', icon: 'home', route: 'Home' },
    { index: 1, label: 'Contactos', icon: 'message-circle', route: 'Contact' },
    { index: 2, label: 'Cuenta', icon: 'trello', route: 'Account' },
    { index: 3, label: 'Yo', icon: 'user', route: 'Profile' }
  ];

  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <View style={styles.bottomNavigation}>
      <View style={styles.surface}>
        {buttons.map((bt, index) => (
          <TouchableOpacity
            style={styles.button}
            key={index}
            onPress={() => navigation.navigate(bt.route)}
          >
            <Icon
              style={styles.iconButton}
              name={bt.icon}
              size={(indexClick === index && 24) || 20}
              color={(indexClick === index && activeColor) || disableColor}
            />
            <Text
              text={bt.label}
              type="subtitle2"
              style={[
                styles.text,
                {
                  display: indexClick === index ? 'none' : 'inline',
                  color:
                    (indexClick === index && `${activeColor}`) ||
                    `${disableColor}`
                }
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    zIndex: 1
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
  },
  iconButton: {
    width: 24,
    height: 24,
    margin: 0
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 14
  },
  surface: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: '48px',
    borderRadius: 32,
    margin: '8px',
    paddingTop: '4px',
    paddingBottom: '4px',
    borderRadius: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8
  }
});
