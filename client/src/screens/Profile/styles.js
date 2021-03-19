import { StyleSheet } from "react-native";
import { palette, rgba, setColor } from '../../theme';


const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
    },
    surface: {
      backgroundColor: palette.primary.main,
      position: 'fixed',
      width: '100%',
      height: '100%',
      borderRadius: 32,
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
      flexDirection: 'column'
    },
    separator: {
      marginVertical: 8,
      width: '100%',
      height: '1px',
      backgroundColor: setColor.gray,
      opacity: 0.4
    },
    labelText: {
      color: setColor.gray
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
      backgroundColor: setColor.gray,
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
      color          : palette.accent.light,
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
