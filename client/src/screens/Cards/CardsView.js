import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const axios = require('axios');

// Deberíamos usar solo la PK y no la SK acá en el front
// pero por ahora dejo las dos para testear, por las dudas
// que algo no funcione con la otra.
// Estas deberías estar en el .env de todas maneras.
const STRIPE_PK =
  'pk_test_51IStZuG29JPNNfcZuTdmTQnbCrtaUf6Ykeexd2cEC3SLKFxSFi6HEXY1WkV34Ex9PPNsjjcnfjiN3QDVyocbeajW00AJugpZ8H';
const STRIPE_SK =
  'sk_test_51IStZuG29JPNNfcZNrKb0AXFkIregVqFGR6z2nEndVMoQWNGc4GKQviSX7PYyQyoXRsncHQdmT3xeTOj2gHktaLK00V7Q5wAnD';

export default function CardView(props) {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const userId = useSelector((state) => state.userReducer.user._id);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: (formData) => {
      const { name, number, exp_month, exp_year, cvc } = formData;

      // Carga los datos del formulario en la variable params para
      // luego poder pasársela a axios.
      var params = new URLSearchParams();
      params.append('card[name]', name);
      params.append('card[number]', number);
      params.append('card[exp_month]', exp_month);
      params.append('card[exp_year]', exp_year);
      params.append('card[cvc]', cvc);

      // Esta es la manera más rudimentaria de hacerlo
      // sin librerías ni módulos adicionales.
      // Luego deberíamos actualizar esto a Stripe.js para mobile.
      // Implementar redux...
      axios
        .post('https://api.stripe.com/v1/tokens', params, {
          headers: {
            Authorization: `Bearer ${STRIPE_PK}`
          }
        })
        .then((response) => {
          // Acá va la llamada al backend para que se agregue la tarjeta
          // a la base de datos y se asocie con el usuario.
          // Implementar redux...
          axios.post(`https://localhost:4001/user/credit-card/${userId}`, {
            newCardId: response.card.id
          });
        })
        .catch((error) => console.log(error.message));
    }
  });

  return (
    <View>
      <Text>Forma de pago</Text>
      <TextInput
        label="Nombre de la tarjeta"
        onChangeText={(text) => formik.setFieldValue('name', text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <TextInput
        maxLength="16"
        label="Numero de tarjeta"
        onChangeText={(text) => formik.setFieldValue('number', text)}
        value={formik.values.number}
        error={formik.errors.number}
      />
      <View>
        <View>
          <TextInput
            maxLength="2"
            label="Mes"
            onChangeText={(text) => formik.setFieldValue('exp_month', text)}
            value={formik.values.exp_month}
            error={formik.errors.exp_month}
          />
          <TextInput
            maxLength="4"
            label="year"
            onChangeText={(text) => formik.setFieldValue('exp_year', text)}
            value={formik.values.exp_year}
            error={formik.errors.exp_year}
          />
        </View>
        <TextInput
          maxLength="3"
          label="CVV/CVC"
          onChangeText={(text) => formik.setFieldValue('cvc', text)}
          value={formik.values.cvc}
          error={formik.errors.cvc}
        />
      </View>
      <Button mode="contained" onPress={formik.handleSubmit} loading={loading}>
        Agregar tarjeta
      </Button>
    </View>
  );
}
function initialValues() {
  return {
    number: '4242424242424242',
    exp_month: '12',
    exp_year: '2025',
    cvc: '123',
    name: 'Test Name'
  };
}
function validationSchema() {
  return {
    number: Yup.string().min(16).max(16).required(true),
    exp_month: Yup.string().min(1).max(2).required(true),
    exp_year: Yup.string().min(4).max(4).required(true),
    cvc: Yup.string().min(3).max(3).required(true),
    name: Yup.string().min(6).required(true)
  };
}
