import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { Surface, IconButton } from "react-native-paper";
import { TextInput, Text, Button } from '../../components';
import styles from './styles';

export default function LoginView({ handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => handleFinalSubmit(data);

  const textInputs = [
    {name: 'email', placeholder: 'Correo electrónico', error: 'Correo electrónico requerido', type: 'email'},
    {name: 'password', placeholder: 'Contraseña', error: 'Contraseña requerido', type: 'password'}
  ];

  const CustomTextInput = ({ name, placeholder, errorLabel, type }) => (
    <View style={{paddingVertical: 8}}>
    <Controller
      control={control}
      rules={{required:true}}
      render={({ onChange, value }) => (
        <TextInput
          placeholder={placeholder}
          onChangeText={value => onChange(value)}
          value={value}
          type={type}
        />
      )}
      name={name}
      rules={{ required: true }}
      defaultValue=""
    />
  </View>
  );

  const Content = () => (
    <>
      <Text type='title' text='Bienvenido !' style={styles.topText} />
      <Text type='subtitle1' text='Iniciar Sesión para continuar' style={styles.topText} />
      <View style={styles.textInputs}>
        {textInputs.map((e, index) => (
          <CustomTextInput
            key={index}
            name={e.name}
            placeholder={e.placeholder}
            errorLabel={e.error}
            type={e.type}
          />
        ))
        }
      </View>
      <View style={styles.midText}><Text type='subtitle2' text='¿Olvidaste tu contraseña?' /></View>

      <Button label='entrar' color='primary' />
      <Button label='no tengo cuenta' />
      <View style={styles.midText}><Text type='subtitle2' text='O Inicia Sesión con' /></View>
      <View style={{alignItems: 'center'}}>
        <Surface style={styles.googleButton}><IconButton icon='google' color='black' size={24}/></Surface>
      </View>
    </>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{height: 64, width: '100%', backgroundColor: 'red'}}></View>
      <View style={{width: '100%'}}>
        <Content />
      </View>
    </View>
  );
};
