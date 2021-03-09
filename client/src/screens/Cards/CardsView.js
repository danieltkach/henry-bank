import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
// import Toast from "react-native-root-toast";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
// import { paymentCartApi, deleteCartApi } from "../../api/cart";
// import useAuth from "../../hooks/useAuth";
// import { STRAPI_PUBLISHABLE_KEY } from "../../utils/constants";
//  import { formStyle } from "./styles";

const stripe = require("stripe-client")("pk_test_51IStZuG29JPNNfcZuTdmTQnbCrtaUf6Ykeexd2cEC3SLKFxSFi6HEXY1WkV34Ex9PPNsjjcnfjiN3QDVyocbeajW00AJugpZ8H");

export default function CardView(props) {
  const { totalPayment, selectedAddress, products } = props;
  const [loading, setLoading] = useState(false);
  // const { auth } = useAuth();
  const navigation = useNavigation();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData) => {
      const result = await stripe.createToken({ card: formData });
      setLoading(true);
      
      if (result?.error) {
        // Toast.show(result.error.message, {
        //   position: Toast.positions.CENTER,
        // });
        setLoading(false);
      } else {
        console.log(result, "aca resultado")
        // const response = await paymentCartApi(
        //   auth,
        //   result.id,
        //   products,
        //   selectedAddress
        // );
        // if (size(response) > 0) {
        //   console.log("Pedido completado");
        //   await deleteCartApi();
        //   navigation.navigate("account", { screen: "orders" });
        // } else {
        //   // Toast.show("Error al realizar el pedid", {
        //   //   position: Toast.positions.CENTER,
        //   // });
        //   setLoading(false);
        // }
      }
    },
  });
  return (
    <View>
      <Text >Forma de pago</Text>
      <TextInput
        label="Nombre de la tarjeta"
        onChangeText={(text) => formik.setFieldValue("name", text)}
        value={formik.values.name}
        error={formik.errors.name}
      />
      <TextInput maxLength="16"
        label="Numero de tarjeta"
        onChangeText={(text) => formik.setFieldValue("number", text)}
        value={formik.values.number}
        error={formik.errors.number}
      />
      <View >
        <View >
          <TextInput maxLength="2"
            label="Mes"
            onChangeText={(text) => formik.setFieldValue("exp_month", text)}
            value={formik.values.exp_month}
            error={formik.errors.exp_month}
          />
          <TextInput maxLength="2"
            label="Año"
            onChangeText={(text) => formik.setFieldValue("exp_year", text)}
            value={formik.values.exp_year}
            error={formik.errors.exp_year}
          />
        </View>
        <TextInput maxLength="3"
          label="CVV/CVC"
          onChangeText={(text) => formik.setFieldValue("cvc", text)}
          value={formik.values.cvc}
          error={formik.errors.cvc}
        />
      </View>
      <Button
        mode="contained"
        // contentStyle={styles.btnContent}
        // labelStyle={styles.btnText}
        onPress={formik.handleSubmit}
        loading={loading}
      >
        Pagar {totalPayment && `(${totalPayment} €)`}
      </Button>
    </View>
  );
}
function initialValues() {
  return {
    number: "",
    exp_month: "",
    exp_year: "",
    cvc: "",
    name: "",
  };
}
function validationSchema() {
  return {
    number: Yup.string().min(16).max(16).required(true),
    exp_month: Yup.string().min(2).max(2).required(true),
    exp_year: Yup.string().min(2).max(2).required(true),
    cvc: Yup.string().min(3).max(3).required(true),
    name: Yup.string().min(6).required(true),
  };
}
