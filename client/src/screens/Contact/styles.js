import { StyleSheet } from "react-native";
import { palette} from '../../theme';

const primaryColor = palette.primary.main;

const styles = StyleSheet.create({
    index: {
      paddingHorizontal: 13,
      position: 'absolute',
      zIndex: 1,
      top: 0,
      width: '100%',
      backgroundColor: primaryColor,
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30
    },
    texts: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
  
    text1: {
      color: 'white',
      padding: 30,
      fontSize: 24
    },
    text2: {
      paddingHorizontal: 20,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontSize: 16
    },
  
    textInputs: {
      marginVertical: '2px',
      width: '100%'
    },
    underlineBlur: {
      position: 'absolute',
      bottom: '8px',
      width: '100%',
      height: '1px',
      backgroundColor: palette.text.disabled,
      opacity: 0.8
      // transition     : '.4s',
    },
    underlineFocus: {
      height: '2px',
      opacity: 1,
      backgroundColor: palette.primary.main
      // transition     : '.4s',
    },
    underlineError: {
      height: '2px',
      opacity: 1,
      backgroundColor: 'red'
      // transition     : '.4s',
    },
    text: {
      height: 48,
      backgroundColor: 'transparent',
      marginTop: '12px',
      color: 'white'
    },
    helperText: {
      position: 'absolute',
      right: '0px',
      bottom: '-8px',
      color: 'red'
      // transition: '.3s'
    }
  });

  export default styles;