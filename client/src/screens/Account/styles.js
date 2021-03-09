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
      marginVertical: 8,
      width: '100%',
      height: 210,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8
    },
    card: {
      flex: 1,
      padding: 16,
      alignItems: 'space-between',
      justifyContent: 'space-between'
    },
    circle: {
      position: 'relative',
      width: 50,
      height: 50,
      borderRadius: '100px',
      backgroundColor: rgba(palette.accent.light, 0.2)
    },
    symbol: {
      flexDirection: 'row',
    }
});

export default styles;
