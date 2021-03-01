import React, { useRef, useState } from "react";
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import { palette, rgba, setColor, fontSystem } from '../theme';
import { Text } from './index'


export default function ButtonCustom({ type, color, style, onPress, label }) {
  const genColor = setColor[color] || setColor['accent'] ;
  const genFont = type && fontSystem[type] || fontSystem['button'];
  /*TODO agregar type outlined, text*/

  return (
    <TouchableOpacity onPress = {() => {/* do this */}}>
      <View style = {styles.button}>
          <Text type='button' text={label.toUpperCase()}/>
      </View>
  </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button          : {
    borderRadius  : '12px',
    alignItems    : 'center',
    justifyContent: 'center',
    height        : '36px',
  },
  circle        : {
    position    : 'absolute',
    borderRadius: '100%',
    opacity     : 0.2
  }
})
