import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
    },
    body: {
      flex:1,
    },
    uno: {
     fontSize:20,
     fontWeight:"600",
     marginTop:"10%",
     textAlign:"center",

    },
    dos: {
      textAlign:"center",
      justifyContent:"center",
      backgroundColor:"#ccd4f4",
      fontSize: 40,
      marginBottom:"20%",
      marginTop: "20%",
    },
    tres:{
      fontSize:20,
     fontWeight:"600",
     marginBottom:"30%",
     textAlign:"center",

    },
    boton:{
      backgroundColor:"#f4cccc",
      borderRadius: 100,
      marginHorizontal: 30,
      
    }
});

export default styles;
