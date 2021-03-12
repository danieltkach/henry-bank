import { StyleSheet } from "react-native";
import { palette, rgba } from '../../theme';


const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
    },
    surface: {
      position: 'fixed',
      width: 600,
      height: 600,
      borderRadius: 600,
    },
    card: {
      flex: 1,
      padding: 16,
      alignItems: 'space-between',
      justifyContent: 'space-between'
    },
    symbol: {
      flexDirection: 'row',
    },
    avatar           : {
      alignItems     : 'center',
      justifyContent : 'center',
      height         : 64,
      width          : 64,
      borderRadius   : 100,
      backgroundColor: palette.accent.dark
    },
    avatarCover: {
      alignItems     : 'center',
      justifyContent : 'center',
      height         : 68,
      width          : 68,
      borderRadius   : 100,
      backgroundColor: palette.accent.light
    },
    header: {
      width: '100%',
      height: '48px',
      flexDirection: 'row'
    },
    separator: {
      marginVertical: 8,
      width: '100%',
      height: '1px',
      backgroundColor: palette.text.disabled,
      opacity: 0.8
    },

    button          : {
      marginVertical: '6px'
    },
    textInputs      : {
      marginVertical: '2px',
      width         : '100%',
      // flexDirection : 'row',
      flexWrap      : 'wrap',
      justifyContent: 'space-between'
    },
    inputTextHalf: {
      width      : '50%'
    },
    underlineBlur    : {
      position       : 'absolute',
      bottom         : '8px',
      width          : '100%',
      height         : '1px',
      backgroundColor: palette.accent.dark,
      opacity        : 0.8,
      // transition     : '.4s',
    },
    underlineFocus   : {
      height         : '2px',
      opacity        : 1,
      backgroundColor: palette.primary.main,
      // transition     : '.4s',
    },
    underlineError   : {
      height         : '2px',
      opacity        : 1,
      backgroundColor: 'red',
      // transition     : '.4s',
    },
    text             : {
      height         : 48,
      backgroundColor: 'transparent',
      marginTop      : '12px',
      color          : palette.accent.dark,
    },
    helperText  :{
      position  : 'absolute',
      right     : '0px',
      bottom    : '-8px',
      color     : 'red',
      // transition: '.3s'
    },
});

export default styles;
