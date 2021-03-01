import React, { useState } from "react";
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { palette, rgba, fontSystem } from '../theme';
import { validations } from '../validations/index';
import { Text } from './index';

const darkColor = palette.accent.dark;
const primaryColor = palette.primary.main;
const secondaryColor = palette.primary.main;

export default function TextInputCustom(props) {
  const { placeholder, type, style, onChangeText, value, maxLength, errorValue } = props;
  const [focus, setFocus] = useState(false);
  const [error, setError] = useState(errorValue && errorValue || '');
  const [inputs, setInputs] = useState('');
  const setUnderline = !error ? focus && styles.underlineFocus : styles.underlineError;

  const handleInputChange = text => {setInputs(text)}
  const handleErrors = () => setError(validations[type](inputs, placeholder));

  return (
    <View style={[styles.box, style]}>
    <TextInput
        secureTextEntry={type === 'password' ? true : false}
        maxLength={!maxLength ? maxLength : 50}
        style={[fontSystem.body1, styles.text]}
        placeholder={placeholder}
        placeholderTextColor={rgba(darkColor, 0.5)}
        underlineColorAndroid='transparent'
        onFocus={(p) => {setFocus(!focus)}}
        onBlur={() => {
          setFocus(!focus)
          handleErrors()
        }}
        onChangeText={!onChangeText ? onChangeText : handleInputChange}
      >
      </TextInput >
      <View style={[styles.underlineBlur, setUnderline]}></View>
      <Text text={error} type='body3' style={styles.helperText}/>
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
    opacity        : '0.8',
    transition     : '.4s',
  },
  underlineFocus   : {
    height         : '2px',
    opacity        : '1',
    backgroundColor: primaryColor,
    transition     : '.4s',
  },
  underlineError   : {
    height         : '2px',
    opacity        : '1',
    backgroundColor: 'red',
    transition     : '.4s',
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
});
