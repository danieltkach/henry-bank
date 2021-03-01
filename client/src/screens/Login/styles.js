import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container        : {
      flex           : 1,
      padding        : '16px',
      flexDirection  : 'row',
      flexWrap       : 'wrap',
    },
    textInputs: {
      width   : '100%'
    },
    topText          : {
      paddingVertical: '2px',
    },
    midText         : {
      alignItems    : 'center'
    },
    googleButton     : {
      width          : 40,
      height         : 40,
      borderRadius   : '100%',
      backgroundColor: 'white',
      justifyContent : 'center',
      alignItems     : 'center'
    }
});

export default styles;
