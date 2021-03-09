import React, { useSelector } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styles from './styles';
import { useForm, Controller } from "react-hook-form";

const textInputs = [
  {name: 'email', placeholder: 'Correo electrónico', type: 'email', error: 'Correo electrónico invalido', pattern: REGEX.EMAIL, }
];


export default function DespositView() {

  const cvu = useSelector(state => state.account.account.cvu);

  const fetchRecharge = (cvu, input) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({ "cvu": cvu, "amount": input });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("http://192.168.3.146:4002/transaction/transfer/recharge", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }

  return (
    <View style={styles.body}>
      <View style={styles.uno}>
        Usá este código siempre que quieras ingresar dinero a tu cuenta.
        El monto mínimo es de $50
   </View>
    
      <View style={styles.dos}>
        <text h1>{cvu}</text>
      </View>

      <View style={styles.tres}>
        Mostrale este código al cajero en PagoFacil
   </View>

      <View style={styles.boton} >
        <Button onPress={() => fetchRecharge} >Recargar dinero</Button>
      </View>

    </View>
  );
};
