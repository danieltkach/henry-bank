import React, { useRef, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { palette, rgba, setColor, fontSystem } from '../theme';
import { Text, Button } from './index';


export default function AvatarCustom({ icon, style, title, subtitle, onPress }) {

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text text={title[0]} type='title' style={{color: 'white'}}/>
      </View>
      <View style={{flexDirection: 'row', flex: 1}}>
        <View style={styles.text}>
          <Text text={title} type='subtitle1' />
          <Text text={subtitle} type='subtitle1' color='disabled' />
        </View>
        <View style={styles.button}>
          <Button type='icon' icon={icon || 'trash-can'} onPress={onPress} />
        </View>
        <View style={styles.underlineBlur}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container        : {
    flexDirection  : 'row',
    width          : '100%',
    paddingVertical: 10,
    alignItems     : 'center'
  },
  avatar           : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 48,
    width          : 48,
    borderRadius   : 100,
    marginRight    : 8,
    backgroundColor: palette.accent.dark
  },
  text             : {
    height         : '100%',
    paddingVertical: 8,
    justifyContent : 'space-around',
    alignItems     : 'space-around'
  },
  button          : {
    marginLeft    : 'auto',
    justifyContent: 'center',
    height        : 48
  },
  underlineBlur    : {
    position       : 'absolute',
    bottom         : -10,
    width          : '100%',
    height         : '1px',
    backgroundColor: palette.text.disabled,
    opacity        : 0.8,
  },

})
