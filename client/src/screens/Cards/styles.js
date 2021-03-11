import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '16px',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  body: {
    continer: {
      marginTop: 40,
      marginBottom: 30
    },
    containerTitle: {
      paddingBottom: 10,
      fontSize: 18,
      fontWeight: 'bold'
    },
    containerInputs: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20
    },
    inputCvc: {
      width: '40%'
    },
    containerMonthYearInputs: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    inputDate: {
      width: 100,
      marginRight: 10
    },
    btnContent: {
      paddingVertical: 4
    },
    btnText: {
      fontSize: 16
    }
  }
});

export default styles;
