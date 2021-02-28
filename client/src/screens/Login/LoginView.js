import React from "react";
import { View } from "react-native";
import { useForm, Controller } from "react-hook-form"
import { TextInput, Text, Button } from "react-native-paper";
import styles from './styles';

export default function LoginView({ handleFinalSubmit }) {
  const { control, handleSubmit, errors } = useForm();

  const onSubmit = data => handleFinalSubmit(data);

  const textInputs = [
    {name: 'email', label: 'Correo electrónico', error: 'Correo electrónico requerido'},
    {name: 'password', label: 'Contraseña', error: 'Contraseña requerido'}
  ];

  const CustomTextInput = ({ name, label }) => (
    <View>
    <Controller
        control={control}
        rules={{required:true}}
        render={({ onChange, onBlur, value }) => (
        <TextInput
            label={label}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
        />
        )}
        name={name}
        rules={{ required: true }}
        defaultValue=""
    />
    {errors[name] && <Text style={{color:"red"}}>{error}</Text>}
  </View>
  );

  const Content = () => (
    <>
      <View style={{flex: 1, backgroundColor: 'blue'}}></View>

      <View style={{width: '100%', backgroundColor: 'blue'}}>
        {textInputs.map(e => (
          <CustomTextInput name={e.name} label={e.label} />
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
