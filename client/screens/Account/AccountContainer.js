import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button, useTheme} from "react-native-paper";
import { color } from "react-native-reanimated";
import { registerUserFetch } from './../controllers/user';

const AccountContainer = () => {

  const handleFinalSubmit = (inputs) => {
    registerUserFetch(inputs)
    .then(registerResponse => {
      console.log(registerResponse.message)
    })
    .catch(err => {
      console.log(err.message);
    })
  }

  return (
    <Account handleFinalSubmit={handleFinalSubmit}>
  )


}
