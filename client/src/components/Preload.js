import React from 'react';
import { View, StyleSheet } from 'react-native';
import { palette, rgba } from './theme';


const backgroundColor = palette.accent.dark;
const primaryColor = palette.primary.main;
const secondaryColor = palette.secondary.main;

export default function Preload({ navigation, init }) {

  return(
    <View style={styles.background}></View>
  );
}

const styles = StyleSheet.create({
  background       : {
    width          : '100%',
    height         : '100%',
    position       : 'fixed',
    backgroundColor: `${primaryColor}`
  }
})
