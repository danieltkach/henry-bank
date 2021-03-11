import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import styles from './styles';

import { LinearGradient } from 'expo-linear-gradient';
import {
  Contactos,
  House,
  Perfil,
  Vector,
  Estadisticas,
  Caja,
  Enviar,
  Operaciones,
  Recargar
} from '../../../images/Logo.png';


export default function HomeView({ navigation, account, handleAccount, user }) {
  // console.log(account)
  // let setAccount = handleAccount(user.accounts[0]);
  // console.log(setAccount)
  const ContentPrueba = () => {
    return (
      <>
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
            <Image style={styles.logo} source={{uri: "https://res.cloudinary.com/dcen68vrk/image/upload/v1614840097/WalletLogo_-_Inro_logo_xxaihg.png"}}/>
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
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Image style={styles.logo} source={{uri: "https://res.cloudinary.com/dcen68vrk/image/upload/v1614840097/WalletLogo_-_Inro_logo_xxaihg.png"}}/>
      </View>

      <View style={{width: '100%'}}>
        <Text type='title' text={`0`} />
        <Text type='subtitle1' label='Balance de mi cuenta' />
      </View>

      <View>
        <Text type='title' text='Registro de cliente' style={styles.topText} />
        <Text type='subtitle1' text='Datos personales' style={styles.topText} />
      </View>

    </View>
  );
};
