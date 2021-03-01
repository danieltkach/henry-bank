import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Surface, IconButton } from "react-native-paper";
import { TextInput, Text, Button } from '../../components';
import LogoSvg from '../../media/LogoSvg.svg';
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
    <View style={styles.content}>
      <View>
        <Text type='title' text='Bienvenido !' style={styles.topText} />
        <Text type='subtitle1' text='Iniciar Sesión para continuar' style={styles.topText} />
      </View>
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
      <View>
        <Button label='entrar' color='primary' style={styles.button}/>
        <Button label='no tengo cuenta' style={styles.button} />
      </View>
      <View style={styles.midText}><Text type='subtitle2' text='O Inicia Sesión con' /></View>
      <View style={{alignItems: 'center'}}>
        <Surface style={styles.googleButton}><IconButton icon='google' color='black' size={24}/></Surface>
      </View>
    </View>
  );

  return (
    <View style={styles.body}>
      <View style={{flex: 1}}><LogoSvg /></View>
      <View style={{flex: 3}}><Content /></View>
    </View>
  );
};
