import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native';
import { palette, rgba } from '../theme';
import { Text } from './index';
import { useDispatch, useSelector } from 'react-redux';
import { deleteData } from '../controllers/storage';

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;

export default function Drawer({ navigation, label, align, handleIsLogin }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  const [isSignOut, setIsSignOut] = useState(false);
  const dimensions = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  const handleLogOut = () => {
    dispatch({ type: 'REMOVE_SESSION' });
    dispatch({ type: 'REMOVE_ACCOUNT' });
    deleteData();
    handleIsLogin('sessionOff');
  };

  const handleClick = () => {
    setToggle(!toggle);
  };
  const buttons = [
    {
      index: 0,
      type: 'button',
      label: 'Recargar dinero',
      icon: 'arrow-collapse-up',
      route: 'Deposit'
    },
    {
      index: 1,
      type: 'button',
      label: 'Enviar dinero',
      icon: 'subdirectory-arrow-right',
      route: 'Transfer'
    },
    {
      index: 2,
      type: 'button',
      label: 'Transacciones',
      icon: 'refresh',
      route: 'Transaction'
    },
    { index: 3, type: 'separator' },
    {
      index: 4,
      type: 'button',
      label: 'Mis tarjetas',
      icon: 'credit-card',
      route: 'Cards'
    },
    {
      index: 5,
      type: 'button',
      label: 'Soporte',
      icon: 'help-circle',
      route: 'Support'
    },
    { index: 6, type: 'separator' },
    { index: 7, type: 'button', label: 'Salir', icon: 'logout', route: false }
  ];

  const IconButtonText = ({ labelButton, icon, route }) => (
    <TouchableOpacity
      onPress={route ? () => navigation.navigate(route) : () => handleLogOut()}
      style={styles.iconButtonText}
    >
      <IconButton icon={icon} size={20} color={darkColor} />
      <Text style={styles.textBody} type="subtitle2" text={labelButton} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.drawer}>
      <View
        style={{
          alignItems: align || 'flex-start',
          justifyContent: 'center',
          height: 48,
          width: '100%',
          zIndex: 0,
          position: 'absolute',
          paddingHorizontal: 16
        }}
      >
        <Text type="title" text={label} />
      </View>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          size={24}
          color={darkColor}
          onPress={handleClick}
        />
      </View>
      <TouchableOpacity
        onPress={handleClick}
        style={[
          styles.backNav,
          {
            height: dimensions.height,
            width: dimensions.width,
            display: (toggle && 'inline') || 'none'
          }
        ]}
      ></TouchableOpacity>

      <View
        style={[
          { height: dimensions.height, left: (toggle && '0px') || '-75%' },
          styles.navbar
        ]}
      >
        <View style={styles.profile}>
          <View style={styles.container}>
            <View style={styles.avatar}>
              <Text
                text={user && user.name && user.name[0].toUpperCase()}
                type="subtitle1"
                style={{ color: 'white' }}
              />
            </View>
            <View style={{ flexDirection: 'row', flex: 1 }}>
              <View style={styles.text}>
                <Text
                  text={`Hola ${user && user.name}`}
                  type="body2"
                  color="light"
                />
                <Text text={user && user.email} type="caption" color="gray" />
              </View>
            </View>
          </View>

          <IconButton
            icon="close"
            size={24}
            color="white"
            onPress={handleClick}
          />
        </View>
        <View style={{ paddingVertical: 8, paddingHorizontal: 8 }}>
          <ScrollView style={styles.scrollView} vertical={true}>
            {buttons.map((item, index) => (
              <View key={index}>
                {item.type === 'separator' ? (
                  <View style={styles.separator}></View>
                ) : (
                  <IconButtonText
                    icon={item.icon}
                    labelButton={item.label}
                    route={item.route}
                  />
                )}
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    zIndex: 9999
  },
  header: {
    position: 'relative',
    width: '100%',
    height: '48px',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textBody: {
    color: darkColor,
    paddingLeft: '16px'
  },
  iconButtonText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  navbar: {
    position: 'absolute',
    backgroundColor: palette.accent.light,
    width: '75%',
    transition: '.3s'
  },
  backNav: {
    position: 'absolute',
    backgroundColor: `${darkColor}`,
    opacity: 0.5,
    transition: '.5s'
  },
  container: {
    paddingLeft: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 36,
    width: 36,
    borderRadius: 100,
    marginRight: 8,
    backgroundColor: palette.accent.dark
  },
  text: {
    height: '100%',
    paddingVertical: 8,
    justifyContent: 'space-around',
    alignItems: 'space-around'
  },
  profile: {
    backgroundColor: primaryColor,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  separator: {
    marginVertical: 8,
    width: '100%',
    height: '1px',
    backgroundColor: palette.text.disabled,
    opacity: 0.8
  }
});
