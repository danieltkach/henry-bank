import React from 'react';
import { View, StyleSheet } from 'react-native';
import { palette, rgba } from './palette';


const backgroundColor = palette.accent.light;
const primaryColor = palette.primary.main;
const secondaryColor = palette.secondary.main;

const between = (min, max) => Math.floor(Math.random() * ((max + 1) - min) + min);

const setTiles = (size, num=10) => {
  const feet = Math.floor(window.screen.height / num);
  const tiles = [];
  let count = -size/2;
  for (let i = 0; i < num + 1; i++) {
    tiles[i] = count;
    count += feet;
  }
  return tiles;
}

export default function Background({ navigation, init }) {

  const Circle = ({size, color, side}) => {
    const sideHorizontal = ['left', 'right'];
    const sideVertical = ['top', 'bot'];
    const setSize = size ? size : between(100, 200);
    const setSideHorizontal = sideHorizontal[between(0, 1)];
    const setSideVertical = sideVertical[between(0, 1)];
    const screenHeight = window.screen.height;
    let randomSide = between(2, 4);
    const tiles = setTiles(setSize, 100);

    return (
      <View style={[styles.circle, {
        width: setSize,
        height: setSize,
        backgroundColor: color === 'blue' && primaryColor || secondaryColor,
        [side || setSideHorizontal]: `${(-1 * (setSize/2)) + (randomSide !== 2 && (-1 * setSize/randomSide) || 0)}px`,
        top: `${tiles[between(0, tiles.length)]}px`,
      }]}></View>
    );
  };

  return(
    <View style={styles.background}>
      <Circle side='left' color='blue'/>
      <Circle side='left' color='red'/>
      <Circle side='right' color='red'/>
      <Circle side='right' color='blue'/>
    </View>
  );
}

const styles = StyleSheet.create({
  background       : {
    width          : '100%',
    height         : '100%',
    position       : 'fixed',
    backgroundColor: `${backgroundColor}`
  },
  circle        : {
    position    : 'absolute',
    borderRadius: '100%',
    opacity     : 0.2
  }
})
