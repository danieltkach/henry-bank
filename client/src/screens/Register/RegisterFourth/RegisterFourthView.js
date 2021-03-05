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
  {name: 'phone', placeholder: 'Telefono', pattern: REGEX.PHONE, maxLength: 15, minLength: 8},
  {name: 'street', placeholder: 'Domicilio calle', maxLength: 20, minLength: 3},
  {name: 'streetNumber', placeholder: 'Número', maxLength: 5, minLength: 1},
  {name: 'zipCode', placeholder: 'Codigo postal',pattern: REGEX.ZIPCODE, maxLength: 4, minLength: 4},
  {name: 'city', placeholder: 'Ciudad', maxLength: 20, minLength: 3},
  {name: 'country', placeholder: 'País', maxLength: 20, minLength: 3},
];

export default function RegisterFourthView({ navigation, handleFinalSubmit }) {
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


        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button onPress={handleSubmit(onSubmit)} label='registrarme' color='primary' style={styles.button} />
        </View>

        <View style={styles.midText}><Text type='subtitle2' text='O Registrate con' /></View>
        <View style={{alignItems: 'center'}}><Surface style={styles.googleButton}><IconButton icon='google' color='black' size={24}/></Surface></View>
        <Button onPress={() => navigation.navigate('Login')} label='¿Ya tienes una cuenta? Inicia Sesión' type='text' style={styles.midText}/>
      </View>
    </View>
  );
};
