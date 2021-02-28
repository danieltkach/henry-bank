import React from "react";
import { useForm, Controller } from "react-hook-form"
import { View, Text, Image } from "react-native";
import { TextInput, Button, useTheme } from "react-native-paper";
import { color } from "react-native-reanimated";
import Logo from './../../images/Logo.png';
import styles from './styles';

const LoginView = ({ handleFinalSubmit }) => {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => handleFinalSubmit(data);
  const {colors} = useTheme()

  return (
    <View style={styles.container}>
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

export default LoginView;
