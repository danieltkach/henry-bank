import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Button, Colors, IconButton, TextInput } from 'react-native-paper';
import Logo from './../../images/Logo.png';
import { StatusBar }  from 'expo-status-bar';


const Register1 = ({ navigation, idUser }) => {
  const { control, handleSubmit, errors, watch } = useForm();
  const tipoRef = useRef();
  const docRef = useRef();
  const nombreRef = useRef ();
  const apellidoRef = useRef ();
  const nacimientoRef = useRef ();
  const confirmPasswordRef = useRef();
  const onSubmit = (data) => navigation.navigate('Register2', {dataInitial:data, idUser});

  return (
    <View style={styles.container}>
       <StatusBar style='dark' />
        <View style={styles.circuloNE}/>

        <View style={styles.circuloS}/>
        <View style={styles.circuloSE}/>


      <Text h1 style={styles.welcome}>
        Registro
      </Text>
      <Text h3 style={styles.continue}>
        Datos personales
      </Text>


      <Controller
        control={control}
        onFocus={() => {
        }}
        render={({ onChange, onBlur,value }) => (
          <TextInput
            style={styles.input}
            label="Tipo de documento"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            ref={tipoRef}
          />
        )}
        name="tipo"
        rules={{ required: true }}
        defaultValue=""
      />
      {errors.tipo && <Text>Obligatorio</Text>}

      <Controller
        control={control}
         onFocus={() => {
          passwordRef.current.focus();
        }}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            label="N° de documento"
            onBlur={onBlur}
            secureTextEntry={false}
            onChangeText={(value) => onChange(value)}
            value={value}
             ref={docRef}
          />
        )}
        name="doc"
         rules={{ required: true }}
        defaultValue=""
      />
 {errors.doc && <Text>Obligatorio</Text>}

       <Controller
         control={control}
          onFocus={() => {
           passwordRef.current.focus();
         }}
         render={({ onChange, onBlur, value }) => (
           <TextInput
             style={styles.input}
             label="Nombre"
             onBlur={onBlur}
             secureTextEntry={false}
             onChangeText={(value) => onChange(value)}
             value={value}
              ref={nombreRef}
           />
         )}
         name="nombre"
          rules={{ required: true }}
         defaultValue=""
       />
  {errors.nombre && <Text>Obligatorio</Text>}

       <Controller
         control={control}
          onFocus={() => {
           passwordRef.current.focus();
         }}
         render={({ onChange, onBlur, value }) => (
           <TextInput
             style={styles.input}
             label="Apellido"
             onBlur={onBlur}
             secureTextEntry={false}
             onChangeText={(value) => onChange(value)}
             value={value}
              ref={apellidoRef}
           />
         )}
         name="apellido"
          rules={{ required: true }}
         defaultValue=""
       />
  {errors.apellido && <Text>Obligatorio</Text>}

      <Controller
        control={control}
         onFocus={() => {
          passwordRef.current.focus();
        }}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            label="nacimiento"
            onBlur={onBlur}
            secureTextEntry={false}
            onChangeText={(value) => onChange(value)}
            value={value}
             ref={nacimientoRef}
          />
        )}
        name="nacimiento"
         rules={{ required: true }}
        defaultValue=""
      />
 {errors.nacimiento && <Text>Obligatorio</Text>}


      {/* <View>
        <IconButton color={Colors.white} mode='contained'style={styles.buttonleft} icon = "arrow-left-bold" onPress={() => navigation.navigate('Register')} > </IconButton>
      </View> */}
      <View>
        <IconButton color={Colors.white} mode='contained'style={styles.buttonright} icon = "arrow-right-bold" title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <Button color={Colors.black} h1 style={{ marginTop: 50 }} onPress={() => navigation.navigate('LoginScreen')}>
        ¿Ya tenes cuenta? Inicia Sesión
      </Button>
    </View>
  );
};

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
      right:60,
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

export default Register1;
