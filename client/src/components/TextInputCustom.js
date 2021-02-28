import React, { useRef, useState } from "react";
import { TextInput } from 'react-native';
import { Boilerplate } from '../screens';
import { StyleSheet, View } from 'react-native';
import { palette, rgba } from './palette';


const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;
const secondaryColor = palette.primary.main;

export default function TextInputCustom(props) {
  console.log('TextInput', props)
  const { placeholder, style, type, width, onChangeText, value, error } = props;
  if (!error.value) {
    error.value = false
    error.label = ''
  }

  return (
    <View style={[styles.box, { width: width && width || '100%' }]}>
      <TextInput
        color='red'
        style={styles.text}
        placeholder={placeholder}
        placeholderTextColor={rgba(darkColor, 0.5)}
      >
      </TextInput >
      <View style={styles.underline}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  box            : {
    flexDirection: 'column',
    height       : 48,
  },
  underline        : {
    width          : '100%',
    height         : '1px',
    backgroundColor: darkColor,
    opacity        : '0.2'
  },
  text           : {
    fontSize     : '16px',
    letterSpacing: '0.5 px',
    fontWeight   : 400,
    lineHeight   : 19,
    color        : 'red'
  },
  placeholder: {
    color    : 'rgba(255, 0, 255, 1.0)'
  }
})
