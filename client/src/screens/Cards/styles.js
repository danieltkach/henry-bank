import { StyleSheet } from 'react-native';
import { palette } from '../../theme';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'space-around'
  },
  container: {
    flex: 1,
    padding: '16px',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  content: {
    flex: 1,
    width: '100%',
    justifyContent: 'space-around'
  },
  button: {
    marginVertical: '6px'
  },
  textInputs: {
    marginVertical: '2px',
    width: '100%',
    // flexDirection : 'row',
    flexWrap: 'wrap'
    // justifyContent: 'space-between',
  },
  topText: {
    paddingVertical: '2px'
  },
  midText: {
    alignItems: 'center'
  },
  botText: {
    padding: '4px'
  },
  googleButton: {
    padding: '4px',
    width: 40,
    height: 40,
    borderRadius: 1000,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    resizeMode: 'contain',
    height: 64
  },

  //TEXT STYLES

  inputTextHalf: {
    width: '50%'
  },
  underlineBlur: {
    position: 'absolute',
    bottom: '8px',
    width: '100%',
    height: '1px',
    backgroundColor: palette.accent.dark,
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
    color: palette.accent.dark
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
