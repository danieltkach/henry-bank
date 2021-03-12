import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../Account/styles';
import { useForm } from 'react-hook-form';
import { palette } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button } from '../../components';
import MasterCard from './img/masterCard.png';
import Visa from './img/visa.png';
import { useSelector } from 'react-redux';
import axios from 'axios';

function getLogo(brand) {
  if (brand === 'MasterCard') {
    return MasterCard;
  }
  if (brand === 'Visa') {
    return Visa;
  }
}

export default function CardView({ navigation, account, user, deleteCard }) {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/user/credit-card/${userId}`)
      .then((data) => {
        setCards(data.data);
      });
  }, []);

  const userId = useSelector((state) => state.userReducer.user._id);
  console.log('Usuario >>> ', userId);

  const handleDelete = (cardId) => {
    axios.delete(`http://localhost:4001/user/credit-card/${userId}`, {
      cardId
    });
  };

  //
  return (
    <View style={{ flex: 1, paddingVertical: 8, marginBottom: 60 }}>
      {cards.map((e, index) => (
        <LinearGradient
          colors={['darkgrey', 'lightgrey']}
          style={styles.surface}
        >
          <View style={styles.card}>
            <View
              style={{
                flexDirection: 'row',
                display: 'tableCell',
                verticalAlign: 'middle',
                marginTop: 15,
                marginBottom: 5
              }}
            >
              <Text type="title" text={'XXXX XXXX XXXX ' + e.last4} />
            </View>

            <Text
              type="subtitle2"
              text={e.exp_month + '/' + e.exp_year}
              style={{ marginBottom: 15 }}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-end'
              }}
            >
              <Text
                type="subtitle2"
                text={e.name}
                style={{ marginBottom: 15 }}
              />
              <View>
                <View style={{ alignItems: 'flex-end' }}>
                  <img src={getLogo(e.brand)} style={{ maxWidth: 60 }} />
                </View>
              </View>
            </View>
            <Button
              color="secondary"
              label="eliminar tarjeta"
              onPress={() => handleDelete(userId)}
            />
          </View>
        </LinearGradient>
      ))}
      <Button
        color="primary"
        label="agregar nueva tarjeta"
        onPress={() => navigation.navigate('CardsForm')}
      />
    </View>
  );
}
