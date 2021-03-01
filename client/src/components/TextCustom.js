import React, { useRef, useState } from "react";
import { TextInput } from 'react-native';
import { Text } from 'react-native';
import { palette, rgba, setColor, fontSystem } from '../theme';

const setWeight = {
  tin: 100,
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700
};

export default function TextCustom({ type, color, style, weight, text}) {
  const genColor = setColor[color] || setColor['accent'] ;
  const genWeight = setWeight[weight] || setWeight['regular'] ;

  return <Text style={[{
    color: genColor, weight: genWeight},
    fontSystem[type], style]}
  >
    {text && text || ''}
  </Text>;
}
