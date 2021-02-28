import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#fff",
        marginTop: 100
    },
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
        position: "absolute",
        left: 140,
        top: -20,
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
    circuloNE: {
        position: "absolute",
        top: -280,
        right: -260,
        borderRadius: 400,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 400,
        height: 400,
    },
    circuloE: {
        position: "absolute",
        top: 0,
        left: 350,
        borderRadius: 400,
        backgroundColor: '#3551F2',
        opacity:0.4 ,
        width: 400,
        height: 400,
    },
    circuloO: {
        position: "absolute",
        bottom: 380,
        right: 370,
        borderRadius: 200,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 250,
        height: 250,
    },
    circuloSO: {
        position: "absolute",
        top: 600,
        left: -100,
        borderRadius: 100,
        backgroundColor: '#3551F2',
        opacity:0.4 ,
        width: 200,
        height: 200,
    }
});

export default styles;