import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  body            : {
    flex          : 1,
    justifyContent: 'space-around'
  },
  container        : {
    flex           : 1,
    padding        : '16px',
    flexDirection  : 'row',
    flexWrap       : 'wrap',
  },
  content         : {
    flex          : 1,
    width         : '100%',
    justifyContent: 'space-around'
  },
  button          : {
    marginVertical: '6px'
  },
  textInputs      : {
    marginVertical: '2px',
    width         : '100%'
  },
  topText          : {
    paddingVertical: '2px',
  },
  midText         : {
    alignItems    : 'center'
  },
  botText          : {
    padding: '4px'
  },
  googleButton     : {
    padding: '4px',
    width          : 40,
    height         : 40,
    borderRadius   : 1000,
    backgroundColor: 'white',
    justifyContent : 'center',
    alignItems     : 'center'
  }
});

export default styles;
