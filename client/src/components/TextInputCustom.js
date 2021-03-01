import React, { useState } from "react";
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { palette, rgba, fontSystem } from './theme';
import { Text } from './index';

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;
const secondaryColor = palette.primary.main;

export default function TextInputCustom(props) {
  const { placeholder, type, style, onChangeText, value, error, maxLength } = props;
  const [focus, setFocus] = useState(false);
  //type equal to validations

  if (error.value === false) error.label = '';

  const setUnderline = focus && styles.underlineFocus
  console.log(setUnderline)

  return (
    <View style={[styles.box, style]}>
      <TextInput
        maxLength={maxLength || 80}
        style={[fontSystem.body1, styles.text]}
        placeholder={placeholder}
        placeholderTextColor={rgba(darkColor, 0.5)}
        underlineColorAndroid='transparent'
        onFocus={(p) => {setFocus(!focus)}}
        onBlur={() => {setFocus(!focus)}}
        onChangeText={onChangeText}
      >
      </TextInput >
      <View style={[styles.underlineBlur, setUnderline]}></View>
      <Text text={error.label} type='body3' style={styles.helperText}/>
    </View>
  );
}

const styles = StyleSheet.create({
  box            : {
    flexDirection: 'column',
    height       : 48,
  },
  underlineBlur    : {
    position       : 'absolute',
    bottom         : '8px',
    width          : '100%',
    height         : '1px',
    backgroundColor: darkColor,
    opacity        : '0.2',
    transition     : '.3s',
    animation: "$errorEffect .2s ease-in-out"
  },
  underlineFocus   : {
    height         : '2px',
    transition     : '.3s',
    opacity        : '1',
    backgroundColor: primaryColor,
    transition     : '.3s',
  },
  underlineError   : {
    height         : '2px',
    transition     : '.3s',
    opacity        : '1',
    backgroundColor: 'red'
  },
  text           : {
    marginTop    : '12px',
    color        : darkColor,
  },
  helperText  :{
    position  : 'absolute',
    right     : '0px',
    bottom    : '-8px',
    color     : 'red',
    transition: '.3s'
  },
  placeholder: {
    color    : 'rgba(255, 0, 255, 1.0)'
  },

  animatedItem: {
    animation: "$errorEffect .2s ease-in-out"
  },
  animatedItemExiting: {
    animation: "$errorEffect .2s ease-in-out",
    opacity: 0,
    transform: "translateY(-200%)"
  },
  "@keyframes errorEffect": {
    "0%": {
      transform: "scale(0, 1)"
    },
    "100%": {
      transform: "scale(1, 1)"
    }
  }
});
