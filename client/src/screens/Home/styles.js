import { StyleSheet } from "react-native";
import { palette } from '../../theme';


const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
    },
    separator        : {
      marginVertical : 4,
      width          : '100%',
      height         : '1px',
      backgroundColor: palette.text.disabled,
      opacity        : 0.8
    },
    header         : {
      flexDirection: 'row',
      paddingBottom: 8
    },
    headerChart      : {
      flex           : 1,
      width          : 128,
      height         : 128,
      alignItems     : 'center',
      justifyContent : 'center'
    },
    chartTitle       : {
      height         : 80,
      width          : 80,
      borderRadius   : 100,
      position       : 'absolute',
      backgroundColor: palette.accent.light,
      justifyContent : 'center',
      alignItems     : 'center'
    },
    headerText        : {
      flex            : 1.4,
      paddingVertical : 8,
      justifyContent  : 'space-between'
    },
    balanceText     : {
      flexDirection : 'row',
      justifyContent: 'center'
    },
    currency        : {
      paddingLeft   : 4,
      justifyContent: 'flex-end'
    },
    generalText      : {
      flexDirection  : 'row',
      justifyContent : 'space-between',
      paddingVertical: 2
    },

    middle           : {
      paddingVertical: 8
    },
    buttonsChartLineal: {
      flexDirection   : 'row',
      paddingVertical : 4,
      marginLeft      : -4
    },
    bottom          : {
      flexDirection : 'row',
      justifyContent: 'space-around',
      alignItems    : 'center',
      paddingTop    : 8
    },
    buttonFloat   : {
      height      : 48,
      width       : 48,
      borderRadius: 48
    },
    textButton      : {
      position      : 'absolute',
      justifyContent: 'center',
      alignItems    : 'center',
      bottom        : -20
    },
    buttonSelected: {
      borderWidth: 1,
      borderColor: palette.primary.main,
      borderRadius: 12
    }

});

export default styles;
