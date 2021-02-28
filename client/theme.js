import React, { useState } from 'react';
import { DefaultTheme } from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme
} from 'react-native-paper';

// const [isDarkTheme, setIsDarkTheme] = React.useState(false);

const palette = {
  primary: {
    light: '#fff',
    main:  '#fff',
    dark: '#fff'
  },
  secondary: {
    light: '#fff',
    main:  '#fff',
    dark: '#fff'
  },
  background: {
    light: '#fff',
    main:  '#fff',
    dark: '#fff'
  },
}

const CustomDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#ffffff',
    text: '#333333'
  }
}

const CustomDarkTheme = {
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text: '#ffffff'
  }
}

const theme = CustomDefaultTheme;
export default theme;
