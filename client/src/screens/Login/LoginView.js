import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { Text, Button } from "react-native-paper";
import { TextInput } from '../../components';
import styles from './styles';

export default function LoginView({ handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => handleFinalSubmit(data);

  const textInputs = [
    {name: 'email', placeholder: 'Correo electrónico', error: 'Correo electrónico requerido'},
    {name: 'password', placeholder: 'Contraseña', error: 'Contraseña requerido'}
  ];

  const CustomTextInput = ({ name, placeholder, errorLabel }) => (
    <View>
    <Controller
        control={control}
        rules={{required:true}}
        render={({ onChange, value }) => (
        <TextInput
            placeholder={placeholder}
            onChangeText={value => onChange(value)}
            value={value}
            error={{
              label: errorLabel,
              value: errors[name]
            }}
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
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>

      <View style={{width: '100%'}}>
        {textInputs.map((e, index) => (
          <CustomTextInput key={index} name={e.name} placeholder={e.placeholder} />
        ))
        }
      </View>

      <View style={{width: '100%', backgroundColor: 'blue'}}></View>
      <View style={{width: '100%', backgroundColor: 'blue'}}></View>
      <View style={{width: '100%', backgroundColor: 'blue'}}></View>
    </>
  );

  return (
    <View style={{flex: 1}}>
      <View style={{height: 64, width: '100%', backgroundColor: 'red'}}></View>
      <View style={{width: '100%', backgroundColor: 'white'}}>
        <Content />
      </View>
    </View>
  );
};
