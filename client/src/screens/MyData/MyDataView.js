import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, TextInput } from 'react-native';
import { Text, Button } from '../../components';
import styles from './styles';
import { useSelector } from 'react-redux';
import { validations, REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';


const darkColor = palette.accent.dark;



export default function MyDataView({ handleFinalSubmit, navigation }) {
  const { control, handleSubmit, errors } = useForm();

  const user = useSelector(state => state.userReducer.user)


  const onSubmit = (data) => handleFinalSubmit(data);

  
  const textFixed = [
    {name: 'name', value: user.name},
    {name: 'lastName',value: user.lastName},
    {name: 'email', value: user.email},
    {name: 'birthdate', value: user.birthdate},
  ];

  const textInputs = [
    {name: 'phone', value: user.phone, placeholder: 'Telefono', maxLength: 20, minLength: 8},
    {name: 'street', value: user.street, placeholder: 'Domicilio calle', maxLength: 20, minLength: 4},
    {name: 'streetNumber', value: user.streetNumber, placeholder: 'Numero', maxLength: 20, minLength: 2},
    {name: 'zipCode', value: user.zipCode, placeholder: 'Cod. Postal', maxLength: 20, minLength: 4},
    {name: 'city', value: user.city, placeholder: 'Ciudad', maxLength: 20, minLength: 3},
    {name: 'country', value: user.country, placeholder: 'Pais', maxLength: 20, minLength: 3},
  ];

  return (
    <View style={[styles.content, { flex: 1 }]}>
      
       <View style={[styles.textInputs, {flexDirection : 'row'}]}>
        {textFixed.map((e, index) => (
          <View key={index} style={{
            width
              : (e.name === 'name' || e.name === 'lastName') ? '45%'
              : '100%',
          }}>
            <Controller
              name={e.name}
              defaultValue={e.value}
              control={control}
              render={({ value }) => (
                <TextInput
                  style={[fontSystem.body1, styles.text]}
                  underlineColorAndroid="transparent"
                  value={value}
                />
              )}
            />
            <View id="name" style={[styles.underlineBlur]}></View>
          </View>
        ))}
      </View> 

      <View> 
        <Text type='title' text='Modifica los datos:' style={styles.topText} />
      </View>
      
      <View style={[styles.textInputs, {flexDirection : 'row'}]}>
        {textInputs.map((e, index) => (
          <View key={index} style={{
            width
              : (e.name === 'street' || e.name === 'streetNumber') ? '48%'
              : (e.name === 'zipCode') ? '23%'
              : (e.name === 'city') ? '73%'
              : '100%',
          }}>
            <Controller
              name={e.name}
              defaultValue={e.value}
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

