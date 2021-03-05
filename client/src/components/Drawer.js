import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { palette, rgba } from '../theme';
import { Text } from './index';
import { useDispatch } from 'react-redux';
import { deleteData } from '../controllers/storage';

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;

export default function Drawer({ navigation, label, align }) {
  const dispatch = useDispatch();
  const [isSignOut, setIsSignOut] = useState(false);
  const dimensions = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (isSignOut) {
      console.log('remove');
      dispatch({ type: 'REMOVE_SESSION' });
      deleteData();
    }
  }, [isSignOut]);

  const handleClick = () => {
    setToggle(!toggle);
  };
  const buttons = [
    {
      index: 0,
      label: 'Recargar dinero',
      icon: 'arrow-collapse-up',
      route: 'Recharge'
    },
    {
      index: 1,
      label: 'Enviar dinero',
      icon: 'subdirectory-arrow-right',
      route: 'Transfer'
    },
    {
      index: 2,
      label: 'Transacciones',
      icon: 'cube-send',
      route: 'Transaction'
    },
    { index: 3, label: 'Estadísticas', icon: 'poll', route: 'Stats' },
    { index: 4, label: 'Mis tarjetas', icon: 'credit-card', route: 'Card' },
    { index: 5, label: 'Soporte', icon: 'help-circle', route: 'Support' },
    { index: 6, label: 'Salir', icon: 'logout', route: false }
  ];

  const IconButtonText = ({ labelButton, icon, route }) => (
    <TouchableOpacity
      onPress={
        route ? () => navigation.navigate(route) : () => setIsSignOut(true)
      }
      style={styles.iconButtonText}
    >
      <IconButton icon={icon} size={20} color="white" onPress={handleClick} />
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
          styles.navbar,
          { height: dimensions.height, left: (toggle && '0px') || '-75%' }
        ]}
      >
        <View style={{ width: '100%', alignItems: 'flex-end' }}>
          <IconButton
            icon="close"
            size={24}
            color="white"
            onPress={handleClick}
          />
        </View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => (
            <IconButtonText
              icon={item.icon}
              labelButton={item.label}
              route={item.route}
            />
          )}
          keyExtractor={(item) => item.index.toString()}
        />
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
    color: 'white',
    paddingLeft: '16px'
  },
  iconButtonText: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: '8px'
  },
  navbar: {
    position: 'absolute',
    backgroundColor: `${primaryColor}`,
    width: '75%',
    transition: '.3s'
  },
  backNav: {
    position: 'absolute',
    backgroundColor: `${darkColor}`,
    opacity: 0.5,
    transition: '.5s'
  }
});
