import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form"
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput, Button ,useTheme} from "react-native-paper";
import { color } from "react-native-reanimated";
import { loginUserFetch } from './../controllers/user'
import Logo from '../../images/Logo.png';

const LoginScreen = ({ navigation }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    loginUserFetch(data)
    .then((responseLogin) =>  {
      console.log(responseLogin);
      navigation.navigate('Menu');
      return
    })
    .catch(err => console.log(err));
  };

const {colors} = useTheme()
  return (
    <View style={styles.container}>
      <View style={styles.circuloNE}/>
      <View style={styles.circuloE}/>
      <View style={styles.circuloO}/>
      <View style={styles.circuloSO}/>
      <View style={styles.inputs}>
        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Correo electrónico"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="email"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.email && <Text style={{color:"red"}}>Correo electrónico requerido.</Text>}

        <Controller
            control={control}
            rules={{required:true}}
            render={({ onChange, onBlur, value }) => (
            <TextInput
                style={{backgroundColor:"white"}}
                label="Contraseña"
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="password"
            rules={{ required: true }}
            defaultValue=""
        />
        {errors.password && <Text style={{color:"red"}}>Contraseña requerida.</Text>}

      </View>

      <View style={styles.foto}>
      <Image style={styles.logo} source={Logo}/>
      </View>
      <View style={styles.button}>
        <Button
        onPress={handleSubmit(onSubmit)}>
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
  },
  circuloNE: {
    position: "absolute",
    top: -280,
    right: -260,
    borderRadius: 400,
    backgroundColor: '#E52B2B',
    opacity:0.4 ,
    width: 400,
    height: 400, 
},
circuloE: {
    position: "absolute",
    top: 0,
    left: 350,
    borderRadius: 400,
    backgroundColor: '#3551F2',
    opacity:0.4 ,
    width: 400,
    height: 400, 
},
circuloO: {
    position: "absolute",
    bottom: 380,
    right: 370,
    borderRadius: 200,
    backgroundColor: '#E52B2B',
    opacity:0.4 ,
    width: 250,
    height: 250, 
},
circuloSO: {
    position: "absolute",
    top: 600,
    left: -100,
    borderRadius: 100,
    backgroundColor: '#3551F2',
    opacity:0.4 ,
    width: 200,
    height: 200, 
}
});

export default LoginScreen;
