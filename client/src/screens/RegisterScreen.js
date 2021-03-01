import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Colors, IconButton, TextInput } from 'react-native-paper';
import Logo from '../../images/Logo.png';
import { StatusBar } from 'expo-status-bar';
import { registerUserFetch } from "./../controllers/user"


const RegisterScreen = ({ navigation }) => {
  const { control, handleSubmit, errors, watch } = useForm();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const onSubmit = (data) => {
    console.log(data)
    registerUserFetch(data)
    .then(response => {
      console.log(response,"response")
      navigation.navigate('EmailSent', {
         email: data.email
      });
    });
   }

  return (
    <View style={styles.container}>
       <StatusBar style='dark' />
        <View style={styles.circuloNE}/>
        <View style={styles.circuloS}/>
        <View style={styles.circuloSE}/>

 <View style={styles.foto}>
            <Image style={styles.logo} source={Logo}/>
        </View>
      <Text h1 style={styles.welcome}>
        Bienvenido !
      </Text>
      <Text h3 style={styles.continue}>
        Registrarse para continuar
      </Text>


      <Controller
        control={control}
        onFocus={() => {
          emailRef.current.focus();
        }}
        render={({ onChange, onBlur,value }) => (
          <TextInput
            style={styles.input}
            label="Email"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            ref={emailRef}
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.email && <Text>Obligatorio</Text>}

      <Controller
        control={control}
         onFocus={() => {
          passwordRef.current.focus();
        }}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            label="Contraseña"
            onBlur={onBlur}
            secureTextEntry={false}
            onChangeText={(value) => onChange(value)}
            value={value}
             ref={passwordRef}
          />
        )}
        name="password"
         rules={{ required: true }}
        defaultValue=""

      />
 {errors.password && <Text>Obligatorio</Text>}
      {/* <Controller
        control={control}
        onFocus={() => {
          confirmPasswordRef.current.focus();
        }}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
             label="Confirmar Contraseña"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry={false}
          />
        )}
        name="confirmpassword"
        rules={{ required: true }}
        defaultValue=""
      />
 {errors.confirmpassword && <Text>Obligatorio</Text>}

 {((watch('password')) === (watch('confirmPassword'))) ?  <Text></Text> : <Text>Contraseña no coinciden</Text> } */}



      <View>
        <IconButton color={Colors.white} mode='contained'style={styles.buttonleft} icon = "arrow-left-bold" onPress={() => navigation.navigate('LoginScreen')} > </IconButton>
      </View>
      <View>
        <IconButton color={Colors.white} mode='contained'style={styles.buttonright} icon = "arrow-right-bold" title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <Button color={Colors.black} h1 style={{ marginTop: 50 }} onPress={() => navigation.navigate('EmailSent')}>
        ¿Ya tenes cuenta? Inicia Sesión
      </Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  welcome: {
    fontSize:20,
    fontWeight: 'bold',
    right:100,
  },
  continue:{
      fontSize:20,
      right:38,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  input: {
    marginTop: 10,
    width: 300,
  },
  buttonleft: {
    width: 50,
    backgroundColor: '#3551F2',
    marginTop: 10,
    marginRight:280,
    borderRadius: 5,
  },
  buttonright: {
    width: 50,
    backgroundColor: '#3551F2',
    marginTop: -40,
    marginLeft:280,
    borderRadius: 5,
  },
    logo: {
        height: 80,
        resizeMode: 'contain',
        width: 150,
        top:-60
    },
   circuloNE: {
        position: "absolute",
        top: -350,
        right: -50,
        borderRadius: 400,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 400,
        height: 400,
    },
    circuloS: {
        position: "absolute",
        borderRadius: 200,
        backgroundColor: '#E52B2B',
        opacity:0.4 ,
        width: 250,
        height: 250,
        bottom: -190,
    },
    circuloSE: {
        position: "absolute",
        top: 700,
        right: -80,
        borderRadius: 100,
        backgroundColor: '#3551F2',
        opacity:0.4 ,
        width: 200,
        height: 200,
    }
});
