//Paleta de colores e.e

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

export const rgba = (color, opacity) => {
  const newColor = color.slice(5, color.length-1).split(',');
  newColor[3] = opacity || 1;
  return `rgba(${newColor.join(',')})`;
}
