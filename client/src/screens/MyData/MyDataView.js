import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';
import { validations, REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';


const darkColor = palette.accent.dark;

const textFixed = [
  {name: 'Nombre'},
  {name: 'Apellido'},
  {name: 'Email'},
  {name: 'Fecha de Nacimiento'},
  {name: 'Tipo de Documento'},
  {name: 'Numero de Documento'},
];

const textInputs = [
  {name: 'phone', placeholder: 'Telefono', maxLength: 20, minLength: 8},
  {name: 'street', placeholder: 'Domicilio calle', maxLength: 20, minLength: 4},
  {name: 'streetNumber', placeholder: 'Número', maxLength: 20, minLength: 2},
  {name: 'zipCode', placeholder: 'Codigo postal', maxLength: 20, minLength: 4},
  {name: 'city', placeholder: 'Ciudad', maxLength: 20, minLength: 3},
  {name: 'country', placeholder: 'País', maxLength: 20, minLength: 3},
];


export default function MyDataView({ handleFinalSubmit, navigation }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = (data) => handleFinalSubmit(data);
  return (
    <View style={[styles.content, { flex: 1 }]}>

      <View style={styles.textInputs}>
        {textFixed.map((e, index) => (
          <View key={index}>
            <Controller
              name={e.name}
              defaultValue={e.name}
              control={control}
              render={({ value }) => (
                <TextInput
                  style={[fontSystem.body1, styles.text]}
                  underlineColorAndroid="transparent"
                  value={value}
                />
              )}
            />
          </View>
        ))}
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
                  value: e.required,
                  message: 'Campo requerido'
                },
                pattern: {
                  value: e.pattern,
                  message: `${e.error}`
                },
                maxLength: {
                  value: e.maxLength || 50,
                  message:
                    (e.maxLength && `Caracteres maximos ${e.maxLength}`) || ''
                },
                minLength: {
                  value: e.minLength || 1,
                  message:
                    (e.maxLength && `Caracteres minimos ${e.minLength}`) || ''
                }
              }}
              render={({ onChange, value }) => (
                <TextInput
                  placeholder={e.placeholder}
                  secureTextEntry={e.type === 'password' ? true : false}
                  maxLength={!e.maxLength ? e.maxLength : 50}
                  style={[fontSystem.body1, styles.text]}
                  placeholderTextColor={rgba(darkColor, 0.5)}
                  underlineColorAndroid="transparent"
                  onChangeText={onChange}
                  value={value}
                  onPress={() => console.log(errors)}
                />
              )}
            />
            {errors[e.name] ? (
              <>
                <View
                  id="name"
                  style={[styles.underlineBlur, styles.underlineError]}
                ></View>
                <Text
                  text={errors?.[e.name]?.message}
                  type="body3"
                  style={styles.helperText}
                />
              </>
            ) : (
              <View id="name" style={[styles.underlineBlur]}></View>
            )}
          </View>
        ))}
      </View>

      <Button
        label="Confirmar Cambios"
        color="primary"
        style={styles.button}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

