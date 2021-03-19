import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"
import { View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import styles from './styles';
import { palette, rgba, fontSystem, setColor } from '../../theme';
import { LinearGradient } from 'expo-linear-gradient';
import { Text, Button } from '../../components';
import { IconButton } from 'react-native-paper';
import { validations, REGEX } from '../../validations/index';

const getAge = (date) => {
  let yearNow = new Date().getFullYear();
  return yearNow - date.split('/')[2];
}

const textInputs = [
  {name: 'cellphone', placeholder: 'Telefono', pattern: REGEX.PHONE, maxLength: 15, error: 'Telefono invalido', minLength: 8},
  {name: 'streetName', placeholder: 'Domicilio calle', maxLength: 20, minLength: 3},
  {name: 'streetNumber', placeholder: 'Número', maxLength: 5, minLength: 1},
  {name: 'zipCode', placeholder: 'Codigo postal', pattern: REGEX.ZIPCODE, error: 'Codigo postal invalido', maxLength: 4, minLength: 4},
  {name: 'country', placeholder: 'País', maxLength: 20, minLength: 3},
  {name: 'city', placeholder: 'Ciudad', maxLength: 20, minLength: 3},
];


export default function ProfileView({ navigation, user, handleFinalSubmit }) {
  const { control, handleSubmit, errors, clearErrors } = useForm();
  const [toggle, setToggle] = useState(false);

  const onSubmit = data => {
    handleFinalSubmit(data);
    setToggle(false);
    clearErrors();
  }

  return (
    <View style={{flex: 1, paddingVertical: 8}}>

      <View style={{alignItems: 'center'}}>
        <View style={[styles.surface, {top: 90}]} />

        <View style={styles.avatarCover}>
          <View style={styles.avatar}>
            <Text text={user.name[0]} type='title' style={{color: 'white'}}/>
          </View>
        </View>
      </View>
      <View style={{alignItems: 'center', paddingVertical: 8}}>
        <Text text={`${user.name} ${user.lastName}, ${getAge(user.birthdate)}`} type='title' style={{color: 'white'}}/>
        <Text text={user.email} type='body2' style={{color: 'white'}}/>
      </View>

      <View style={{flex: 1, paddingBottom: 56, paddingTop: 8}}>

        <View style={{
          position: toggle ? 'static' : 'absolute',
          flex: toggle ? 0 : 1,
          alignItems: 'space-around',
          transform: toggle ? 'scale(1, 0)' : 'scale(1, 1)',
          transition: '.5s',
          width: '100%'}}
        >
          <View style={{flex: 1}}>
            <View style={styles.header}>
              <View style={{ justifyContent: 'center'}}>
                <Text text='Domicilio' type='body2' style={styles.labelText} />
              </View>
              <View style={{ height: 48, alignItems: 'space-around', justifyContent: 'center'}}>
                <Text text={`${user.streetName}, ${user.streetNumber}`} type='body1' color='light' />
                <Text text={`${user.city}, ${user.country}`} type='body1' color='light' />
              </View>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.header}>
              <View style={{ justifyContent: 'center'}}>
                <Text text='Codigo postal' type='body2' style={styles.labelText} />
              </View>
              <View style={{height: 24, alignItems: 'space-around', justifyContent: 'center'}}>
                <Text text={user.zipCode} type='body1' color='light' />
              </View>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.header}>
              <View style={{ justifyContent: 'center'}}>
                <Text text={user.idType} type='body2' style={styles.labelText} />
              </View>
              <View style={{height: 24, alignItems: 'space-around', justifyContent: 'center'}}>
                <Text text={user.idNumber} type='body1' color='light' />
              </View>
            </View>
            <View style={styles.separator}></View>

            <View style={styles.header}>
              <View style={{ justifyContent: 'center'}}>
                <Text text='Telefono' type='body2' style={styles.labelText} />
              </View>
              <View style={{height: 24, alignItems: 'space-around', justifyContent: 'center'}}>
                <Text text={user.cellphone} type='body1' color='light' />
              </View>
            </View>
            <View style={styles.separator}></View>
          </View>

          <Button onPress={() => setToggle(true)} label='editar datos' color='secondary' style={styles.button} />
        </View>

        <View style={{
          position: toggle ? 'absolute' : 'static',
          flex: toggle ? 1 : 0,
          justifyContent: 'space-around',
          transform: toggle ? 'scale(1, 1)' : 'scale(1, 0)',
          transition: '.5s'}}>
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
                        placeholderTextColor={setColor.gray}
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
              </View>
              ))
            }
          </View>
          <Button onPress={handleSubmit(onSubmit)} label='aplicar cambios' color='secondary' style={styles.button} />
          <Button onPress={() => {
            setToggle(false);
            clearErrors();
          }} label='cancelar' color='accent' style={styles.button} />

        </View>



      </View>
    </View>
  );
};
