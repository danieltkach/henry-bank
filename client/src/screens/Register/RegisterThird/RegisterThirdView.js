import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { View, TextInput, Picker } from "react-native";
import { Surface, IconButton } from "react-native-paper";
import { Text, Button } from '../../../components';
import styles from './../styles';
import { validations, REGEX } from '../../../validations/index';
import { palette, rgba, fontSystem } from '../../../theme';


const darkColor = palette.accent.dark;

const textInputs = [
  {name: 'name', placeholder: 'Nombre', error: 'Nombre invalido', pattern: REGEX.NAME, maxLength: 20, minLength: 2},
  {name: 'lastName', placeholder: 'Apellido', error: 'Apellido invalido', pattern: REGEX.LASTNAME, maxLength: 20, minLength: 2},
  {name: 'typeDocument', placeholder: 'DNI', type: 'picker' },
  {name: 'document', placeholder: 'Número de documento', pattern: REGEX.DNI, error: 'Formato de documento invalido' },
  {name: 'birthdate', placeholder: 'Fecha de nacimiento', pattern: REGEX.DATE, error: 'Formato de fecha invalido' },
  {name: 'phone', placeholder: 'Telefono', pattern: REGEX.PHONE, maxLength: 15, error: 'Telefono invalido', minLength: 8},
  {name: 'street', placeholder: 'Domicilio calle', maxLength: 20, minLength: 3},
  {name: 'streetNumber', placeholder: 'Número', maxLength: 5, minLength: 1},
  {name: 'zipCode', placeholder: 'Codigo postal', pattern: REGEX.ZIPCODE, error: 'Codigo postal invalido', maxLength: 4, minLength: 4},
  {name: 'country', placeholder: 'País', maxLength: 20, minLength: 3},
  {name: 'city', placeholder: 'Ciudad', maxLength: 20, minLength: 3},
];

export default function RegisterThirdView({ navigation, handleFinalSubmit, validateAge }) {
  const { control, handleSubmit, errors, setError } = useForm();

  const onSubmit = data => {
    let result = validateAge(data.birthdate);

    if (!result.state) {
      setError('birthdate', {type: 'required', message: result.message});
    } else handleFinalSubmit(data);
  }

  return (
    <View style={styles.body}>
      <View style={[styles.content, {flex: 1}]}>
        <View>
          <Text type='title' text='Registro de cliente' style={styles.topText} />
          <Text type='subtitle1' text='Datos personales' style={styles.topText} />
        </View>

        <View style={[styles.textInputs, {flexDirection : 'row'}]}>
          {textInputs.map((e, index) => (
            <View key={index} style={{
                width
                  : (e.name === 'name' || e.name === 'lastName' ||
                     e.name === 'city' || e.name === 'country' ||
                     e.name === 'zipCode' || e.name === 'streetNumber') ? '48%'
                  : (e.name === 'typeDocument') ? '23%'
                  : (e.name === 'document') ? '73%'
                  : '100%',
              }}
            >
              {e.type === 'picker' ?
                (
                  <>
                    <Controller
                      name={e.name}
                      defaultValue={e.placeholder}
                      control={control}
                      render={({ onChange, value }) => (
                        <Picker
                          selectedValue={value}
                          style={[fontSystem.body1, styles.text]}
                          onValueChange={(itemValue, itemIndex) => onChange(itemValue)}
                        >
                          <Picker.Item label="DNI" value="DNI" />
                          <Picker.Item label="Pasaporte" value="PAS" />
                          <Picker.Item label="Licencia de conducir" value="LIC" />
                        </Picker>
                      )}
                    />
                  </>
                )
                :(
                  <>
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
                          value: e.name !== 'document' ? e.pattern
                               : control.getValues()['typeDocument'] === 'DNI' ? REGEX.DNI
                               : control.getValues()['typeDocument'] === 'PAS' ? REGEX.PAS
                               : control.getValues()['typeDocument'] === 'LIC' ? REGEX.DNI
                               : '',
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
                  </>
                )
              }
            </View>
            ))
          }
        </View>


        <View>
          <Button onPress={handleSubmit(onSubmit)} label='completar registro' color='primary' style={styles.button} />
        </View>
        <Button onPress={() => navigation.navigate('Login')} label='¿Ya tienes una cuenta? Inicia Sesión' type='text' style={styles.midText}/>
      </View>
    </View>
  );
};
