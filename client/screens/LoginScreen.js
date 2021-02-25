import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button ,useTheme} from "react-native-paper";
import { color } from "react-native-reanimated";
import Logo from "../images/Logo.png"

const LoginScreen = ({navigation}) => {
  const [text, setText] = useState({
    email:"",
    pass:"",
    emailError:false,
    passError:false
  });


  const checkTextInput = () => {
    if (!text.email.trim()) {
      alert('Please Enter Email')
      setText({
        ...text,
        emailError:true
      })
      return;
    }
    if (!text.pass.trim()) {
      alert('Please Enter Pass');
      setText({
        ...text,
        passError:true
      })
      return;
    }
  };

const textInputEmail=(val) =>{
    setText({
      ...text,
      email:val,
      emailError:false
    })
}
const textInputPass=(val) =>{
    setText({
      ...text,
      pass:val,
      passError:false
    })
}

const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
      <TextInput mode="outlined" label="Email"  onChangeText={(val) => textInputEmail(val)}/>
      {text.emailError && (
        <Text style={{ color: "red" }}>verificar email</Text>
      )}
      <TextInput mode="outlined" label="Password" onChangeText={(val) => textInputPass(val)}/>
      {text.passError && (
        <Text style={{ color: "red" }}>verificar password</Text>
      )}
      </View>
      
      <View style={styles.foto}> 
      <Image style={styles.logo} source={Logo}/>
      </View>
      <View style={styles.button}>
        <Button
        onPress={checkTextInput}>
            Ingresar
        </Button>
        <Button onPress={() => navigation.navigate('Register')}>
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


