import { StyleSheet } from 'react-native';

const font = 'Roboto, sans-serif';

export const palette = {
  primary: {
    light: 'rgba(85,109,244,1)',
    main : 'rgba(50,77,230,1)',
    dark : 'rgba(40,61,181,1)'
  },
  secondary: {
    light  : 'rgba(233,77,77,1)',
    main   : 'rgba(217,41,41,1)',
    dark   : 'rgba(172,32,32,1)'
  },
  accent : {
    light: 'rgba(245,245,245,1)',
    dark : 'rgba(27,38,61,1)'
  },
  text       : {
    primary  : "rgba(0,0,0,0.90)",
    secondary: "rgba(0,0,0,0.70)",
    disabled : "rgba(0,0,0,0.38)",
  },
}

export const fontSystem = StyleSheet.create({
  title: {
    fontSize     : 20,
    letterSpacing: 0.15,
    fontWeight   : "500",
    lineHeight   : 23,
    fontFamily   : font
  },
  subtitle1      : {
    fontSize     : 16,
    letterSpacing: 0.15,
    fontWeight   : "400",
    lineHeight   : 19,
    fontFamily   : font
  },
  subtitle2      : {
    fontSize     : 14,
    letterSpacing: 0.1,
    fontWeight   : '500',
    lineHeight   : 16,
    fontFamily   : font
  },
  body1          : {
    fontSize     : 16,
    letterSpacing: 0.5,
    fontWeight   : '400',
    lineHeight   : 19,
    fontFamily   : font
  },
  body2          : {
    fontSize     : 14,
    letterSpacing: 0.25 ,
    fontWeight   : "400",
    lineHeight   : 16  ,
    fontFamily   : font
  },
  body3          : {
    fontSize     : 12,
    letterSpacing: 0 ,
    fontWeight   : "400",
    lineHeight   : 14,
    fontFamily   : font
  },
  button         : {
    fontSize     : 14,
    letterSpacing: 1.25,
    fontWeight   : "500",
    lineHeight   : 16,
    fontFamily   : font
  },
  caption        : {
    fontSize     : 12,
    letterSpacing: 0.4,
    fontWeight   : "400",
    lineHeight   : 14,
    fontFamily   : font
  },
  overline       : {
    fontSize     : 10,
    letterSpacing: 1.5 ,
    fontWeight   : "400",
    lineHeight   : 12,
    fontFamily   : font
  },
});

export const rgba = (color, opacity) => {
  const newColor = color.slice(5, color.length-1).split(',');
  newColor[3] = opacity || 1;
  return `rgba(${newColor.join(',')})`;
}

export const setColor = {
  primary  : palette.primary.main,
  secondary: palette.secondary.main,
  accent   : palette.accent.dark
}
