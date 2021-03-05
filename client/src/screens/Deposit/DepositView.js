import React from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import styles from './styles';

export default function DespositView() {
  return (
    <View style={styles.body}>
      <View style={styles.uno}>
        Usá este código siempre que quieras ingresar dinero a tu cuenta.
        El monto mínimo es de $50
   </View>

      <View style={styles.dos}>
        <text h1>88333 44526</text>
      </View>

      <View style={styles.tres}>
        Mostrale este código al cajero en PagoFacil
   </View>

      <View style={styles.boton} >
        <Button >Confirmar Recarga</Button>
      </View>

    </View>
  );
};
