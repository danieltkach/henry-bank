import React from 'react';
import { View, StyleSheet } from 'react-native';


const backgroundColor = '#F5F5F5'
const primaryColor = '#3551F2';
const secondaryColor = '#E52B2B';

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
