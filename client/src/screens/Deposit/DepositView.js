import React, { useSelector } from "react";
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput } from "react-native";
import { Button } from "react-native-paper";
import { REGEX } from '../../validations/index';
import { palette, rgba, fontSystem } from '../../theme';
import styles from './styles';

export default function DespositView({handleFinalSubmit}) {

  const { control, handleSubmit, errors } = useForm(); 

  const onSubmit = (data) => {
    console.log(data);
    handleFinalSubmit(data);
  };

  return (
    <View>
      <View>
        <Controller
          name="amount"
          defaultValue=""
          control={control}
          rules={{
            required: {
              value: true,
              message: 'Campo requerido'
            },
            pattern: {
              value: REGEX.AMOUNT,
              message: `sólo acepto números`
            },
          }}
          render={({ onChange, value }) => (
            <TextInput
              placeholder="Monto a recargar..."              
//            maxLength={!e.maxLength ? e.maxLength : 50}
              style={[fontSystem.body1, styles.text]}
              placeholderTextColor="#A0A0A0"
              underlineColorAndroid="transparent"
              onChangeText={onChange}
              value={value}
              onPress={() => console.log(errors)}
            />
          )}
        />
        <Button onPress={handleSubmit(onSubmit)}>Confirmar recarga</Button>
      </View>
    </View>
  );
};
