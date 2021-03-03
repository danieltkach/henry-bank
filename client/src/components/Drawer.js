import React, { useRef, useState } from "react";
import { useWindowDimensions } from 'react-native';
import { IconButton } from 'react-native-paper';
import { StyleSheet, View, TouchableOpacity, FlatList } from 'react-native';
import { palette, rgba } from '../theme';
import { Text } from './index';


const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;

export default function Drawer({ navigation, label }) {
  const dimensions = useWindowDimensions();
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!toggle);
  }
  const buttons = [
    { index: 0, label: 'Recargar dinero', icon: 'arrow-collapse-up', route: '' },
    { index: 1, label: 'Enviar dinero', icon: 'subdirectory-arrow-right', route: '' },
    { index: 2, label: 'Transacciones', icon: 'cube-send', route: '' },
    { index: 3, label: 'Estadísticas', icon: 'poll', route: '' },
    { index: 4, label: 'Mis tarjetas', icon: 'credit-card', route: '' },
    { index: 5, label: 'Soporte', icon: 'help-circle', route: '' },
    { index: 6, label: 'Salir', icon: 'logout', route: '' },
  ]

  const IconButtonText = ({ labelButton, icon, route }) => (
    <TouchableOpacity onPress={() => navigation.navigate(route)} style={styles.iconButtonText}>
      <IconButton
        icon={icon}
        size={20}
        color="white"
        onPress={handleClick}
      />
      <Text style={styles.textBody} type='subtitle2' text={labelButton} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.drawer}>
      <View style={styles.header}>
        <IconButton
          icon="menu"
          size={24}
          color={darkColor}
          onPress={handleClick}
        />
        <Text type='title' text={label} />
      </View>
      <TouchableOpacity onPress={handleClick} style={[styles.backNav, {
        height: dimensions.height,
        width: dimensions.width,
        display: toggle && 'inline' || 'none'
      }]}></TouchableOpacity>

      <View style={[styles.navbar, { height: dimensions.height, left: toggle && '0px' || '-75%' }]}>
        <View style={{width: '100%', alignItems: 'flex-end'}}>
          <IconButton
            icon="close"
            size={24}
            color="white"
            onPress={handleClick}
          />
        </View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => <IconButtonText icon={item.icon} labelButton={item.label} route={item.route} />}
          keyExtractor={(item) => item.index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer  : {
    zIndex: 999999999
  },
  header           : {
    position       : "absolute",
    width          : '100%',
    height         : '48px',
    alignItems     : 'center',
    flexDirection  : 'row',
  },
  textBody       : {
    color        : 'white',
    paddingLeft  : '16px'
  },
  iconButtonText : {
    width        : '100%',
    flexDirection: 'row',
    alignItems   : 'center',
    paddingLeft  : '8px'
  },
  navbar           : {
    position       : 'absolute',
    backgroundColor: `${primaryColor}`,
    width          : '75%',
    // transition     : '.3s'
  },
  backNav          : {
    position       : 'absolute',
    backgroundColor: `${darkColor}`,
    opacity        : 0.5,
    // transition     : '.5s'
  },
})
