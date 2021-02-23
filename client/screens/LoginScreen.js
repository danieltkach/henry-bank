import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Logo from "../images/Logo.png"

const LoginScreen = () => {
  const [text, setText] = useState("");
  

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>

      <TextInput outline label="Email" value={text} onChangeText={(text) => setText(text)}/>
      <TextInput outline label="Password" value={text} onChangeText={(text) => setText(text)}/>
  
      </View>
      
      <View style={styles.foto}> 
      <Image style={styles.logo} source={Logo}/>
      </View>
      <View style={styles.button}>
        <Button  mode="text" onPress={() => console.log('Pressed')}>
          Ingresar
        </Button>
        <Button  mode="text" onPress={() => console.log('Pressed')}>
          Registrarse
        </Button>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "#fff",
  },
  logo: {
    height: 80,
    resizeMode: 'contain',
    width: 150,
    
  },
  inputs: {
    flex:1,
    justifyContent:'center',
    
  },
  foto: {
    position: "absolute",
    left: 140,
    top: 50,
  },
  button: {
    position: "absolute",
    top: 500,
    left: 137,
  }
});

export default LoginScreen;


