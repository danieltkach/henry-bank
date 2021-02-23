import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput } from "react-native-paper";

const LoginScreen = () => {
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        outline
        label="Email"
        value={text}
        onChangeText={(text) => setText(text)}
      />

      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
