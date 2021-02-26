import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import {useTheme} from "react-native-paper";
import { LinearGradient } from 'expo-linear-gradient';
import Logo from "../images/Logo.png"
import Contactos from "../images/icons/Contactos.png"
import House from "../images/icons/House.png"
import Perfil from "../images/icons/Perfil.png"
import Vector from "../images/icons/Vector.png"
import Estadisticas from "../images/icons/Estadisticas.png"
import Caja from "../images/icons/Caja.png"
import Enviar from "../images/icons/Enviar.png"
import Operaciones from "../images/icons/Operaciones.png"
import Recargar from "../images/icons/Recargar.png" 


const Menu = () => {

    const {colors} = useTheme()

 return (
    <View style={styles.container}>
        <View style={styles.circuloNE}/>
        <View style={styles.circuloE}/>
        <View style={styles.circuloO}/>
        <View style={styles.circuloSO}/>
        <View style={styles.prueba}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#7A83D6', '#fff', '#fff']}
                style={styles.button1}>
                <Text style={styles.text}></Text>
            </LinearGradient>
        </View>
        <View style={styles.prueba2}>
            <LinearGradient
                // Button Linear Gradient
                colors={['#fff', '#fff', '#FF99CC']}
                style={styles.button2}>
                <Text style={styles.text}></Text>
            </LinearGradient>
        </View>

        <View style={styles.foto}> 
            <Image style={styles.logo} source={Logo}/>
        </View>
            <Text style={styles.saludo}>Hola usuario</Text>

        <View>
            <Text style={styles.cantidadDinero}>5.911,34</Text>
            <Text style={styles.dineroDisponible}>
                Dinero disponible</Text>
            <Image style={styles.pesos} source={Vector}/>
        </View>


        <View style={styles.operaciones}>
            <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 35, marginLeft: -2}}>
                <Image source={Recargar}/>
                <Text style={{textAlign:'center'}}>Recargar{"\n"} dinero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 35, marginLeft: -12}}>
                <Image source={Enviar}/>
                <Text style={{textAlign:'center'}}>Enviar{"\n"} dinero</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 27, marginLeft: -10}}>
                <Image source={Estadisticas}/>
                <Text style={{textAlign:'center'}}>Estadisticas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 35, marginLeft: -13}}>
                <Image source={Operaciones}/>
                <Text style={{textAlign:'center'}}>Mis{"\n"} operaciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 35, marginLeft: -15}}>
                <Image source={Caja}/>
                <Text style={{textAlign:'center'}}>Caja{"\n"} de ahorro</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.informacion}>
        <TouchableOpacity >
            <Text style={{textAlign:'center', marginTop: 10, fontSize: 18}}>Ingresos</Text>
            <Text style={{marginTop: 30, fontSize: 22, marginLeft: 18}}>7.119,02</Text>
            <Image style={{marginTop: -33, marginLeft: -10}} source={Vector}/>
        </TouchableOpacity>
        <TouchableOpacity >
            <Text style={{textAlign:'center', marginTop: 10, fontSize: 18}}>Gastos del{"\n"} Mes</Text>
            <Text style={{marginTop: 10, fontSize: 22, marginLeft: 18,}}>1.209,32</Text>
            <Image style={{marginTop: -33, marginLeft: -10}} source={Vector}/>
        </TouchableOpacity>
        </View>


        <View style={styles.foto}> 
            <Image style={styles.logo} source={Logo}/>
        </View>
        <View style={styles.button}>
        <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 17, marginLeft: 20}}>
            <Image source={House}/> 
            <Text style={{textAlign:'center', color:'white'}}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 6, marginLeft: 40}}>
            <Image source={Contactos}/>
            <Text style={{textAlign:'center', color:'white'}}>Contactos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 40, width: "23%", justifyContent: "center", alignItems:"center", borderRadius:40, marginTop: 17, marginLeft: 42}}>
            <Image source={Perfil}/>
            <Text style={{textAlign:'center', color:'white'}}>Cuenta</Text>
        </TouchableOpacity>
        </View>
    </View>
    );
    };

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

export default Menu;