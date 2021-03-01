import React, { useRef, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import { palette, rgba, setColor, fontSystem } from '../theme';
import { Text } from './index'


export default function ButtonCustom({ type, color, style, onPress, label }) {
  const genColor = color && setColor[color] || setColor['accent'] ;
  // const genType =
  /*TODO agregar type outlined, text*/

  return (
    <TouchableOpacity
      onPress = {() => onPress}
      style={[styles.surface, {backgroundColor: genColor}, styles.button, style]}>
        <Text type='button' text={label.toUpperCase()} style={{color: 'white'}}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button          : {
    borderRadius  : 12,
    alignItems    : 'center',
    justifyContent: 'center',
    height        : '36px',
  },
  surface          : {
    shadowColor    : "#000",
    shadowOffset   : {
      width        : 0,
      height       : 4,
    },
    shadowOpacity: 0.30,
    shadowRadius : 4.65,
    elevation    : 2,
  }
})
