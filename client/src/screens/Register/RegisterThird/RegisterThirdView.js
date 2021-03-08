import React from "react";
import { useForm, Controller } from "react-hook-form"
import { View, TextInput } from "react-native";
import { Surface, IconButton } from "react-native-paper";
import { Text, Button } from '../../../components';
import styles from './../styles';
import { validations, REGEX } from '../../../validations/index';
import { palette, rgba, fontSystem } from '../../../theme';

const darkColor = palette.accent.dark;


const textInputs = [
  {name: 'name', placeholder: 'Nombre', pattern: REGEX.NAME, maxLength: 20, minLength: 2},
  {name: 'lastName', placeholder: 'Apellido', pattern: REGEX.LASTNAME,maxLength: 20, minLength: 2},
  {name: 'typeDocument', placeholder: 'Tipo de documento', pattern: REGEX.TYPEDOCUMENT, maxLength: 20, minLength: 2},
  {name: 'document', placeholder: 'Número de documento', pattern: REGEX.ZIPCODE, maxLength: 10, minLength: 6},
  {name: 'birthdate', placeholder: 'Fecha de nacimiento', maxLength: 20, minLength: 8}
];

export default function RegisterThirdView({ navigation, handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => handleFinalSubmit(data);

  return (
    <View style={styles.body}>
      <View style={[styles.content, {flex: 1}]}>
        <View>
          <Text type='title' text='Registro de cliente' style={styles.topText} />
          <Text type='subtitle1' text='Datos personales' style={styles.topText} />
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
                (<>
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


        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Button onPress={handleSubmit(onSubmit)} icon='arrow-right' type='icon' color='primary' style={styles.button} />
        </View>

        <View style={styles.midText}><Text type='subtitle2' text='O Registrate con' /></View>
        <View style={{alignItems: 'center'}}><Surface style={styles.googleButton}><IconButton icon='google' color='black' size={24}/></Surface></View>
        <Button onPress={() => navigation.navigate('Login')} label='¿Ya tienes una cuenta? Inicia Sesión' type='text' style={styles.midText}/>
      </View>
    </View>
  );
};
