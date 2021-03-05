import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container          : {
      flex             : 1,
      paddingHorizontal: '16px',
      flexDirection    : 'row',
      flexWrap         : 'wrap',
    },
    //ESTILOS DE PRUEBA
    pesos: {
        position:"absolute",
        top: 208,
        left: 200,
    },
    contenedor: {
        backgroundColor: "#fff"
    },
    imgop: {
        flex: 1,
        marginTop: 520,
        marginLeft: 10,
        flexDirection: "row" ,
        justifyContent: "space-around",

    },
    prueba: {
        position:"absolute",
        top: -320,
        height: 100,
        width: "100%",
        left: 5,
    },
    prueba2: {
        position:"absolute",
        top: -1,
        height: 100,
        width: "100%",
        left: 5,
    },
    informacion: {

        marginTop: -280,
        marginLeft: 5,
        marginRight: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        borderWidth: 0,
        height: 110,
        borderRadius: 30,
    },
    operaciones: {
        marginTop: 498,
        marginRight: 5,
        marginLeft: 5,
        flexDirection: "row" ,
        justifyContent: "space-between",
        borderWidth: 0,
        height: 110,
        borderRadius: 30
    },
    cantidadDinero:{
        position:"absolute",
        top: 200,
        left: 233,
        fontSize: 38,
        fontWeight: "bold",
    },
    saludo: {
        position:"absolute",
        color: 'black',
        top: 140,
        left: 20,
        fontSize: 25
    },
    dineroDisponible: {
        position:"absolute",
        color: 'black',
        top: 250,
        left: 239,
        fontSize: 17,
    },
    logo: {
        height: 80,
        resizeMode: 'contain',
        width: 150,
    },
    inputs: {
        flex:1,
        justifyContent:'center',
    },
    foto: {
      width: '100%',
      justifyContent: 'center'
    },
    button: {
        position: "absolute",
        top: 648,
        left: 0.3,
        flexDirection: 'row',
        borderWidth: 1,
        height: 110,
        width: "100%",
        borderRadius: 30,
        backgroundColor: '#3551F2'
    },
    button1: {
        position: "absolute",
        top: 648,
        flexDirection: 'row',
        borderWidth: 0,
        height: 190,
        width: "97.5%",
        borderRadius: 30,
        backgroundColor: 'lightblue'
    },
    button2: {
        position: "absolute",
        top: 428,
        flexDirection: 'row',
        borderWidth: 0,
        height: 180,
        width: "97.5%",
        borderRadius: 30,
        backgroundColor: 'lightblue'
    },
});

export default styles;
