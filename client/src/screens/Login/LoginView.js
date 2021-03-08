import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form"
import { View, TextInput, Image } from "react-native";
import { IconButton, Surface } from "react-native-paper";
import { Text, Button } from '../../components';
import styles from './styles';
import { validations, REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';
// import LogoSvg from '../../media/LogoSvg.js';


const darkColor = palette.accent.dark;

const textInputs = [
  {name: 'email', placeholder: 'Correo electrónico', type: 'email', error: 'Correo electrónico invalido', pattern: REGEX.EMAIL },
  {name: 'password', placeholder: 'Contraseña', type: 'password', error: 'Minimo 8 caracteres (al menos una letra y número).', pattern: REGEX.PASSWORD, maxLength: 20, minLength: 8}
];

export default function LoginView({ navigation, handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => handleFinalSubmit(data);

  return (
    <View style={styles.body}>

      <View style={{flex: 1, justifyContent: 'center'}}>
        <Image style={styles.logo} source={{uri: "https://res.cloudinary.com/dcen68vrk/image/upload/v1614840097/WalletLogo_-_Inro_logo_xxaihg.png"}} />
      </View>

      <View style={[styles.content, {flex: 3}]}>
        <View>
          <Text type='title' text='Bienvenido !' style={styles.topText} />
          <Text type='subtitle1' text='Inicia sesión para continuar' style={styles.topText} />
        </View>

        <View style={styles.textInputs}>
          {textInputs.map((e, index) => (
            <View key={index}>
              <Controller
                name={e.name}
                defaultValue=""
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Campo requerido'
                  },
                  pattern: {
                    value: e.pattern,
                    message: `${e.error}`
                  },
                  maxLength: {
                    value: e.maxLength || 50,
                    message: e.maxLength && `Caracteres maximos ${e.maxLength}` || ''
                  },
                  minLength: {
                    value: e.minLength || 1,
                    message: e.maxLength && `Caracteres minimos ${e.minLength}` || ''
                  }
                }}
                render={({ onChange, value }) => (
                  <TextInput
                    placeholder={e.placeholder}
                    secureTextEntry={e.type === 'password' ? true : false}
                    maxLength={!e.maxLength ? e.maxLength : 50}
                    style={[fontSystem.body1, styles.text]}
                    placeholderTextColor={rgba(darkColor, 0.5)}
                    underlineColorAndroid='transparent'
                    onChangeText={onChange}
                    value={value}
                    onPress={() => console.log(errors)}
                  />
                )}
              />
              {errors[e.name] ?
                (
                  <>
                    <View id='name' style={[styles.underlineBlur, styles.underlineError]}></View>
                    <Text text={errors?.[e.name]?.message} type='body3' style={styles.helperText}/>
                  </>
                ):(
                  <View id='name' style={[styles.underlineBlur]}></View>
                )
              }
            </View>
            ))
          }
        </View>

        <Button onPress={() => console.log('Screen en proceso')} label='¿Olvidaste tu contraseña?' type='text' style={styles.midText}/>
        <View>
          <Button onPress={handleSubmit(onSubmit)} label='entrar' color='primary' style={styles.button}/>
          <Button onPress={() => navigation.navigate('Register1')} label='no tengo cuenta' style={styles.button} />
        </View>
        <View style={styles.midText}><Text type='subtitle2' text='O Inicia Sesión con' /></View>
        <View style={{alignItems: 'center'}}><Surface style={styles.googleButton}><IconButton icon='google' color='black' size={24}/></Surface></View>
      </View>
    </View>
  );
};
