import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import styles from './styles';
import { useForm } from 'react-hook-form';
import { palette } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button } from '../../components';
import MasterCard from './img/masterCard.png';
import Visa from './img/visa.png';
import { useSelector } from 'react-redux';


const array = [
  {
    brand: "Visa",
    exp_month: 11,
    exp_year: 2026,
    last4: 5000,
    name: "CASCO LUCAS GABRIEL"
  },
  {
    brand: "MasterCard",
    exp_month: 1,
    exp_year: 2026,
    last4: 2923,
    name: "CASQUITO LUQUITAS"
  },
  {
    brand: "MasterCard",
    exp_month: 10,
    exp_year: 2026,
    last4: 2021,
    name: "DANIEL CON MUCHA GUITA"
  }]

function getLogo(brand) {
  if (brand === 'MasterCard') {
    return MasterCard
  }
  if (brand === 'Visa') {
    return Visa
  }
}



export default function AccountView({ navigation, account, user, deleteCard }) {
  const userId = useSelector((state) => state.userReducer.user._id);
  console.log(userId,"holaaaaaaaa")

  const handleDelete = (userId) => {
    deleteCard(userId )
   };

  return (


    <View style={{ flex: 1, paddingVertical: 8, marginBottom: 60 }}>

      {array.map((e, index) => (

        <LinearGradient colors={['darkgrey', 'lightgrey']} style={styles.surface} >
          <View style={styles.card}>


            <View style={{ flexDirection: 'row', display: 'tableCell', verticalAlign: 'middle', marginTop: 15, marginBottom: 5 }}>
              <Text type='title' text={'XXXX XXXX XXXX ' + e.last4} />
            </View>

            <Text type='subtitle2' text={e.exp_month + '/' + e.exp_year} style={{ marginBottom: 15 }} />

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
              <Text type='subtitle2' text={e.name} style={{ marginBottom: 15 }} />
              <View >
                <View style={{ alignItems: 'flex-end' }}>
                  <img src={getLogo(e.brand)} style={{ maxWidth: 60 }} />
                </View>

              </View>
            </View>
            <Button color="secondary" label="eliminar tarjeta" onPress={() => handleDelete(userId)} />
          </View>
        </LinearGradient>
      ))}
      <Button color="primary" label="agregar nueva tarjeta" />

    </View>
  );
};
