import React, { useRef, useState } from "react";
import { IconButton } from 'react-native-paper';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import { palette, rgba, setColor, fontSystem } from '../theme';
import { Text } from './index'
import Icon from 'react-native-vector-icons/Feather';


export default function ButtonCustom({ type, color, style, onPress, label, icon, size }) {
  const genColor = color && setColor[color] || setColor['accent'] ;
  // const genFont = type === 'text' ? fontSystem['subtitle2'] : fontSystem['button'];
  const genStyleButton = type === 'text' ? styles.text : styles.button;


  return (
    <>
    {type === 'icon' ?
      (
        <TouchableOpacity
          style={[genStyleButton, {background: genColor, justifyContent: 'center', alignItems: 'center', width: size || 36}, style]}
          onPress={onPress}
        >
          <Icon
            name={icon}
            size={size || 20}
            color={palette.accent.light}
          />
        </TouchableOpacity>
      ):(
        <TouchableOpacity
          onPress={onPress}
          style={[genStyleButton, style, {background: type === 'text' || genColor}]}>
            <Text type={type === 'text' && 'subtitle2' || 'button' } text={type === 'text' ? label : label.toUpperCase()} style={{color: type === 'text' && genColor || 'white'}}/>
        </TouchableOpacity>
      )
    }
    </>
  );
}

const styles = StyleSheet.create({
  button          : {
    borderRadius  : 12,
    alignItems    : 'center',
    justifyContent: 'center',
    height        : '36px',
    shadowColor    : "#000",
    shadowOffset   : {
      width        : 0,
      height       : 4,
    },
    shadowOpacity: 0.30,
    shadowRadius : 4.65,
    elevation    : 2,
  },
  text            : {
    alignItems    : 'center',
    justifyContent: 'center',
  },
})
