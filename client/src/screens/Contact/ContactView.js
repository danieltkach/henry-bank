import React from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';
import {
  Header,
  Button,
  Avatar
} from '../../components';
import {REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';
import { useForm, Controller } from 'react-hook-form';
import { useSelector } from 'react-redux';
import styles from './styles';
const darkColor = palette.accent.dark;
const secondaryColor = palette.secondary.light;
const textInputs = [
  {
    name: 'email',
    placeholder: 'Correo electrónico',
    type: 'email',
    error: 'Correo electrónico invalido',
    pattern: REGEX.EMAIL
  }
];

const ContactView = ({
  toggle,
  handleClick,
  deleteContact,
  addContact,
  navigation,
  handleIsLogin
}) => {
  const userId = useSelector((state) => state.userReducer.user._id);
  const contactAlias = useSelector((state) => state.userReducer.user.contactsAlias);
  const { control, handleSubmit, errors } = useForm();

  const DELETECONTACT = (userId,dataEmail) => {
    var contactEmail = {contactEmail: dataEmail}
    deleteContact(userId,contactEmail )
   };

  const onSumbit = (data) => {
     addContact(userId,data)
  };
  return (
    <View style={{ flex: 1 }}>
      {toggle ? (
        <View style={[styles.index, { height: '58%' }]}>
          <View style={styles.texts}>
            <Text style={styles.text1}>Agregar Contacto</Text>
            <Text style={styles.text2}>
              Asociar un contacto a tu perfil te permite poder realizar
              transferncias a otras cuentas dentro de INRO
            </Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'space-around' }}>
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
                        message:
                          (e.maxLength &&
                            `Caracteres maximos ${e.maxLength}`) ||
                          ''
                      },
                      minLength: {
                        value: e.minLength || 1,
                        message:
                          (e.maxLength &&
                            `Caracteres minimos ${e.minLength}`) ||
                          ''
                      }
                    }}
                    render={({ onChange, value }) => (
                      <TextInput
                        placeholder={e.placeholder}
                        secureTextEntry={e.type === 'password' ? true : false}
                        maxLength={!e.maxLength ? e.maxLength : 50}
                        style={[fontSystem.body1, styles.text]}
                        placeholderTextColor="white"
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
              label="Agregar Contacto"
              onPress={handleSubmit(onSumbit)}
              style={{ backgroundColor: secondaryColor }}
              type="button"
            >
              Agregar Usuario
            </Button>
            <Button
              label="Cancelar"
              style={{ backgroundColor: darkColor }}
              onPress={handleClick}
              type="button"
            >
              Agregar Usuario
            </Button>
          </View>
        </View>
      ) : (
        <Header type="settings" label="Contactos" align="center" navigation={navigation} handleIsLogin={handleIsLogin}/>
      )}
      {contactAlias.length > 0 &&
        contactAlias.map((d, index) => (
          <View key={index}>
            <Avatar
              title={d.alias || d.name}
              subtitle={d.email}
              onPress={() => DELETECONTACT(userId,d.email)}
            />
          </View>
        ))}
    </View>
  );
};

export default ContactView;
