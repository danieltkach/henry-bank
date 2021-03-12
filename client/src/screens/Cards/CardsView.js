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
  if (brand.toLowerCase() === 'mastercard') {
    return MasterCard;
  }
  if (brand.toLowerCase() === 'visa') {
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
    console.log('cardId in handleDelete', cardId);
    axios
      .delete(`http://localhost:4001/user/credit-card/${userId}`, {
        data: { cardId }
      })
      .then((response) => {
        setCards(response.data);
      });
  };

  console.log(cards);
  return (
    <View style={{ flex: 1, paddingVertical: 8, marginBottom: 60 }}>
      {cards.map((card, index) => (
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
              <Text type="title" text={'XXXX XXXX XXXX ' + card.last4} />
            </View>

            <Text
              type="subtitle2"
              text={card.exp_month + '/' + card.exp_year}
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
                text={card.name}
                style={{ marginBottom: 15 }}
              />
              <View>
                <View style={{ alignItems: 'flex-end' }}>
                  <img src={getLogo(card.brand)} style={{ maxWidth: 60 }} />
                </View>
              </View>
              <Button
                color="secondary"
                label=" Eliminar "
                onPress={() => handleDelete(card._id)}
              />
            </View>
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
